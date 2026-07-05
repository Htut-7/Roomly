import { useState } from "react";
import { db } from "../Firebase/firebase";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  getDoc,
  doc,
} from "firebase/firestore";

export default function useHotels() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [hotel, setHotel] = useState([]);
  const [singleHotel, setSingleHotel] = useState([]);

  const getHotel = async () => {
    try {
      setLoading(true);
      setError(null);

      const q = query(collection(db, "hotels"), orderBy("createdAt"));

      return onSnapshot(q, (snapShot) => {
        const data = snapShot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setHotel(data);
        setLoading(false);
      });
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  const getSingleHotel = async (id) => {
    try {
      setLoading(true);
      setError(null);

      const snapShot = await getDoc(doc(db, "hotels", id));

      if (snapShot.exists()) {
        setSingleHotel({
          id: snapShot.id,
          ...snapShot.data(),
        });
      } else {
        setError("Hotel not found");
      }
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }finally{
      setLoading(false);
    }
  };

  return { loading, error, hotel, getHotel, getSingleHotel, singleHotel };
}
