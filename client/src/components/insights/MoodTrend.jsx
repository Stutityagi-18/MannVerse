import "./MoodTrend.css";
import { CalendarDays } from "lucide-react";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
} from "recharts";
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          background: "#091127",
          border: "1px solid #334155",
          borderRadius: "12px",
          padding: "10px",
        }}
      >
        <p>{label}</p>
        <p>Mood: {payload[0].value}/10</p>
      </div>
    );
  }

  return null;
};
function MoodTrend({ entries }) {
  const groupedData = {};

  entries.forEach((entry) => {
    const date = new Date(entry.createdAt).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });

    if (!groupedData[date]) {
      groupedData[date] = {
        totalMood: 0,
        count: 0,
      };
    }

    groupedData[date].totalMood += entry.moodScore;
    groupedData[date].count += 1;
  });
  const data = Object.keys(groupedData)
    .sort((a, b) => new Date(a) - new Date(b))
    .map((date) => ({
      day: date,
      mood: Number(
        (groupedData[date].totalMood / groupedData[date].count).toFixed(1),
      ),
    }))
    .slice(-7);

  if (!data.length) {
    return <div className="mood-trend-card">No mood data available</div>;
  }
  const bestDayEntry = data.reduce(
    (best, current) => (current.mood > best.mood ? current : best),
    data[0],
  );

  const worstDayEntry = data.reduce(
    (worst, current) => (current.mood < worst.mood ? current : worst),
    data[0],
  );

  return (
    <div className="mood-trend-card">
      <div className="trend-title">
        <CalendarDays size={20} />
        <h3>Mood by Day</h3>
      </div>
      <p className="trend-subtitle">
        Mood ranged from {worstDayEntry.mood}/10 on {worstDayEntry.day} to{" "}
        {bestDayEntry.mood}/10 on {bestDayEntry.day}.
      </p>

      <div className="trend-chart">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="rgba(255,255,255,0.08)"
            />

            <XAxis dataKey="day" stroke="#64748b" />

            <YAxis domain={[0, 10]} stroke="#64748b" />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="mood"
              fill="#8b5cf6"
              fillOpacity={0.15}
            />

            <Line
              type="monotone"
              dataKey="mood"
              stroke="#8b5cf6"
              strokeWidth={3}
              dot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default MoodTrend;
