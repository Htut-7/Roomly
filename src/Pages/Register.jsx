import "../Css/Register.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import useAuth from "../Hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {loading,error,signUp}=useAuth();
  const navigate=useNavigate();

  const regUser=async(e)=>{
    e.preventDefault();
    let user=await signUp(name,email,password);
    if(user){
        navigate('/login');
    }
  };

  return (
    <div className="register">
      <div className="reg-container">
        <form className="reg-form" onSubmit={regUser}>
          <h2>Create your Account</h2>
          <p>
            Sign up to book rooms, manage your reservations, and enjoy a
            seamless booking experience with Roomly.
          </p>

          <div className="reg-input">
            <label>Username</label>
            <input
              type="text"
              placeholder="Enter Username"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />

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

            <div className="reg-action">
              <Link to='/login'>Already have an account?</Link>
            </div>

            {error && <p className="reg-error">{error}</p>}

            <div className="reeg-btn">
              <button type="submit" disabled={loading}>
                {loading ? <span className="reg-spinner"></span>: "Register"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
