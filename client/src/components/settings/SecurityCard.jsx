import "./SecurityCard.css";

import {
  Shield,
  Lock,
  Eye,
  LogOut,
  Trash2
} from "lucide-react";

function SecurityCard() {
  return (
    <div className="settings-card">

      <div className="card-title">
        <Shield size={20}/>
        <h3>Account & Security</h3>
      </div>

      <div className="password-card">

        <h2>Change Password</h2>

        <p>
          Use a strong password you don't use elsewhere.
        </p>

        <div className="form-group">
          <label>CURRENT PASSWORD</label>

          <div className="input-box">
            <Lock size={18}/>
            <input
              type="password"
              placeholder="Your current password"
            />
            <Eye size={18}/>
          </div>
        </div>

        <div className="form-group">
          <label>NEW PASSWORD</label>

          <div className="input-box">
            <Lock size={18}/>
            <input
              type="password"
              placeholder="Create a new password"
            />
            <Eye size={18}/>
          </div>
        </div>

        <div className="form-group">
          <label>CONFIRM PASSWORD</label>

          <div className="input-box">
            <Lock size={18}/>
            <input
              type="password"
              placeholder="Repeat your new password"
            />
            <Eye size={18}/>
          </div>
        </div>

        <button className="update-password-btn">
          Update Password
        </button>

      </div>

      <div className="danger-zone">

        <h3>Danger Zone</h3>

        <p>
          These actions are permanent and cannot be undone.
        </p>

        <button className="logout-btn">
          <LogOut size={18}/>
          Sign Out Of MannVerse
        </button>

        <button className="delete-btn">
          <Trash2 size={18}/>
          Delete Account 
        </button>

      </div>

    </div>
  );
}

export default SecurityCard;