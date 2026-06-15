import "./JournalCard.css";
import { useState } from "react";
import API from "../../services/api";
import { getDailyPrompt } from "../../utils/dailyPrompt";
function JournalCard() {
  const [mood, setMood] = useState(5);
  const [content, setContent] = useState("");
  const [saving, setSaving] = useState(false);
  const todayPrompt = getDailyPrompt();
  const [selectedEmotions, setSelectedEmotions] = useState([]);
  const moodColor =
    mood <= 2
      ? "#ef4444"
      : mood <= 4
        ? "#f97316"
        : mood <= 6
          ? "#3b82f6"
          : "#00d08a";
  const toggleEmotion = (emotion) => {
    if (selectedEmotions.includes(emotion)) {
      setSelectedEmotions(selectedEmotions.filter((e) => e !== emotion));
    } else {
      setSelectedEmotions([...selectedEmotions, emotion]);
    }
  };
  const saveEntry = async () => {
    if (!content.trim()) {
      alert("Please write something first.");
      return;
    }
    if (selectedEmotions.length === 0) {
      alert("Please select at least one emotion.");
      return;
    }
    try {
      setSaving(true);

      await API.post("/entries", {
        body: content,
        moodScore: Math.round((mood / 7) * 10),
        tags: selectedEmotions,
      });

      alert("Journal Entry Saved 💜");

      setContent("");
      setSelectedEmotions([]);
      setMood(5);
    } catch (err) {
      console.error(err);

      alert("Failed to save entry");
    } finally {
      setSaving(false);
    }
  };
  return (
    <div className="journal-card">
      <div className="prompt-box">
        <span className="prompt-label">TODAY'S PROMPT</span>
        <p>{todayPrompt}</p>{" "}
      </div>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Start writing your thoughts... this is your safe space. No judgment here."
      />{" "}
      <div className="divider"></div>
      <div className="journal-info">
        <span>
          {content.trim() ? content.trim().split(/\s+/).length : 0} words
        </span>
      </div>
      <div className="mood-section">
        <div className="mood-header">
          <h4>How are you feeling right now?</h4>
          <div
            className="mood-badge"
            style={{
              color: moodColor,
              borderColor: `${moodColor}50`,
              background: `${moodColor}15`,
            }}
          >
            {mood <= 2
              ? "Low"
              : mood <= 4
                ? "Moderate"
                : mood <= 6
                  ? "Good"
                  : "Excellent"}{" "}
            · {Math.round((mood / 7) * 10)}/10
          </div>{" "}
        </div>
        <input
          type="range"
          min="1"
          max="7"
          value={mood}
          onChange={(e) => setMood(Number(e.target.value))}
          className="mood-slider"
          style={{
            background: `linear-gradient(
      to right,
      ${moodColor} ${((mood - 1) / 6) * 100}%,
      rgba(255,255,255,.08) ${((mood - 1) / 6) * 100}%
    )`,
          }}
        />

        <div className="emoji-row">
          <span>😔</span>
          <span>😟</span>
          <span>😐</span>
          <span>🙂</span>
          <span>😊</span>
          <span>😁</span>
          <span>🤩</span>
        </div>
      </div>
      <div className="emotion-section">
        <h4> Select emotions</h4>
        <div className="emotion-chips">
          {[
            "Happy",
            "Calm",
            "Grateful",
            "Sad",
            "Anxious",
            "Hopeful",
            "Tired",
            "Excited",
          ].map((emotion) => (
            <button
              key={emotion}
              onClick={() => toggleEmotion(emotion)}
              className={
                selectedEmotions.includes(emotion) ? emotion.toLowerCase() : ""
              }
            >
              {emotion}
            </button>
          ))}
        </div>
      </div>
      <button className="save-btn" onClick={saveEntry} disabled={saving}>
        {saving ? "Saving..." : "Save Journal Entry"}
      </button>{" "}
    </div>
  );
}

export default JournalCard;
