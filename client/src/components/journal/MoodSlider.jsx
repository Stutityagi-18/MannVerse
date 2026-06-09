function MoodSlider({ mood, setMood }) {
  return (
    <div className="glass-card">
      <h3>Mood Score</h3>

      <div className="mood-value">{mood}/10</div>

      <input
        type="range"
        min="1"
        max="10"
        value={mood}
        onChange={(e) => setMood(e.target.value)}
      />
    </div>
  );
}

export default MoodSlider;