function MonthlyStatsCard() {
  return (
    <div className="monthly-stats">

      <h3>June at a Glance</h3>

      <div className="stat-row">
        <span>Entries Written</span>
        <strong className="purple">9</strong>
      </div>

      <div className="stat-row">
        <span>Average Mood</span>
        <strong className="green">6.9</strong>
      </div>

      <div className="stat-row">
        <span>Best Day</span>
        <strong className="yellow">Jun 4</strong>
      </div>

      <div className="stat-row">
        <span>Total Words</span>
        <strong className="blue">2,908</strong>
      </div>

      <div className="stat-row">
        <span>Active Streak</span>
        <strong className="pink">12 days</strong>
      </div>

    </div>
  );
}

export default MonthlyStatsCard;