import {
  addDoc,
  collection,
  getDocs,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";
import { useState } from "react";
import { db, auth } from "../Firebase/firebase";

export default function useFlightBooking() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [flightBooking, setFlightBooking] = useState([]);

  const addFlightBooking = async (
    flightId,
    airline,
    logo,
    price,
    fromCode,
    toCode,
    flightNumber,
    depart,
    arrival,
    pass,
  ) => {
    const user = auth.currentUser;

    if (!user) {
      setError("Please login first.");
      return;
    }

    try {
      setLoading(true);
      setError(null);

      await addDoc(collection(db, "flightBooking"), {
        userId: user.uid,
        flightId,
        airline,
        logo,
        price,
        fromCode,
        toCode,
        flightNumber,
        depart,
        arrival,
        pass,
        status: "Confirmed",
        addedAt: serverTimestamp(),
      });
    } catch (error) {
      setError(error.message);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const getFlightBooking = async () => {
    const user = auth.currentUser;

    if (!user) {
      setFlightBooking([]);
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const q = query(
        collection(db, "flightBooking"),
        where("userId", "==", user.uid),
      );

      const snapShot = await getDocs(q);

      const data = snapShot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setFlightBooking(data);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, addFlightBooking, getFlightBooking, flightBooking };
}
