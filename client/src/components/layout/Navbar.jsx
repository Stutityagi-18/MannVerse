import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        🧠 Mind Journal
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/insights">Insights</Link>
        <Link to="/toolkit">Toolkit</Link>
      </div>
    </nav>
  );
}

export default Navbar;