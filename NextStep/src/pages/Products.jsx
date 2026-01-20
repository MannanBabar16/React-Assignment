import "../styles/Home.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { useNavigate } from "react-router-dom";

function Products() {
  const navigate = useNavigate();

  const products = [
    { name: "Modern Resume", image: "/Images/resume.jpg", desc: "Clean and professional layout", category: "Resume" },
    { name: "Creative Resume", image: "/Images/resume.jpg", desc: "Stand out with a creative design", category: "Resume" },
    { name: "Simple Resume", image: "/Images/resume.jpg", desc: "Minimalist clean design", category: "Resume" },
    { name: "Professional Resume", image: "/Images/resume.jpg", desc: "Elegant and professional layout", category: "Resume" },
  ];

  return (
    <>
      <Navbar />

      <section className="products-section fade-in">
        <h2>All Templates</h2>
        <div className="product-grid">
          {products.map((p, idx) => (
            <ProductCard
              key={idx}
              product={p}
              isWishlist={false}
              onView={() => {
                localStorage.setItem("selectedProduct", JSON.stringify(p));
                navigate("/product-detail");
              }}
            />
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Products;
