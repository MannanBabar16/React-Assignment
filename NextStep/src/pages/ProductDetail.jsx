import "../styles/ProductDetail.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { toast } from "react-hot-toast";
import { useEffect, useState } from "react";

function ProductDetail() {
  const [product, setProduct] = useState(null);
  const [inWishlist, setInWishlist] = useState(false);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("selectedProduct"));
    if (stored) setProduct(stored);

    // Check if already in wishlist
    const list = JSON.parse(localStorage.getItem("wishlist")) || [];
    if (stored && list.find(p => p.name === stored.name)) {
      setInWishlist(true);
    }
  }, []);

  if (!product) return null;

  const addWishlist = () => {
    const list = JSON.parse(localStorage.getItem("wishlist")) || [];
    if (!list.find(p => p.name === product.name)) {
      list.push(product);
      localStorage.setItem("wishlist", JSON.stringify(list));
      toast.success("Added to Wishlist ✅");
      setInWishlist(true);
      setTimeout(() => window.location.reload(), 500); // optional for navbar counter
    } else {
      toast.error("Product already in Wishlist 👀");
    }
  };

  return (
    <>
      <Navbar />
      <section className="product-detail-container fade-in">
        <div className="product-image">
          <img src={product.image} alt={product.name} />

          {inWishlist ? (
            <button className="wishlist-btn" style={{ backgroundColor: "#e3ff7eff", color: "#313131", cursor: "default" }}>
              ✅ Added to Wishlist
            </button>
          ) : (
            <button className="wishlist-btn" onClick={addWishlist}>
              ❤️ Add to Wishlist
            </button>
          )}
        </div>

        <div className="product-info">
          <h1>{product.name}</h1>
          <p>{product.desc}</p>

          <div className="product-actions">
            <button className="primary-btn" onClick={() => toast("Edit Clicked")}>
              Edit
            </button>
            <button className="secondary-btn" onClick={() => toast("Live Preview Clicked")}>
              Live Preview
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ProductDetail;
