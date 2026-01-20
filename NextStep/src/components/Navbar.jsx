import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/Home.css";

function Navbar() {
  const [wishlistCount, setWishlistCount] = useState(0);

  // update wishlist count dynamically
  useEffect(() => {
    const updateCount = () => {
      const list = JSON.parse(localStorage.getItem("wishlist")) || [];
      setWishlistCount(list.length);
    };

    updateCount(); // initial count

    // listen for localStorage changes in other tabs/windows
    window.addEventListener("storage", updateCount);
    return () => window.removeEventListener("storage", updateCount);
  }, []);

  // a helper to manually update after adding/removing
  const refreshCount = () => {
    const list = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlistCount(list.length);
  };

  return (
    <nav className="navbar">
      <div className="logo">NextStep</div>

      <ul className="nav-links">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li>
          <Link to="/wishlist" className="wishlist-link">
            Wishlist
            {wishlistCount > 0 && <span className="wishlist-count">{wishlistCount}</span>}
          </Link>
        </li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/prayer">Prayer</Link></li>

      </ul>

      <Link to="/" className="logout-btn">Logout</Link>
    </nav>
  );
}

export default Navbar;
