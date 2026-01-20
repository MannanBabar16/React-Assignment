import "../styles/Home.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const products = [
    { name: "Modern Resume", image: "/Images/resume.jpg", desc: "Clean and professional layout", category: "Resume" },
    { name: "Creative Resume", image: "/Images/resume.jpg", desc: "Stand out with a creative design", category: "Resume" },
  ];

  return (
    <>
      <Navbar />

      <section className="hero fade-in">
        <div className="hero-text">
          <h1>Build Your Perfect Resume & Portfolio</h1>
          <p>Simple tools to create professional resumes and personal portfolios that stand out.</p>
          <button className="explore-btn" onClick={() => navigate("/products")}>
            Explore Products
          </button>
        </div>

        <div className="hero-image">
          <img src="/Images/hero-image.jpg" alt="Hero" />
        </div>
      </section>

      <section className="products-section fade-in">
        <h2>Popular Templates</h2>
        <div className="product-grid">
          {products.map((item, idx) => (
            <ProductCard
              key={idx}
              product={item}
              isWishlist={false}
              onView={() => {
                localStorage.setItem("selectedProduct", JSON.stringify(item));
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

export default Home;
