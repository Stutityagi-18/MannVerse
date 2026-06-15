import "./StatsCards.css";
import { Star, TrendingUp, Brain, Heart } from "lucide-react";
import API from "../../services/api";
import { useState, useEffect } from "react";
function StatsCards({ entries }) {
  const [gratitudeCount, setGratitudeCount] = useState(0);
  useEffect(() => {
    fetchGratitudes();
  }, []);
  const fetchGratitudes = async () => {
    try {
      const res = await API.get("/gratitude");

      const weekAgo = new Date();
      weekAgo.setDate(weekAgo.getDate() - 6);

      const weeklyGratitudes = res.data.filter(
        (item) => new Date(item.createdAt) >= weekAgo,
      );

      setGratitudeCount(weeklyGratitudes.length);
    } catch (err) {
      console.error(err);
    }
  };
  const weekAgo = new Date();
  weekAgo.setDate(weekAgo.getDate() - 6);

  const weeklyEntries = entries.filter(
    (entry) => new Date(entry.createdAt) >= weekAgo,
  );

  const totalEntries = weeklyEntries.length;
  const avgMood =
    totalEntries > 0
      ? (
          weeklyEntries.reduce((sum, entry) => sum + entry.moodScore, 0) /
          totalEntries
        ).toFixed(1)
      : 0;
  const emotionCounts = {};

  weeklyEntries.forEach((entry) => {
    entry.tags?.forEach((tag) => {
      emotionCounts[tag] = (emotionCounts[tag] || 0) + 1;
    });
  });

  let topEmotion = "--";
  let maxCount = 0;

  Object.entries(emotionCounts).forEach(([emotion, count]) => {
    if (count > maxCount) {
      maxCount = count;
      topEmotion = emotion;
    }
  });
  return (
    <div className="stats-cards">
      <div className="insight-stat-card">
        <div className="stat-icon yellow">
          <Star size={20} />
        </div>

        <h2 className="yellow-text text-medium">{totalEntries}</h2>
        <h3>Entries</h3>
        <p>This week</p>
      </div>

      <div className="insight-stat-card">
        <div className="stat-icon green">
          <TrendingUp size={20} />
        </div>
        <h2 className="green-text text-medium">{avgMood}</h2>
        <h3>Avg Mood</h3>
        <p>This week</p>{" "}
      </div>
      <div className="insight-stat-card">
        <div className="stat-icon purple">
          <Brain size={20} />
        </div>

        <h2 className="purple-text text-medium">{topEmotion}</h2>

        <h3>Top Emotion</h3>

        <p>Most felt this week</p>
      </div>
      <div className="insight-stat-card">
        <div className="stat-icon blue">
          <Heart size={20} />
        </div>
        <h2 className="blue-text text-medium">{gratitudeCount}</h2>
        <h3>Gratitude</h3>
        <p>This week</p>{" "}
      </div>
    </div>
  );
}

export default StatsCards;
