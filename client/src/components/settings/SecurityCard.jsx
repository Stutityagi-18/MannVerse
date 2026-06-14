import "./SecurityCard.css";
import API from "../../services/api";
import { Shield, Lock, Eye, Trash2 } from "lucide-react";
import { useState } from "react";
function SecurityCard() {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isUpdatingPassword, setIsUpdatingPassword] = useState(false);
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const handleDeleteAccount = async () => {
    if (isDeleting) return;

    try {
      setIsDeleting(true);

      await API.delete("/auth/delete-account");

      localStorage.removeItem("token");

      window.location.href = "/login";
    } catch (err) {
      console.error(err);
      setIsDeleting(false);
    }
  };
  const handlePasswordChange = async () => {
    if (
      !currentPassword.trim() ||
      !newPassword.trim() ||
      !confirmPassword.trim()
    ) {
      alert("Please fill all password fields");
      return;
    }
    if (isUpdatingPassword) return;
    if (newPassword.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }
    try {
      setIsUpdatingPassword(true);

      const res = await API.put("/auth/change-password", {
        currentPassword,
        newPassword,
        confirmPassword,
      });

      alert(res.data.message);

      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
      setShowCurrent(false);
      setShowNew(false);
      setShowConfirm(false);
    } catch (err) {
      alert(err.response?.data?.message || "Something went wrong");
    } finally {
      setIsUpdatingPassword(false);
    }
  };
  return (
    <div className="settings-card">
      <div className="card-title">
        <Shield size={20} />
        <h3>Account & Security</h3>
      </div>

      <div className="password-card">
        <h2>Change Password</h2>
        <p>Use a strong password you don't use elsewhere.</p>
        <div className="form-group">
          <label>CURRENT PASSWORD</label>

          <div className="input-box">
            <Lock size={18} />
            <input
              type={showCurrent ? "text" : "password"}
              placeholder="Your current password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />{" "}
            <Eye size={18} onClick={() => setShowCurrent(!showCurrent)} />{" "}
          </div>
        </div>
        <div className="form-group">
          <label>NEW PASSWORD</label>

          <div className="input-box">
            <Lock size={18} />
            <input
              type={showNew ? "text" : "password"}
              placeholder="Create a new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />{" "}
            <Eye size={18} onClick={() => setShowNew(!showNew)} />{" "}
          </div>
        </div>
        <div className="form-group">
          <label>CONFIRM PASSWORD</label>

          <div className="input-box">
            <Lock size={18} />
            <input
              type={showConfirm ? "text" : "password"}
              placeholder="Repeat your new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />{" "}
            <Eye size={18} onClick={() => setShowConfirm(!showConfirm)} />{" "}
          </div>
        </div>
        <button
          className="update-password-btn"
          onClick={handlePasswordChange}
          disabled={isUpdatingPassword}
        >
          {isUpdatingPassword ? "Updating..." : "Update Password"}
        </button>{" "}
      </div>

      <div className="danger-zone">
        <h3>Danger Zone</h3>

        <p>These actions are permanent and cannot be undone.</p>

        <button className="delete-btn" onClick={() => setShowDeleteModal(true)}>
          <Trash2 size={18} />
          Delete Account
        </button>
      </div>
      {showDeleteModal && (
        <div className="delete-overlay">
          <div className="delete-modal">
            <h2>Delete Account</h2>

            <p>This action cannot be undone.</p>

            <p>
              Deleting your account will permanently remove your profile,
              journal entries, insights and settings.
            </p>

            <div className="delete-actions">
              <button
                className="cancel-delete"
                onClick={() => setShowDeleteModal(false)}
              >
                Cancel
              </button>
              <button
                className="confirm-delete"
                onClick={handleDeleteAccount}
                disabled={isDeleting}
              >
                {isDeleting ? "Deleting..." : "Delete Permanently"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SecurityCard;
