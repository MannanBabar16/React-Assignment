import "../styles/Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="login-page fade-in">
      <div className="login-container">
        <h1 className="login-logo">NextStep</h1>

        <form className="login-form" onSubmit={(e) => { e.preventDefault(); navigate("/home"); }}>
          <div className="input-group">
            <input type="email" id="email" required />
            <label htmlFor="email">Email</label>
          </div>

          <div className="input-group">
            <input type="password" id="password" required />
            <label htmlFor="password">Password</label>
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        <p className="signup-text">
          Don't have an account? <span className="link" onClick={() => alert("Sign up clicked!")}>Sign Up</span>
        </p>
      </div>
    </div>
  );
}

export default Login;
