import "./MoodTrend.css";
import { CalendarDays } from "lucide-react";

function MoodTrend() {
  const data = [
    { day: "Mon", value: 6.5 },
    { day: "Tue", value: 7.2 },
    { day: "Wed", value: 6.1 },
    { day: "Thu", value: 8.0 },
    { day: "Fri", value: 7.7 },
    { day: "Sat", value: 9.0 },
    { day: "Sun", value: 8.2 },
  ];

  return (
    <div className="mood-trend-card">

      <div className="trend-title">
        <CalendarDays size={20} />
        <h3>Mood by Day</h3>
      </div>

      <p className="trend-subtitle">
        Saturdays are your emotional peak. Wednesdays need attention.
      </p>

      <div className="chart-grid">

        <div className="y-axis">
          <span>10</span>
          <span>6</span>
          <span>3</span>
          <span>0</span>
        </div>

        <div className="bars-wrapper">

          {data.map((item, index) => (
            <div className="bar-item" key={index}>

              <div
                className={`bar bar-${index}`}
                style={{
                  height: `${item.value * 16}px`
                }}
              />

              <span>{item.day}</span>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}

export default MoodTrend;