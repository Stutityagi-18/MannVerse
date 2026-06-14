import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../services/api";
import "./auth.css";
import meditationImg from "../../assets/meditation.jpg";
import { FiUserPlus } from "react-icons/fi";
const Register = () => {
  const navigate = useNavigate();
  const [registerError, setRegisterError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [confirmError, setConfirmError] = useState("");
  const handleSubmit = async (e) => {
    setRegisterError("");
    e.preventDefault();

    setPasswordError("");
    setConfirmError("");

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,10}$/;

    if (!passwordRegex.test(formData.password)) {
      setPasswordError(
        "Password must be 6-10 characters long and contain at least one letter and one number.",
      );
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setConfirmError("Passwords do not match.");
      return;
    }

    try {
      await API.post("/auth/register", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });

      setShowRegisterModal(true);

      setTimeout(() => {
        navigate("/login");
      }, 5000);
    } catch (err) {
      setRegisterError(err.response?.data?.message || "Registration Failed");
    }
  };
  return (
    <div className="auth-layout">
      <div className="auth-left">
        <h1 className="brand-title">MannVerse</h1>

        <p className="brand-tagline">
          Your safe space for reflection, healing and growth.
        </p>

        <img src={meditationImg} alt="Meditation" className="meditation-img" />
      </div>

      <div className="auth-right">
        <div className="auth-card">
          <div className="auth-tabs">
            <button className="auth-tab" onClick={() => navigate("/login")}>
              Login
            </button>

            <button className="auth-tab active">Register</button>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Full Name</label>

              <input
                className="auth-input"
                placeholder="Enter your name"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    name: e.target.value,
                  })
                }
              />
            </div>

            <div className="form-group">
              <label>Email Address</label>

              <input
                className="auth-input"
                placeholder="Enter your email"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    email: e.target.value,
                  })
                }
              />
            </div>

            <div className="form-group">
              <label>Password</label>

              <input
                className="auth-input"
                type="password"
                placeholder="Create a password"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    password: e.target.value,
                  })
                }
              />
              {passwordError && (
                <p className="error-message">{passwordError}</p>
              )}
            </div>

            <div className="form-group">
              <label>Confirm Password</label>

              <input
                className="auth-input"
                type="password"
                placeholder="Confirm password"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    confirmPassword: e.target.value,
                  })
                }
              />
              {confirmError && <p className="error-message">{confirmError}</p>}
            </div>

            <button type="submit" className="gradient-btn">
              Create Account →
            </button>
            {registerError && <p className="error-message">{registerError}</p>}
            <p className="private-text">
              🔒 Your entries remain private and secure.
            </p>
          </form>
        </div>
      </div>
      {showRegisterModal && (
        <div className="login-overlay">
          <div className="login-card">
            <div className="login-icon">
              <FiUserPlus />
            </div>

            <p className="login-label">WELCOME TO MANNVERSE</p>

            <h1>Registration Successful</h1>

            <p className="login-text">
              Your account has been created successfully. You can now begin your
              journaling journey
            </p>

            <div className="login-progress">
              <div className="login-progress-fill register-progress"></div>
            </div>

            <p className="redirect-text">Redirecting to login page...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
