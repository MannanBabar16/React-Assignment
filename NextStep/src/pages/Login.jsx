import "../styles/Login.css"
import { useNavigate } from "react-router-dom"

function Login() {
  const navigate = useNavigate()

  return (
    <div className="fade-in">
      <div className="logo">
        <h2>NextStep</h2>
      </div>

      <div className="login-box shadow-lg">
        <h2>Login</h2>

        <input className="form-control mb-3" placeholder="Email" />
        <input className="form-control mb-3" placeholder="Password" type="password" />

        <button className="login-btn btn btn-warning w-100" onClick={() => navigate("/home")}>
          Login
        </button>
      </div>
    </div>
  )
}

export default Login
