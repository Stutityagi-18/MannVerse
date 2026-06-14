function SelectedEntryCard() {
    const mood = 7;

const moodEmoji =
  mood <= 2
    ? "😔"
    : mood <= 4
    ? "😟"
    : mood <= 6
    ? "🙂"
    : mood <= 8
    ? "😊"
    : "🤩";
  return (
    <div className="selected-entry">

      <div className="entry-top">
        <span>Tuesday, June 9</span>
        <span className="close-btn">×</span>
      </div>

      <div className="score-row">

        <div className="emoji-box">
  {moodEmoji}
</div>

        <div>
          <div className="score">
  <span className="main-score">7</span>
  <span className="sub-score">/10</span>
</div>

          <div className="score-label">
            Good
          </div>
        </div>

      </div>

      <p className="entry-text">
        Taking things one breath at a time.
        Presence over perfection.
      </p>

      <div className="emotion-tag">
        Calm
      </div>

      <div className="entry-meta">
        <span>221 words</span>
        <span>•</span>
        <span>2 min read</span>
      </div>

      <button className="read-btn">
        📖 Read Full Entry
      </button>

    </div>
  );
}
export default SelectedEntryCard;