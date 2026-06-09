import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../services/api";
import { useAuth } from "../../store/authStore";
import "./auth.css";
import meditationImg from "../../assets/meditation.jpg";
const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/auth/login", formData);

      login(res.data.user, res.data.token);

      navigate("/");
    } catch (err) {
      alert("Login Failed");
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
            <button className="auth-tab active">Login</button>

            <button className="auth-tab" onClick={() => navigate("/register")}>
              Register
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email Address</label>

              <input
                className="auth-input"
                placeholder="Enter your email"
                value={formData.email}
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
                placeholder="Enter your password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    password: e.target.value,
                  })
                }
              />
            </div>

            <button type="submit" className="gradient-btn">
              Login to MannVerse →
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

export default Login;
