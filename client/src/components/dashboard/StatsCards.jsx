import "./StatsCards.css";
import { useEffect, useState } from "react";
import API from "../../services/api";
import {
  FiTrendingUp,
  FiBookOpen,
  FiActivity,
} from "react-icons/fi";

import { BsFire } from "react-icons/bs";
function StatsCards() {
  const [stats, setStats] = useState({
    streak: 0,
    entries: 0,
    avgMood: 0,
    trend: 0
  });

   useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const res = await API.get("/entries");

      const entries = res.data;

      const totalEntries = entries.length;

      const avgMood =
        totalEntries > 0
          ? (
              entries.reduce(
                (sum, entry) => sum + entry.moodScore,
                0
              ) / totalEntries
            ).toFixed(1)
          : 0;

      // Temporary streak
      const streak = totalEntries;

      // Temporary trend
      const trend = totalEntries > 1 ? "+10%" : "0%";

      setStats({
        entries: totalEntries,
        avgMood,
        streak,
        trend,
      });
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="stats-grid">

      <div className="stat-card">
<div className="stat-icon orange">
  <BsFire />
</div>
<h2 className="orange">{stats.streak}</h2>
        <h3>Streak</h3>

        <span>days</span>
      </div>

      <div className="stat-card">
<div className="stat-icon purple">
  <FiBookOpen />
</div>
<h2 className="purple">{stats.entries}</h2>
        <h3>Entries</h3>

        <span>total</span>
      </div>

      <div className="stat-card">
<div className="stat-icon green">
  <FiActivity />
</div>
<h2 className="green">{stats.avgMood}</h2>
        <h3>Avg Mood</h3>

        <span>/ 10</span>
      </div>

      <div className="stat-card">
        <div className="stat-icon blue">
  <FiTrendingUp />
</div>

<h2 className="blue">{stats.trend}</h2>
        <h3>This Week</h3>

        <span>trend</span>
      </div>

    </div>
  );
}

export default StatsCards;