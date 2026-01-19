import { Link } from "react-router-dom";


function Navbar() {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" to="/home">
          NextStep
        </Link>

        <ul className="nav-links">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/wishlist">Wishlist</Link></li>
          <li><Link to="/about">About Us</Link></li>
        </ul>

        <Link to="/" className="logout-btn">
          Logout
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
