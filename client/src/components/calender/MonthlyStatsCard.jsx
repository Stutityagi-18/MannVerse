function MonthlyStatsCard({ entries }) {
  const totalEntries = entries.length;

  const uniqueDates = [
    ...new Set(
      entries.map(
        (entry) => new Date(entry.createdAt).toISOString().split("T")[0],
      ),
    ),
  ].sort((a, b) => new Date(b) - new Date(a));

  let streak = 0;

  for (let i = 0; i < uniqueDates.length; i++) {
    if (i === 0) {
      streak++;
      continue;
    }

    const current = new Date(uniqueDates[i - 1]);
    const previous = new Date(uniqueDates[i]);

    const diffDays = (current - previous) / (1000 * 60 * 60 * 24);

    if (diffDays === 1) {
      streak++;
    } else {
      break;
    }
  }

  const avgMood =
    totalEntries > 0
      ? (
          entries.reduce((sum, entry) => sum + entry.moodScore, 0) /
          totalEntries
        ).toFixed(1)
      : 0;

  const totalWords = entries.reduce(
    (sum, entry) => sum + (entry.body?.split(" ").length || 0),
    0,
  );
  const bestEntry =
    entries.length > 0
      ? entries.reduce((best, current) =>
          current.moodScore > best.moodScore ? current : best,
        )
      : null;

  const bestDay = bestEntry
    ? new Date(bestEntry.createdAt).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      })
    : "--";

  return (
    <div className="monthly-stats">
      <h3>
        {new Date().toLocaleDateString("en-US", {
          month: "long",
        })}{" "}
        at a Glance
      </h3>

      <div className="stat-row">
        <span>Entries Written</span>
        <strong className="purple">{totalEntries}</strong>
      </div>

      <div className="stat-row">
        <span>Average Mood</span>
        <strong className="green">{avgMood}</strong>
      </div>

      <div className="stat-row">
        <span>Best Day</span>
        <strong className="yellow">{bestDay}</strong>
      </div>

      <div className="stat-row">
        <span>Total Words</span>
        <strong className="blue">{totalWords}</strong>
      </div>

      <div className="stat-row">
        <span>Active Streak</span>
        <strong className="pink">{streak} days</strong>
      </div>
    </div>
  );
}

export default MonthlyStatsCard;
