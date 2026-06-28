import "./TodayVibeCard.css";
import { useEffect, useState } from "react";
import API from "../../services/api";
import { PiPlantFill } from "react-icons/pi";
import { FiStar } from "react-icons/fi";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function TodayVibeCard() {
  const [weeklyMood, setWeeklyMood] = useState([]);
  const [selectedDay, setSelectedDay] = useState(6);
  const [weekOffset, setWeekOffset] = useState(0);
  const [vibeText, setVibeText] = useState("");

  useEffect(() => {
    fetchVibeData();
  }, [weekOffset]);

  const fetchVibeData = async () => {
    try {
      const res = await API.get("/entries");
      const entries = res.data;

      if (!entries.length) {
        setWeeklyMood([]);
        return;
      }

      const today = new Date();

      // move to previous week
      today.setDate(today.getDate() - weekOffset * 7);

      const days = [];

      for (let i = 6; i >= 0; i--) {
        const d = new Date(today);
        d.setDate(today.getDate() - i);

        days.push({
          date: d,
          total: 0,
          count: 0,
          mood: 0,
        });
      }

      entries.forEach((entry) => {
        const entryDate = new Date(entry.createdAt);

        days.forEach((day) => {
          if (entryDate.toDateString() === day.date.toDateString()) {
            day.total += entry.moodScore;
            day.count++;
          }
        });
      });

      days.forEach((d) => {
        if (d.count > 0) {
          d.mood = Number((d.total / d.count).toFixed(1));
        }
      });

      setWeeklyMood(days);
      const todayIndex = weekOffset === 0 ? 6 : days.length - 1;
      setSelectedDay(todayIndex);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    const mood = weeklyMood[selectedDay]?.mood || 0;

    if (mood >= 8) {
      setVibeText("✨ You're thriving today. Keep the momentum going!");
    } else if (mood >= 6) {
      setVibeText("😊 You're in a good headspace today. Keep nurturing it.");
    } else if (mood >= 4) {
      setVibeText("🌱 Take things one step at a time today.");
    } else if (mood > 0) {
      setVibeText("💜 Be kind to yourself today. Better days are coming.");
    } else {
      setVibeText("📝 No journal entries found for this day.");
    }
  }, [weeklyMood, selectedDay]);
  const startDate = weeklyMood[0]?.date;
  const endDate = weeklyMood[6]?.date;
  return (
    <div className="today-vibe-card">
      <div className="week-navigation">
        <button
          className="week-btn"
          onClick={() => setWeekOffset((prev) => prev + 1)}
        >
          <FaChevronLeft />
        </button>

        <span>
          {startDate && endDate
            ? `${startDate.toLocaleDateString("en-IN", {
                day: "numeric",
                month: "short",
              })} - ${endDate.toLocaleDateString("en-IN", {
                day: "numeric",
                month: "short",
              })}`
            : "Loading..."}
        </span>

        <button
          className="week-btn"
          disabled={weekOffset === 0}
          onClick={() => setWeekOffset((prev) => prev - 1)}
        >
          <FaChevronRight />
        </button>
      </div>

      <div className="vibe-title">
        <FiStar className="vibe-star" />
        DAILY VIBE
      </div>

      <div className="vibe-score">
        <span className="score">{weeklyMood[selectedDay]?.mood || 0}</span>

        <span className="outof">/10</span>
      </div>

      <p className="vibe-text">{vibeText}</p>

      <div className="sprout">
        <PiPlantFill />
      </div>

      <div className="week-chart">
        {weeklyMood.map((day, index) => (
          <div
            key={index}
            className={`bar ${
              index === selectedDay ? "active" : day.mood > 0 ? "filled" : ""
            }`}
            onClick={() => {
              if (day.mood > 0) setSelectedDay(index);
            }}
            style={{
              height: `${Math.max(day.mood * 5, 8)}px`,
              cursor: day.mood > 0 ? "pointer" : "default",
            }}
          />
        ))}
      </div>

      <div className="week-labels">
        {weeklyMood.map((day, index) => (
          <span
            key={index}
            className={index === selectedDay ? "active-day" : ""}
          >
            {day.date.getDate()}
          </span>
        ))}
      </div>
    </div>
  );
}

export default TodayVibeCard;
