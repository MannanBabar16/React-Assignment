import "../styles/About.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Navbar />

      {/* ABOUT HERO SECTION */}
      <section className="about-section fade-in">
        <div className="about-container">
          <div className="about-text">
            <h1>About NextStep</h1>
            <p>
              NextStep is a React-based web application built as part of a Web Development assignment. 
              It showcases the use of React components, routing, and modern frontend practices.
            </p>
            <p>
              Our mission is to provide a clean, responsive, and user-friendly interface 
              to create professional resumes and personal portfolios effortlessly.
            </p>
          </div>
         
        </div>
      </section>

      {/* MISSION SECTION */}
      <section className="mission-section fade-in">
        <h2>Our Mission</h2>
        <p>
          To empower users with simple yet effective tools to build resumes and portfolios 
          that stand out in the modern job market. We focus on clarity, responsiveness, 
          and a delightful user experience.

          To empower users with simple yet effective tools to build resumes and portfolios 
          that stand out in the modern job market. We focus on clarity, responsiveness, 
          and a delightful user experience.

          To empower users with simple yet effective tools to build resumes and portfolios 
          that stand out in the modern job market. We focus on clarity, responsiveness, 
          and a delightful user experience.
        </p>
      </section>

      <Footer />
    </>
  );
}

export default About;
