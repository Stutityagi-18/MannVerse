import "./AIReflectionCard.css";
import { useState } from "react";
import API from "../../services/api";
import AIReportModal from "./AIReportModal";

function AIReflectionCard() {
  const [openReport, setOpenReport] = useState(false);
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(false);
  const fetchReport = async () => {
    try {
      setLoading(true);

      const res = await API.get("/ai/report");

      console.log("AI REPORT:", res.data);

      setReport(res.data);

      setOpenReport(true);
    } catch (err) {
      console.error(err);

      alert(err.response?.data?.message || "Failed to generate report");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="reflection-card">
      <div className="reflection-header">
        <div className="title-left">
          <h3>Today's AI Reflection</h3>{" "}
        </div>
      </div>
      <div className="emotion-tags">
        {report?.tags?.map((tag, index) => (
          <span key={index}>{tag}</span>
        ))}
      </div>

      <p>
        {report?.reflection ||
          "Click below to generate your AI reflection report."}
      </p>

      <div className="divider"></div>

      <div className="emotion-box">
        <span>DOMINANT EMOTION</span>

        <h4>{report?.dominantEmotion || "Not Generated Yet"}</h4>

        <button className="report-btn" onClick={fetchReport}>
          {loading ? "Generating..." : "View Daily Report →"}{" "}
        </button>
      </div>

      <AIReportModal
        open={openReport}
        onClose={() => setOpenReport(false)}
        report={report}
      />
    </div>
  );
}

export default AIReflectionCard;
