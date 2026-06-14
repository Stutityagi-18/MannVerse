import "./StatsCards.css";
import { useEffect, useState } from "react";
import API from "../../services/api";
import { FiBookOpen } from "react-icons/fi";
import { BsStars } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { BsFire } from "react-icons/bs";
function StatsCards() {
  const [stats, setStats] = useState({
    streak: 0,
    entries: 0,
    avgMood: 0,
  });
  const [gratitudeCount, setGratitudeCount] = useState(0);
  useEffect(() => {
    fetchStats();
    fetchGratitudes();
  }, []);
  const fetchGratitudes = async () => {
    try {
      const res = await API.get("/gratitude");

      setGratitudeCount(res.data.length);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchStats = async () => {
    try {
      const res = await API.get("/entries");

      const entries = res.data;

      const totalEntries = entries.length;

      const avgMood =
        totalEntries > 0
          ? (
              entries.reduce((sum, entry) => sum + entry.moodScore, 0) /
              totalEntries
            ).toFixed(1)
          : 0;

      const uniqueDates = [
        ...new Set(
          entries.map((entry) => new Date(entry.createdAt).toDateString()),
        ),
      ];

      let streak = 0;
      const today = new Date();

      for (let i = 0; i < uniqueDates.length; i++) {
        const checkDate = new Date(today);

        checkDate.setDate(today.getDate() - i);

        if (uniqueDates.includes(checkDate.toDateString())) {
          streak++;
        } else {
          break;
        }
      }

      setStats({
        entries: totalEntries,
        avgMood,
        streak,
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
          <BsStars />
        </div>
        <h2 className="green">{stats.avgMood}</h2>
        <h3>Avg Mood</h3>

        <span>/ 10</span>
      </div>
      <div className="stat-card">
        <div className="stat-icon green">
          <FaHeart />
        </div>

        <h2 className="green">{gratitudeCount}</h2>

        <h3>Gratitude</h3>

        <span>sessions</span>
      </div>
    </div>
  );
}

export default StatsCards;
