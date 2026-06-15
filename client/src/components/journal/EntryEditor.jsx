import "./EntryEditor.css";
import { FiSave } from "react-icons/fi";
import { useState } from "react";
import { getDailyPrompt } from "../../utils/dailyPrompt";
import API from "../../services/api";
function EntryEditor() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [selectedEmotions, setSelectedEmotions] = useState([]);
  const dailyPrompt = getDailyPrompt();
  const toggleEmotion = (emotion) => {
    if (selectedEmotions.includes(emotion)) {
      setSelectedEmotions(selectedEmotions.filter((e) => e !== emotion));
    } else {
      setSelectedEmotions([...selectedEmotions, emotion]);
    }
  };
  const handleSave = async () => {
    if (!body.trim()) {
      alert("Please write something first.");
      return;
    }
    if (selectedEmotions.length === 0) {
      alert("Please select at least one emotion.");
      return;
    }
    const emotionScores = {
      Happy: 8,
      Calm: 7,
      Grateful: 9,
      Hopeful: 8,
      Excited: 10,
      Tired: 4,
      Anxious: 3,
      Sad: 2,
    };

    const moodScore =
      selectedEmotions.length > 0
        ? Math.round(
            selectedEmotions.reduce(
              (sum, emotion) => sum + emotionScores[emotion],
              0,
            ) / selectedEmotions.length,
          )
        : 5;
    try {
      await API.post("/entries", {
        title,
        body,
        moodScore,
        tags: selectedEmotions,
      });

      alert("Journal saved!");

      setTitle("");
      setBody("");
      setSelectedEmotions([]);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="entry-editor">
      <div className="editor-toolbar">
        <div className="toolbar-right">
          <span>{body.trim() ? body.trim().split(/\s+/).length : 0} words</span>
          <div className="editor-emotions">
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
                type="button"
                onClick={() => toggleEmotion(emotion)}
                className={`emotion-chip ${
                  selectedEmotions.includes(emotion) ? "selected" : ""
                }`}
              >
                {emotion}
              </button>
            ))}
          </div>
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
        {dailyPrompt}
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
