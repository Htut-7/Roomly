import { useState } from "react";
import { db } from "../Firebase/firebase";
import { collection, getDoc, getDocs, orderBy, query, doc } from "firebase/firestore";

export default function useActivity() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [activity, setActivity] = useState([]);
  const [singleActivity,setSingleActivity]=useState([]);

  const getActivity = async () => {
    try {
      setLoading(true);
      setError(null);

      const q = query(collection(db, "activities"), orderBy("addedAt"));

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

  const getSingleActivity=async(id)=>{
    try{
      setLoading(true);
      setError(null);

      const snapShot=await getDoc(doc(db,"activities",id));

      if(snapShot.exists()){
        setSingleActivity({
          id:snapShot.id,
          ...snapShot.data()
        });
      }

    }catch(error){
      setError(error.message);
      setLoading(false);
    }finally{
      setLoading(false);
    }
  };

  return { loading, error, getActivity, activity, getSingleActivity, singleActivity };
}
