import { addDoc, collection, deleteDoc, getDocs, query, serverTimestamp, where, doc, onSnapshot } from "firebase/firestore";
import { useState } from "react";
import { db, auth } from "../Firebase/firebase";
import "../Css/Wishlist.css";

export default function useWishlist() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [wishlist, setWishlist] = useState([]);

  
  const addWishList=async(hotelId,name,country,city,address,price,image)=>{

    const user=auth.currentUser;

    if(!user)
        return;

    try{
        setLoading(true);
        setError(null);

        const q=query(collection(db,"wishlist"),
        where("userId","==",user.uid),
        where("hotelId","==",hotelId)
    )
        const snapShot=await getDocs(q);

        if(!snapShot.empty){
            return;
        }

        await addDoc(collection(db,"wishlist"),{
            userId:user.uid,
            hotelId,
            name,
            country,
            city,
            address,
            price,
            image,
            addedAt: serverTimestamp()
        });
        
    }catch(error){
        setError(error.message);
        setLoading(false);
    }finally{
        setLoading(false);
    }
  };
  
  const getWishList = async () => {
    const user = auth.currentUser;

    if (!user) {
      setWishlist([]);
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const q = query(
        collection(db, "wishlist"),
        where("userId", "==", user.uid),
      );

      return onSnapshot(q,(snapShot)=>{
        const data=snapShot.docs.map((doc)=>({
            id:doc.id,
            ...doc.data()
        }));
        setWishlist(data);
      })
    } catch (error) {
      setError(error.message);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const deleteWishList=async(id)=>{
    try{
        setLoading(true);
        setError(null);

        const res=await deleteDoc(doc(db,"wishlist",id));
        setLoading(false);
        return res;
    }catch(error){
        setError(error.message);
        setLoading(false);
    }
  }

  return { loading, error, getWishList, wishlist, addWishList, deleteWishList };
}
