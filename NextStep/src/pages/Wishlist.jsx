import "../styles/Home.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Wishlist() {
  const navigate = useNavigate();
  const [wishlist, setWishlist] = useState([]);

  // Load wishlist from localStorage
  useEffect(() => {
    const list = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(list);
  }, []);

  // Refresh wishlist after add/remove
  const refreshWishlist = () => {
    const list = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(list);
  };

  return (
    <>
      <Navbar />

      <section className="products-section fade-in">
        <h2>Your Wishlist</h2>
        <div className="product-grid" style={{ padding: "0 10px" }}>
          {wishlist.length === 0 ? (
            <p style={{ textAlign: "center", gridColumn: "1 / -1", fontSize: "16px" }}>
              No items in wishlist
            </p>
          ) : (
            wishlist.map((product, idx) => (
              <ProductCard
                key={idx}
                product={product}
                isWishlist={true}
                onRemove={refreshWishlist} // refresh state when removing
                onView={() => {
                  localStorage.setItem(
                    "selectedProduct",
                    JSON.stringify({ ...product, desc: `Details for ${product.name}` })
                  );
                  navigate("/product-detail");
                }}
              />
            ))
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Wishlist;
