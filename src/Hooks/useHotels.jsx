import { useState } from "react"
import { db } from "../Firebase/firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

export default function useHotels() {

    const [loading,setLoading]=useState(false);
    const [error,setError]=useState(false);
    const [hotel,setHotel]=useState([]);

    const getHotel=async()=>{
      try{
        setLoading(true);
        setError(null);

        const q=query(collection(db,"hotels"),orderBy("createdAt"));

        return onSnapshot(q,(snapShot)=>{
          const data=snapShot.docs.map((doc)=>({
            id:doc.id,
            ...doc.data()
          }));
          setHotel(data);
          setLoading(false);
        })

      }catch(error){
        setError(error.message);
        setLoading(false);
      }
    }

  return {loading, error, hotel, getHotel }
}
