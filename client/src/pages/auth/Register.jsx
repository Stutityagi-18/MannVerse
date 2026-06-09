import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../services/api";
import "./auth.css";
import meditationImg from "../../assets/meditation.jpg";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      await API.post("/auth/register", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });

      navigate("/login");
    } catch {
      alert("Registration Failed");
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
            </div>

            <button type="submit" className="gradient-btn">
              Create Account →
            </button>
            <p className="private-text">
              🔒 Your entries remain private and secure.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
