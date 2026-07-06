import { FaMapMarkerAlt, FaTrashAlt } from "react-icons/fa";
import "../Css/Wishlist.css";
import useWishlist from "../Hooks/useWishlist";
import { useEffect } from "react";

export default function Wishlist() {
  const { loading, error, getWishList, wishlist, deleteWishList } = useWishlist();

  useEffect(() => {
    getWishList();
  }, []);

  const deleteWish=async(e,id)=>{
    e.preventDefault();
    await deleteWishList(id);
  }

  return (
    <div className="wishlist">
      <div className="wishlist-container">
        <h2>My Wishlist</h2>
        <p>
          Save your favourites hotels in one place, compare your options, and
          book your perfect stay whenever you're ready.
        </p>

        {loading && <span className="wishlist-spinner"></span>}

        {error && <p className="wishlist-error">{error}</p>}

        <div className="wishlist-grid">
          {wishlist.map((w) => (
            <div className="single-wishlist" key={w.id}>
              <div className="wishlist-img">
                <img src={w.image} alt={w.name} />
              </div>

              <div className="wishlist-info">
                <h3>{w.name}</h3>

                <p>
                  <FaMapMarkerAlt />
                  {w.city}, {w.country}, {w.address}
                </p>

                <p>${w.price} / night</p>
              </div>

              <div className="wishlist-btn">
                <button type="button" onClick={(e)=>deleteWish(e,w.id)}>
                  <FaTrashAlt />
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
