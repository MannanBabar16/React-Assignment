import "../styles/Home.css"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function ProductDetail() {
  const product = JSON.parse(localStorage.getItem("selectedProduct"))

  const addWishlist = () => {
    const list = JSON.parse(localStorage.getItem("wishlist")) || []
    list.push(product)
    localStorage.setItem("wishlist", JSON.stringify(list))
    alert("Added to Wishlist")
  }

  if (!product) return null

  return (
    <>
      <Navbar />

      <section className="product-detail fade-in">
        <div className="container mt-5 mb-5">
          <div className="row align-items-center">
            <div className="col-md-6 text-center">
              <img src={product.image} className="img-fluid rounded-4 shadow-lg" />
              <div className="mt-3">
                <button className="btn btn-outline-danger" onClick={addWishlist}>
                  Add to Wishlist
                </button>
              </div>
            </div>

            <div className="col-md-6">
              <h2>{product.name}</h2>
              <p>{product.desc}</p>
              <div className="mt-4">
                <button className="btn btn-warning fw-bold me-2">Edit</button>
                <button className="btn btn-secondary fw-bold">Live Preview</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default ProductDetail
