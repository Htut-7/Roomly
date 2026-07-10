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

export default function useActivityBooking() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [activity, setActivity] = useState([]);

  const addActivityBooking = async (
    activityId,
    name,
    city,
    country,
    address,
    image,
    price,
    date,
    participants,
  ) => {
    const user = auth.currentUser;

    if (!user) {
      setError("Please Login First");
      return;
    }

    try {
      setLoading(true);
      setError(null);

      await addDoc(collection(db, "activityBooking"), {
        userId: user.uid,
        activityId,
        name,
        city,
        country,
        address,
        image,
        price,
        date,
        participants,
        status,
        addedAt: serverTimestamp(),
      });
    } catch (error) {
      setError(error.message);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const getActivity = async () => {
    const user = auth.currentUser;
    if (!user) {
      setActivity();
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const q = query(
        collection(db, "activityBooking"),
        where("userId", "==", user.uid),
      );

      const snapShot = await getDocs(q);
      const data = snapShot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setActivity(data);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, addActivityBooking, getActivity, activity };
}
