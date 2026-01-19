import "../styles/Home.css"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { useNavigate } from "react-router-dom"

function Home() {
  const navigate = useNavigate()

  return (
    <>
      <Navbar />

      <header className="hero fade-in">
        <div className="hero-text">
          <h1>Build Your Perfect Resume & Portfolio</h1>
          <p>Simple tools to create professional resumes and personal portfolios that stand out.</p>
          <button className="explore-btn btn btn-warning fw-bold" onClick={() => navigate("/products")}>
            Explore Products
          </button>
        </div>

        <div className="hero-image">
          <img src="/Images/hero-image.jpg" />
        </div>
      </header>

      <Footer />
    </>
  )
}

export default Home
