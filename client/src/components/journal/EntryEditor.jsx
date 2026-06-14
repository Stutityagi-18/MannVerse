import "./EntryEditor.css";
import { FiSave } from "react-icons/fi";
function EntryEditor() {
  return (
    <div className="entry-editor">
<div className="editor-toolbar">

  <div className="toolbar-left">
    <span>B</span>
    <span>I</span>
    <span>U</span>
    <span>|</span>
    <span>≡</span>
    <span>#</span>
  </div>

  <div className="toolbar-right">
    <span>0 words</span>
    <span>1 min read</span>
    <span>• Editing...</span>

    <button className="journal-save-btn">
  <FiSave />
  Save
</button>
  </div>

</div>
      <p className="editor-date">Thursday, June 11, 2026</p>

   <input
  type="text"
  className="editor-title"
  placeholder="Untitled entry..."
/>
      <div className="editor-divider"></div>

      <div className="reflection-box">
<span className="reflection-icon">✦</span>
What emotion has been quietly asking for your attention lately?      </div>
      <textarea
        className="journal-textarea"
        placeholder="Let your thoughts flow freely. This is your private space — honest, unfiltered, and safe."
      />
    </div>
  );
}

export default EntryEditor;
