import "./AIReflectionCard.css";

function AIReflectionCard() {
  return (
    <div className="reflection-card">
      <div className="reflection-header">
        <div className="title-left">
          <h3>AI Reflection</h3>
        </div>

        <span className="live-badge">Live</span>
      </div>

      <div className="emotion-tags">
        <span>Calm</span>
        <span>Reflective</span>
        <span>Positive</span>
      </div>

      <p>
        Your writing carries a sense of quiet strength today. There's a
        beautiful awareness of the present moment and a willingness to sit with
        complexity.
      </p>

      <div className="divider"></div>

      <div className="confidence-section">
        <div className="confidence-header">
          <span>CONFIDENCE</span>
          <span>87%</span>
        </div>

        <div className="confidence-bar">
          <div className="confidence-fill"></div>
        </div>
      </div>

      <div className="emotion-box">
        <span>Dominant Emotion</span>
        <h4>Serenity</h4>
      </div>
    </div>
  );
}

export default AIReflectionCard;
