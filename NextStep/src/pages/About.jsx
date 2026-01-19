import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Navbar />

      <div style={{ padding: "40px", minHeight: "70vh" }}>
        <h1>About Us</h1>
        <p style={{ marginTop: "15px", fontSize: "18px" }}>
          NextStep is a React-based web application created as part of a Web
          Development assignment. This project demonstrates the use of React
          components, routing, and modern frontend practices.
        </p>

        <p style={{ marginTop: "10px", fontSize: "18px" }}>
          The goal of this project is to build a clean, responsive, and
          user-friendly interface using React and Vite.
        </p>
      </div>

      <Footer />
    </>
  );
}

export default About;
