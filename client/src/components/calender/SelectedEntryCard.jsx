import { useState } from "react";
import { useNavigate } from "react-router-dom";
function SelectedEntryCard({ selectedEntry }) {
  const navigate = useNavigate();
  const [showStory, setShowStory] = useState(false);
  if (!selectedEntry) {
    return <div className="selected-entry">No entry selected</div>;
  }
  const mood = selectedEntry.moodScore;
  const moodEmoji =
  mood <= 2
    ? "😭"
    : mood <= 4
      ? "😞"
      : mood <= 5
        ? "😐"
        : mood <= 6
          ? "🙂"
          : mood <= 7
            ? "😊"
            : mood <= 8
              ? "😁"
              : mood <= 9
                ? "🥳"
                : "🤩";
  const moodLabel =
    mood <= 2
      ? "Very Low"
      : mood <= 4
        ? "Low"
        : mood <= 6
          ? "Okay"
          : mood <= 8
            ? "Good"
            : "Excellent";
  const wordCount = selectedEntry.body?.trim().split(/\s+/).length || 0;
  return (
    <div className="selected-entry">
      <div className="entry-top">
        <span>
          {new Date(selectedEntry.createdAt).toLocaleDateString("en-US", {
            weekday: "long",
            month: "long",
            day: "numeric",
          })}
        </span>
      </div>

      <div className="score-row">
        <div className="emoji-box">{moodEmoji}</div>

        <div>
          <div className="score">
            <span className="main-score">{selectedEntry.moodScore}</span>
            <span className="sub-score">/10</span>
          </div>
          <div className="score-label">{moodLabel}</div>{" "}
        </div>
      </div>

      <p className="entry-text">{selectedEntry.body}</p>

      <div className="emotion-tag">
        {selectedEntry.tags?.[0] || "Reflection"}
      </div>

      <div className="entry-meta">
        <span>{wordCount} words</span>
      </div>

      <button className="read-btn" onClick={() => setShowStory(true)}>
        Read Full Entry
      </button>
      {showStory && (
        <div className="story-overlay" onClick={() => setShowStory(false)}>
          <div className="story-modal" onClick={(e) => e.stopPropagation()}>
            <div className="story-header">
              <h2>Journal Entry</h2>

              <button
                className="close-story"
                onClick={() => setShowStory(false)}
              >
                ×
              </button>
            </div>

            <p className="story-date">
              {new Date(selectedEntry.createdAt).toLocaleDateString()}
            </p>

            <div className="story-content">{selectedEntry.body}</div>
          </div>
        </div>
      )}
    </div>
  );
}
export default SelectedEntryCard;
