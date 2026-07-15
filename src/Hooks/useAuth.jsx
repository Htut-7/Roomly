import { useState } from "react";
import { db, auth } from "../Firebase/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateEmail,
  reauthenticateWithCredential,
  EmailAuthProvider,
  updatePassword,
} from "firebase/auth";
import {
  doc,
  serverTimestamp,
  setDoc,
  updateDoc,
  getDoc,
} from "firebase/firestore";

export default function useAuth() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const signUp = async (name, email, password) => {
    try {
      setLoading(true);
      setError(null);

      const res = await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(doc(db, "users", res.user.uid), {
        userId: res.user.uid,
        name,
        email,
        createdAt: serverTimestamp(),
      });
      setLoading(false);
      return res.user;
    } catch (error) {
      
      setError(error.message);
      setLoading(false);
    }
  };

  const signIn = async (email, password) => {
    try {
      setLoading(true);
      setError(null);

      const res = await signInWithEmailAndPassword(auth, email, password);
      await updateDoc(doc(db, "users", res.user.uid), {
        lastLogin: serverTimestamp(),
      });
      setLoading(false);
      return res.user;
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  const logOut = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await signOut(auth);
      setLoading(false);
      return res;
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  const getProfile = async () => {
    try {
      setLoading(true);
      setError(null);

      const snapShot = await getDoc(doc(db, "users", auth.currentUser.uid));

      if (snapShot.exists()) {
        return snapShot.data();
      }
      return null;
    } catch (error) {
      setError(error.message);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const updateProfile = async (name, email) => {
    try {
      setLoading(true);
      setError(null);

      const res = await updateEmail(auth.currentUser, email);
      await updateDoc(doc(db, "users", auth.currentUser.uid), {
        name,
        email,
      });

      return res;
    } catch (error) {
      setError(error.message);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const changePassword = async (currPassword, newPassword) => {
    try {
      setLoading(true);
      setError(null);

      const credential = EmailAuthProvider.credential(
        auth.currentUser.email,
        currPassword,
      );

      await reauthenticateWithCredential(auth.currentUser, credential);

      const res = await updatePassword(auth.currentUser, newPassword);

      return res;
    } catch (error) {
      setError(error.message);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    signUp,
    signIn,
    logOut,
    getProfile,
    updateProfile,
    changePassword,
  };
}
