import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import {
  FiHome,
  FiBookOpen,
  FiBarChart2,
  FiCalendar,
  FiHeart,
  FiSettings,
  FiLogOut,
} from "react-icons/fi";

function Sidebar() {
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const handleLogout = () => {
    setShowLogoutModal(true);

    setTimeout(() => {
      localStorage.removeItem("token");
      window.location.href = "/";
    }, 2500);
  };
  return (
    <aside className="sidebar">
      <div className="logo">✨</div>

      <nav className="sidebar-nav">
        <NavLink to="/dashboard" className="nav-item">
          <FiHome />
          <span className="tooltip">Home</span>
        </NavLink>
        <NavLink to="/journal" className="nav-item">
          <FiBookOpen />
          <span className="tooltip">Journal</span>
        </NavLink>

        <NavLink to="/insights" className="nav-item">
          <FiBarChart2 />
          <span className="tooltip">Insights</span>
        </NavLink>

        <NavLink to="/toolkit" className="nav-item">
          <FiHeart />
          <span className="tooltip">Toolkit</span>
        </NavLink>

        <NavLink to="/calender" className="nav-item">
          <FiCalendar />
          <span className="tooltip">Calendar</span>
        </NavLink>
      </nav>

      <div className="sidebar-bottom">
        <NavLink to="/settings" className="nav-item">
          <FiSettings />
          <span className="tooltip">Settings</span>
        </NavLink>

        <button className="nav-item" onClick={handleLogout}>
          <FiLogOut />
          <span className="tooltip">Logout</span>
        </button>
        <div className="sidebar-avatar">S</div>
      </div>
      {showLogoutModal && (
        <div className="logout-overlay">
          <div className="logout-card">
            <div className="logout-icon">
              <FiLogOut />
            </div>

            <p className="logout-label">SEE YOU SOON </p>

            <h2>Logged Out Successfully</h2>

            <p className="logout-text">
              Take care, Stuti. Your journal will be here whenever you need it.
            </p>

            <div className="logout-progress">
              <div className="logout-progress-fill"></div>
            </div>

            <p className="redirect-text">Redirecting to login...</p>
          </div>
        </div>
      )}
    </aside>
  );
}

export default Sidebar;
