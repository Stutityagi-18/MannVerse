import "./EmotionChart.css";
import { Brain } from "lucide-react";
import { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
function EmotionChart({ entries }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const tagCounts = {};

  entries.forEach((entry) => {
    entry.tags?.forEach((tag) => {
      tagCounts[tag] = (tagCounts[tag] || 0) + 1;
    });
  });

  const colors = [
    "#3b82f6",
    "#10b981",
    "#8b5cf6",
    "#f97316",
    "#818cf8",
    "#22d3ee",
  ];

  const data = Object.keys(tagCounts).map((tag, index) => ({
    name: tag,
    value: tagCounts[tag],
    color: colors[index % colors.length],
  }));
  if (data.length === 0) {
    return (
      <div className="emotion-card">
        <div className="emotion-header">
          <Brain size={18} />
          <h3>Emotions</h3>
        </div>

        <p style={{ padding: "20px" }}>No emotion data yet</p>
      </div>
    );
  }
  return (
    <div className="emotion-card">
      <div className="emotion-header">
        <Brain size={18} />
        <h3>Emotions</h3>
      </div>

      <div className="chart-area">
        <ResponsiveContainer width="100%" height={220}>
          <PieChart>
            <Tooltip
              contentStyle={{
                backgroundColor: "#091127",
                border: "1px solid #1e3a8a",
                borderRadius: "12px",
                color: "#fff",
                boxShadow: "0 0 20px rgba(59,130,246,0.25)",
              }}
              labelStyle={{
                color: "#22d3ee",
                fontWeight: "600",
              }}
              itemStyle={{
                color: "#22d3ee",
                fontWeight: "600",
              }}
              formatter={(value, name) => {
                const total = data.reduce((sum, item) => sum + item.value, 0);

                const percentage = ((value / total) * 100).toFixed(1);

                return [`${value} entries (${percentage}%)`, name];
              }}
            />
            <Pie
              data={data}
              dataKey="value"
              innerRadius={55}
              outerRadius={95}
              paddingAngle={3}
              stroke="#ffffff"
              strokeWidth={2}
              onMouseEnter={(_, index) => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              {data.map((entry, index) => (
                <Cell
                  key={index}
                  fill={entry.color}
                  opacity={
                    activeIndex === null || activeIndex === index ? 1 : 0.4
                  }
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="emotion-list">
        {data.map((item) => (
          <div key={item.name} className="emotion-row">
            <div className="emotion-name">
              <span
                className="dot"
                style={{
                  background: item.color,
                }}
              />

              {item.name}
            </div>

            <div className="emotion-value">
              <span
                className="line"
                style={{
                  background: item.color,
                }}
              />
              {item.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EmotionChart;
