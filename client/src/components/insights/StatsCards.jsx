import "./StatsCards.css";
import {
  Star,
  TrendingUp,
  Zap,
  Award
} from "lucide-react";
function StatsCards() {
  return (
  <div className="stats-cards">

    <div className="insight-stat-card">
      <div className="stat-icon yellow">
        <Star size={20} />
      </div>

      <h2 className="yellow-text text-medium">84%</h2>
      <h3>Consistency</h3>
      <p>+6% this month</p>
    </div>

    <div className="insight-stat-card">
      <div className="stat-icon green">
        <TrendingUp size={20} />
      </div>

      <h2 className="green-text text-medium">7.4</h2>
      <h3>Avg Mood</h3>
      <p>from 6.8 last month</p>
    </div>

    <div className="insight-stat-card">
      <div className="stat-icon purple">
        <Zap size={20} />
      </div>

     <h2 className="purple-text text-medium">Saturday</h2>
      <h3>Best Day</h3>
      <p>Avg 8.6 / 10</p>
    </div>

    <div className="insight-stat-card">
      <div className="stat-icon blue">
        <Award size={20} />
      </div>

     <h2 className="blue-text text-medium">12 days</h2>
      <h3>Streak</h3>
      <p>Personal best</p>
    </div>

  </div>
);
}

export default StatsCards;