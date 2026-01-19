import "../styles/Home.css"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function Wishlist() {
  const wishlist = JSON.parse(localStorage.getItem("wishlist")) || []

  return (
    <>
      <Navbar />

      <section className="products-section fade-in">
        <h2>Your Wishlist</h2>

        <div className="product-grid">
          {wishlist.length === 0 && <p>No items in wishlist</p>}
          {wishlist.map((item, i) => (
            <div className="card shadow-lg" key={i}>
              <img src={item.image} />
              <h3>{item.name}</h3>
              <p>{item.desc}</p>
              <button className="btn btn-warning fw-bold">Edit</button>
              <button className="btn btn-secondary fw-bold mt-2">Live Preview</button>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Wishlist
