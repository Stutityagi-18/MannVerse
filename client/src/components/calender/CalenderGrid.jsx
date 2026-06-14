import "./CalenderGrid.css";
import { useState } from "react";
const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
function CalendarGrid({ entries, setSelectedEntry }) {
  const [currentDate, setCurrentDate] = useState(new Date());

  const year = currentDate.getFullYear();

  const month = currentDate.getMonth();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const totalDays = new Date(year, month + 1, 0).getDate();

  const days = Array.from({ length: totalDays }, (_, i) => i + 1);
  const firstDayIndex = new Date(year, month, 1).getDay();

  const blanks = Array.from({ length: firstDayIndex }, (_, i) => i);

  const today = new Date();

  return (
    <div className="calendar-grid-card">
      <div className="calendar-top">
        <span onClick={() => setCurrentDate(new Date(year, month - 1, 1))}>
          ‹
        </span>

        <h2>
          {months[month]} {year}
        </h2>

        <span onClick={() => setCurrentDate(new Date(year, month + 1, 1))}>
          ›
        </span>
      </div>

      <div className="weekday-row">
        {weekDays.map((day) => (
          <span key={day}>{day}</span>
        ))}
      </div>

      <div className="days-grid">
        {blanks.map((blank) => (
          <div key={`blank-${blank}`} className="empty-day"></div>
        ))}

        {days.map((day) => {
          const isToday =
            day === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear();

          const entryForDay = entries.find((entry) => {
            const entryDate = new Date(entry.createdAt);

            return (
              entryDate.getDate() === day &&
              entryDate.getMonth() === month &&
              entryDate.getFullYear() === year
            );
          });

          let moodClass = "";
          let moodText = "";
          if (entryForDay) {
            const mood = entryForDay.moodScore;

            if (mood <= 2) {
              moodClass = "low";
              moodText = "Low";
            } else if (mood <= 4) {
              moodClass = "moderate";
              moodText = "Moderate";
            } else if (mood <= 6) {
              moodClass = "good";
              moodText = "Good";
            } else if (mood <= 8) {
              moodClass = "great";
              moodText = "Great";
            } else {
              moodClass = "excellent";
              moodText = "Excellent";
            }
          }

          return (
            <div
              key={day}
              className={isToday ? "day-box active-day" : "day-box"}
              onClick={() => entryForDay && setSelectedEntry(entryForDay)}
              title={
                entryForDay
                  ? `${moodText} (${entryForDay.moodScore}/10)`
                  : "No entry"
              }
            >
              {day}

              {entryForDay && <span className={`mood-dot ${moodClass}`} />}
            </div>
          );
        })}
      </div>
      <div className="mood-legend">
        <span>MOOD:</span>

        <div>
          <i className="low"></i>Low
        </div>
        <div>
          <i className="moderate"></i>Moderate
        </div>
        <div>
          <i className="good"></i>Good
        </div>
        <div>
          <i className="great"></i>Great
        </div>
        <div>
          <i className="excellent"></i>Excellent
        </div>
      </div>
    </div>
  );
}

export default CalendarGrid;
