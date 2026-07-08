import { useState } from "react";
import { db, auth } from "../Firebase/firebase";
import {
  addDoc,
  collection,
  getDocs,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";

export default function useBooking() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [booking, setBooking] = useState([]);

  const addBooking = async (
    hotelId,
    name,
    image,
    address,
    city,
    country,
    guests,
    checkIn,
    checkOut,
    room,
    price,
  ) => {

    const user=auth.currentUser;

    if(!user){
        setError('Please Login First');
        return;
    }

    try {
      setLoading(true);
      setError(null);

      await addDoc(collection(db, "bookings"), {
        userId: user.uid,
        hotelId,
        name,
        image,
        address,
        city,
        country,
        guests,
        checkIn,
        checkOut,
        room,
        price,
        status: "Confirmed",
        addedAt: serverTimestamp(),
      });
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  const getBooking = async () => {
    const user = auth.currentUser;
    if (!user) {
      setBooking();
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const q = query(
        collection(db, "bookings"),
        where("userId", "==", user.uid),
      );

      const snapShot = await getDocs(q);

      const data = snapShot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setLoading(false);
      setBooking(data);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return { loading, error, addBooking, getBooking, booking };
}
