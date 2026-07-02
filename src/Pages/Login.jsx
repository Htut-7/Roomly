import "../Css/Login.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import useAuth from "../Hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {loading,error,signIn}=useAuth();
  const navigate=useNavigate();

  const signUser=async(e)=>{
    e.preventDefault();
    let user=await signIn(email,password);
    if(user){
        navigate('/');
    }
  };

  return (
    <div className="login">
      <div className="login-container">
        <form className="login-form" onSubmit={signUser}>
          <h3>Welcome Back</h3>
          <p>
            Sign in to access your bookings, manage your reservations, and
            continue your journey with Roomly.
          </p>

          <div className="login-input">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />

            <label>Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />

            <div className="login-action">
              <Link to='/register'>Don't have an account?</Link>

              <div className="forget-action">
                <Link>Forget Password?</Link>
              </div>
            </div>

            {error && <p className="login-error">{error}</p>}

            <div className="login-btn">
              <button type="submit" disabled={loading}>
                {loading ? <span className="login-spinner"></span> : "Login"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
