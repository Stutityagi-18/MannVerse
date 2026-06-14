import "./ProfileCard.css";
import { User, Mail } from "lucide-react";

import { useState, useEffect } from "react";
import API from "../../services/api";

function ProfileCard() {
  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const res = await API.get("/auth/me");

      console.log("PROFILE DATA:", res.data);

      setUser(res.data);
      setName(res.data.name);
    } catch (err) {
      console.log("PROFILE ERROR:", err.response);
      console.error(err);
    }
  };
  const handleProfileUpdate = async () => {
    try {
      const res = await API.put("/auth/profile", {
        name,
      });

      setUser(res.data);
      setIsEditing(false);

      alert("Profile updated successfully!");
    } catch (err) {
      console.error(err);
    }
  };
  if (!user) {
    return <div className="settings-card">Loading...</div>;
  }
  return (
    <div className="settings-card">
      <div className="card-title">
        <User size={20} />
        <h3>Profile Settings</h3>
      </div>
      <div className="profile-top">
        <div className="avatar">{user.name?.charAt(0).toUpperCase()}</div>

        <div>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      </div>

      <div className="form-group">
        <label>FULL NAME</label>

        <div className="input-box">
          <User size={18} />
          <input
            className={isEditing ? "active-input" : "disabled-input"}
            value={name}
            disabled={!isEditing}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </div>

      <div className="form-group">
        <label>EMAIL ADDRESS</label>
        <div className="input-box">
          <Mail size={18} />
          <input className="disabled-input" value={user.email} disabled />{" "}
        </div>
      </div>

      <button
        className="save-btn"
        onClick={() => {
          if (isEditing) {
            handleProfileUpdate();
          } else {
            setIsEditing(true);
          }
        }}
      >
        {isEditing ? "Save Changes" : "Edit Profile"}
      </button>
    </div>
  );
}

export default ProfileCard;
