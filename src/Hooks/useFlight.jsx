import {
  collection,
  doc,
  getDoc,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { useState } from "react";
import { db } from "../Firebase/firebase";

export default function useFlight() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [flight, setFlight] = useState([]);
  const [singleFlight, setSingleFlight] = useState([]);

  const getFlight = async () => {
    try {
      setLoading(true);
      setError(null);

      const q = query(collection(db, "flights"), orderBy("createdAt"));

      return onSnapshot(q, (snapShot) => {
        const data = snapShot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setFlight(data);
      });
    } catch (error) {
      setError(error.message);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const getSingleFlight = async (id) => {
    try {
      setLoading(true);
      setError(null);

      const snapShot = await getDoc(doc(db, "flights", id));

      if (snapShot.exists()) {
        setSingleFlight({
          id: snapShot.id,
          ...snapShot.data(),
        });
      } else {
        setError("Flight not found");
      }
    } catch (error) {
      setError(error.message);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, flight, getFlight, getSingleFlight, singleFlight };
}
