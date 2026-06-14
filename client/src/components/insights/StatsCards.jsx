import "./StatsCards.css";
import { Star, TrendingUp, Zap, Flame } from "lucide-react";
function StatsCards({ entries }) {
  const totalEntries = entries.length;

  const avgMood =
    totalEntries > 0
      ? (
          entries.reduce((sum, entry) => sum + entry.moodScore, 0) /
          totalEntries
        ).toFixed(1)
      : 0;

  const bestEntry =
    entries.length > 0
      ? entries.reduce((best, current) =>
          current.moodScore > best.moodScore ? current : best,
        )
      : null;

  const bestDay = bestEntry
    ? new Date(bestEntry.createdAt).toLocaleDateString("en-US", {
        weekday: "long",
      })
    : "--";
  const uniqueDates = [
    ...new Set(
      entries.map(
        (entry) => new Date(entry.createdAt).toISOString().split("T")[0],
      ),
    ),
  ].sort((a, b) => new Date(b) - new Date(a));

  let streak = 0;

  for (let i = 0; i < uniqueDates.length; i++) {
    if (i === 0) {
      streak++;
      continue;
    }

    const current = new Date(uniqueDates[i - 1]);
    const previous = new Date(uniqueDates[i]);

    const diffDays = (current - previous) / (1000 * 60 * 60 * 24);

    if (diffDays === 1) {
      streak++;
    } else {
      break;
    }
  }
  return (
    <div className="stats-cards">
      <div className="insight-stat-card">
        <div className="stat-icon yellow">
          <Star size={20} />
        </div>

        <h2 className="yellow-text text-medium">{totalEntries}</h2>
        <h3>Entries</h3>
        <p>Total journals</p>
      </div>

      <div className="insight-stat-card">
        <div className="stat-icon green">
          <TrendingUp size={20} />
        </div>
        <h2 className="green-text text-medium">{avgMood}</h2>
        <h3>Avg Mood</h3>
        <p>Based on all entries</p>{" "}
      </div>

      <div className="insight-stat-card">
        <div className="stat-icon purple">
          <Zap size={20} />
        </div>
        <h2 className="purple-text text-medium">{bestDay}</h2>
        <h3>Best Day</h3>
        <p>{bestEntry?.moodScore || 0}/10 mood score</p>{" "}
      </div>

      <div className="insight-stat-card">
        <div className="stat-icon blue">
          <Flame size={20} />
        </div>
        <h2 className="blue-text text-medium">{streak} days</h2>
        <h3>Streak</h3>
        <p>Current streak</p>{" "}
      </div>
    </div>
  );
}

export default StatsCards;
