import "./EntriesSidebar.css";
import EntryCard from "./EntryCard";
import { FiFileText } from "react-icons/fi";
import { useEffect, useState } from "react";
import API from "../../services/api";
function EntriesSidebar() {
  const [entries, setEntries] = useState([]);
  const [selectedEntry, setSelectedEntry] = useState(null);
  useEffect(() => {
    fetchEntries();
  }, []);

  const fetchEntries = async () => {
    try {
      const res = await API.get("/entries");

      setEntries(res.data);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="entries-sidebar">
      <div className="entries-heading">
        <h3>
          <FiFileText />
          PAST ENTRIES
        </h3>
        <p>{entries.length} entries</p>{" "}
      </div>
      {entries.map((entry, index) => (
        <EntryCard
          key={entry._id}
          active={index === 0}
          date={new Date(entry.createdAt).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            weekday: "short",
          })}
          text={entry.body.slice(0, 50) + "..."}
          tags={entry.tags}
          onClick={() => setSelectedEntry(entry)}
        />
      ))}
      {selectedEntry && (
        <div
          className="entry-modal-overlay"
          onClick={() => setSelectedEntry(null)}
        >
          <div className="entry-modal" onClick={(e) => e.stopPropagation()}>
            <h2>📖 Journal Entry</h2>

            <p className="modal-date">
              {new Date(selectedEntry.createdAt).toLocaleDateString()}
            </p>

            <div className="modal-tags">
              {selectedEntry.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>

            <p className="modal-content">{selectedEntry.body}</p>

            <button
              className="close-modal-btn"
              onClick={() => setSelectedEntry(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default EntriesSidebar;
