import "./AIReportModal.css";
import { createPortal } from "react-dom";

function AIReportModal({ open, onClose, report }) {
  if (!open) return null;

  return createPortal(
    <div className="report-modal-overlay" onClick={onClose}>
      <div className="report-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>

        <h1>Daily Reflection Report</h1>
        <div className="report-section">
          <h2>SUMMARY</h2>
          <p>{report?.summary || "Generating summary..."}</p>
        </div>

        <div className="report-section">
          <h2>REFLECTION</h2>
          <p>{report?.reflection || "Generating reflection..."}</p>
        </div>

        <div className="report-section">
          <h2>SUGGESTION</h2>
          <p>{report?.suggestion || "Generating suggestion..."}</p>
        </div>
      </div>
    </div>,
    document.body,
  );
}

export default AIReportModal;
