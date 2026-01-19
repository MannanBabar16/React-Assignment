import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

function Products() {
  const navigate = useNavigate();

  const openProduct = (name, image, category) => {
    localStorage.setItem(
      "selectedProduct",
      JSON.stringify({ name, image, category, desc: `Details for ${name}` })
    );
    navigate("/product-detail");
  };

  const products = [
    { name: "Modern Resume", image: "/Images/resume.jpg", category: "Resume" },
    { name: "Creative Resume", image: "/Images/resume.jpg", category: "Resume" },
    { name: "Simple Resume", image: "/Images/resume.jpg", category: "Resume" },
    { name: "Professional Resume", image: "/Images/resume.jpg", category: "Resume" },
  ];

  return (
    <>
      <Navbar />
      <section className="products-section fade-in">
        <h2>Resumes</h2>
        <div className="product-grid">
          {products.map((item, i) => (
            <div className="card shadow-lg" key={i}>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>Category: {item.category}</p>
              <button className="btn btn-warning fw-bold" onClick={() => openProduct(item.name, item.image, item.category)}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Products;
