import "./StreakModal.css";
import { FaFireAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import API from "../../services/api";

function StreakModal() {

  const [streak, setStreak] = useState(0);

  useEffect(() => {
    fetchStreak();
  }, []);

  const fetchStreak = async () => {
    try {
      const res = await API.get("/entries");

      const entries = res.data;

      if (!entries.length) return;

      const dates = entries.map(
        (entry) =>
          new Date(entry.createdAt)
            .toISOString()
            .split("T")[0]
      );

      const uniqueDates = [...new Set(dates)];

      uniqueDates.sort(
        (a, b) => new Date(b) - new Date(a)
      );

      let count = 1;

      for (let i = 1; i < uniqueDates.length; i++) {

        const prev = new Date(uniqueDates[i - 1]);
        const curr = new Date(uniqueDates[i]);

        const diff =
          (prev - curr) /
          (1000 * 60 * 60 * 24);

        if (diff === 1) {
          count++;
        } else {
          break;
        }
      }

      setStreak(count);

    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="streak-modal">

      <div className="fire-circle">
        <FaFireAlt />
      </div>

      <div className="streak-content">
        <h2>{streak}</h2>
        <p>DAY STREAK</p>
      </div>

    </div>
  );
}

export default StreakModal;