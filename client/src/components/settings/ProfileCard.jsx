import "./ProfileCard.css";

import {
  User,
  Mail,
  AtSign,
  Camera
} from "lucide-react";

function ProfileCard() {
  return (
    <div className="settings-card">

      <div className="card-title">
        <User size={20}/>
        <h3>Profile Settings</h3>
      </div>

      <div className="profile-top">

        <div className="avatar">
          S

          <button>
            <Camera size={14}/>
          </button>
        </div>

        <div>
          <h2>Stuti Tyagi</h2>
          <p>stuti@gmail.com</p>
          <span>Change photo</span>
        </div>

      </div>

      <div className="form-group">
        <label>FULL NAME</label>

        <div className="input-box">
          <User size={18}/>
          <input value="Stuti Tyagi"/>
        </div>
      </div>

      <div className="form-group">
        <label>USERNAME</label>

        <div className="input-box">
          <AtSign size={18}/>
          <input value="@stuti_tyagi"/>
        </div>
      </div>

      <div className="form-group">
        <label>EMAIL ADDRESS</label>

        <div className="input-box">
          <Mail size={18}/>
          <input value="stuti@gmail.com"/>
        </div>
      </div>

      <button className="save-btn">
        Save Changes
      </button>

    </div>
  );
}

export default ProfileCard;