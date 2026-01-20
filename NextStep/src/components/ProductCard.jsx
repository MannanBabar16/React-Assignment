import "../styles/Home.css";
import { toast } from "react-hot-toast";
import { useState, useEffect } from "react";

function ProductCard({ product, isWishlist, onView }) {
  const [inWishlist, setInWishlist] = useState(false);

  // Check if the product is already in wishlist
  useEffect(() => {
    const list = JSON.parse(localStorage.getItem("wishlist")) || [];
    setInWishlist(list.some(p => p.name === product.name));
  }, [product]);

  const addToWishlist = () => {
    const list = JSON.parse(localStorage.getItem("wishlist")) || [];
    if (!list.find(p => p.name === product.name)) {
      list.push(product);
      localStorage.setItem("wishlist", JSON.stringify(list));
      toast.success("Added to Wishlist ✅");
      setInWishlist(true);
      setTimeout(() => window.location.reload(), 500);
    } else {
      toast("Already in Wishlist 👀");
    }
  };

  const removeFromWishlist = () => {
    const list = JSON.parse(localStorage.getItem("wishlist")) || [];
    const updated = list.filter(p => p.name !== product.name);
    localStorage.setItem("wishlist", JSON.stringify(updated));
    toast.error("Removed from Wishlist 🗑️");
    setInWishlist(false);
    setTimeout(() => window.location.reload(), 500);
  };

  return (
    <div className="card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.desc || `Category: ${product.category}`}</p>

      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <button onClick={onView}>View Details</button>

        {isWishlist ? (
          <button 
            onClick={removeFromWishlist} 
            style={{ backgroundColor: "#ffb77b7", color: "#313131" }}
          >
            Remove from Wishlist
          </button>
        ) : inWishlist ? (
          <button style={{ backgroundColor: "#eaff9eff", color: "#313131", cursor: "default" }}>
            ✅ Added to Wishlist
          </button>
        ) : (
          <button 
            onClick={addToWishlist} 
            style={{ backgroundColor: "#ffb7b7", color: "#313131" }}
          >
            ❤️ Add to Wishlist
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
