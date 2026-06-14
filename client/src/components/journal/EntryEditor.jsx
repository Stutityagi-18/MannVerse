import "./EntryEditor.css";
import { FiSave } from "react-icons/fi";
import { useState } from "react";
import API from "../../services/api";
function EntryEditor() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const handleSave = async () => {
    try {
      await API.post("/entries", {
        title,
        body,
        moodScore: 5,
        tags: [],
      });

      alert("Journal saved!");

      setTitle("");
      setBody("");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="entry-editor">
      <div className="editor-toolbar">
        <div className="toolbar-right">
          <span>{body.trim() ? body.trim().split(/\s+/).length : 0} words</span>

          <button className="journal-save-btn" onClick={handleSave}>
            <FiSave />
            Save
          </button>
        </div>
      </div>
      <p className="editor-date">
        {new Date().toLocaleDateString("en-US", {
          weekday: "long",
          month: "long",
          day: "numeric",
          year: "numeric",
        })}
      </p>

      <input
        type="text"
        className="editor-title"
        placeholder="Untitled entry..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <div className="editor-divider"></div>

      <div className="reflection-box">
        <span className="reflection-icon">✦</span>
        What emotion has been quietly asking for your attention lately?{" "}
      </div>
      <textarea
        className="journal-textarea"
        placeholder="Let your thoughts flow freely. This is your private space — honest, unfiltered, and safe."
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
    </div>
  );
}

export default EntryEditor;
