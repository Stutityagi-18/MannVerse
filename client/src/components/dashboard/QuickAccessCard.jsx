import "./QuickAccessCard.css";
import { FiArrowRight } from "react-icons/fi";
import { HiOutlineLightningBolt } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
function QuickAccessCard() {
  const navigate = useNavigate();
  return (
    <div className="quick-access-card">
      <div className="quick-header">
        <HiOutlineLightningBolt />
        <span>QUICK ACCESS</span>
      </div>

      <button className="quick-btn" onClick={() => navigate("/insights")}>
        <span>View Insights</span>
        <FiArrowRight className="purple" />
      </button>
      <button className="quick-btn" onClick={() => navigate("/calender")}>
        <span>Open Calendar</span>
        <FiArrowRight className="blue" />
      </button>

      <button className="quick-btn" onClick={() => navigate("/toolkit")}>
        <span>Coping Toolkit</span>
        <FiArrowRight className="green" />
      </button>
    </div>
  );
}

export default QuickAccessCard;
