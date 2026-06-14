import "./EntryCard.css";

function EntryCard({ date, text, tags, active, onClick }) {
  return (
    <div
      className={`entry-card ${active ? "active" : ""}`}
      onClick={onClick}
    >
      <div className="entry-date">
        {date}
      </div>

      <p className="entry-text">
        {text}
      </p>

      <div className="entry-tags">
        {tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>

      <div className="entry-dot"></div>
    </div>
  );
}

export default EntryCard;