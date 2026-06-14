import "./EmotionChart.css";
import { Brain } from "lucide-react";
import { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Calm", value: 32, color: "#3b82f6" },
  { name: "Grateful", value: 28, color: "#10b981" },
  { name: "Hopeful", value: 18, color: "#8b5cf6" },
  { name: "Anxious", value: 12, color: "#f97316" },
  { name: "Sad", value: 10, color: "#818cf8" },
];

function EmotionChart() {
  const [activeIndex, setActiveIndex] = useState(null);
  return (
    <div className="emotion-card">
      <div className="emotion-header">
        <Brain size={18} />
        <h3>Emotions</h3>
      </div>

      <div className="chart-area">
        <ResponsiveContainer width="100%" height={220}>
          <PieChart>
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
              {item.value}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EmotionChart;
