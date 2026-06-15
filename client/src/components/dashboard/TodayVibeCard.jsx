import "./TodayVibeCard.css";
import { useEffect, useState } from "react";
import API from "../../services/api";
import { PiPlantFill } from "react-icons/pi";
import { FiStar } from "react-icons/fi";
function TodayVibeCard() {
  const [avgMood, setAvgMood] = useState(0);
  const [vibeText, setVibeText] = useState("");
  const [weeklyMood, setWeeklyMood] = useState([
    { mood: 0 },
    { mood: 0 },
    { mood: 0 },
    { mood: 0 },
    { mood: 0 },
    { mood: 0 },
    { mood: 0 },
  ]);
  const [selectedDay, setSelectedDay] = useState(new Date().getDay());
  useEffect(() => {
    fetchVibeData();
  }, []);
  const fetchVibeData = async () => {
    try {
      const res = await API.get("/entries");

      const entries = res.data;

      if (!entries.length) return;

      const avg =
        entries.reduce((sum, e) => sum + e.moodScore, 0) / entries.length;

      setAvgMood(avg.toFixed(1));

      if (avg >= 8)
        setVibeText("You're thriving today. Keep the momentum going ✨");
      else if (avg >= 6)
        setVibeText("You're in a good headspace today. Keep nurturing it.");
      else if (avg >= 4) setVibeText("Take things one step at a time today 🌱");
      else setVibeText("Be kind to yourself today. Better days are coming 💜");
      const moods = Array(7)
        .fill()
        .map(() => ({
          totalMood: 0,
          count: 0,
          mood: 0,
        }));

      entries.forEach((entry) => {
        const day = new Date(entry.createdAt).getDay();

        moods[day].totalMood += entry.moodScore;
        moods[day].count += 1;
      });

      moods.forEach((day) => {
        if (day.count > 0) {
          day.mood = Number((day.totalMood / day.count).toFixed(1));
        }
      });

      setWeeklyMood(moods);
      const today = new Date().getDay();

      if (moods[today].mood > 0) {
        setSelectedDay(today);
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="today-vibe-card">
      <div className="vibe-title">
        <FiStar className="vibe-star" />
        TODAY'S VIBE
      </div>{" "}
      <div className="vibe-score">
        <span className="score">
          {weeklyMood[selectedDay]?.mood || avgMood}
        </span>{" "}
        <span className="outof">/10</span>
      </div>
      <p className="vibe-text">{vibeText}</p>
      <div className="sprout">
        <PiPlantFill />
      </div>
      <div className="week-chart">
        {weeklyMood.map((dayData, index) => (
          <div
            key={index}
            className={`bar ${
              index === selectedDay
                ? "active"
                : dayData.mood > 0
                  ? "filled"
                  : ""
            }`}
            onClick={() => {
              if (dayData.mood > 0) {
                setSelectedDay(index);
              }
            }}
            style={{
              height: `${Math.max(dayData.mood * 5, 8)}px`,
              cursor: dayData.mood > 0 ? "pointer" : "default",
            }}
          />
        ))}
      </div>
      <div className="week-labels">
        {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
          <span
            key={index}
            className={index === selectedDay ? "active-day" : ""}
          >
            {day}
          </span>
        ))}
      </div>
    </div>
  );
}

export default TodayVibeCard;
