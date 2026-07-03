import { useState, useEffect } from "react";
import "../Css/Profile.css";
import useAuth from "../Hooks/useAuth";

export default function Profile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [currPass, setCurrPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const { loading, error, getProfile, updateProfile, changePassword } =
    useAuth();

  useEffect(() => {
    const loadProfile = async () => {
      const data = await getProfile();

      if (data) {
        setName(data.name);
        setEmail(data.email);
      }
    };
    loadProfile();
  }, []);

  const updateUser = async (e) => {
    e.preventDefault();

    const profileUpdated = await updateProfile(name, email);
    if (!profileUpdated) return;

    if (currPass.trim() && newPass.trim() !== "") {
      await changePassword(currPass, newPass);
    }
    setCurrPass("");
    setNewPass("");
  };

  return (
    <div className="profile">
      <div className="profile-container">
        <form className="profile-form" onSubmit={updateUser}>
          <h2>My Profile</h2>
          <p>
            Manage your personal information and keep your account details up to
            date.
          </p>

          <div className="profile-input">
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

            <label>Current Password</label>
            <input
              type="password"
              placeholder="Enter Current Password"
              onChange={(e) => setCurrPass(e.target.value)}
              value={currPass}
            />

            <label>New Password</label>
            <input
              type="password"
              placeholder="Enter New Password"
              onChange={(e) => setNewPass(e.target.value)}
              value={newPass}
            />

            {error && <p className="profile-error">{error}</p>}

            <div className="profile-btn">
              <button type="submit" disabled={loading}>
                {loading ? <span className="profile-spinner"></span> : "Update"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
