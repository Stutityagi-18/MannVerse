import "./AIReflectionCard.css";
import { useState, useEffect } from "react";
import API from "../../services/api";
import AIReportModal from "./AIReportModal";

function AIReflectionCard() {
  const [openReport, setOpenReport] = useState(false);
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const loadReport = async () => {
  try {
    const res = await API.get("/ai/report");
    setReport(res.data);
  } catch (err) {
    console.log("No existing report");
  }
};
  const fetchReport = async () => {
   try {
  setLoading(true);
  setErrorMessage("");

  const res = await API.get("/ai/report");

  console.log("AI REPORT:", res.data);

  setReport(res.data);

  setOpenReport(true);
} catch (err) {
  console.error(err);

  setErrorMessage(
    err.response?.data?.message || "Failed to generate report"
  );
} finally {
      setLoading(false);
    }
  };
  useEffect(() => {
  loadReport();
}, []);
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
    errorMessage ||
    "Click below to generate your AI reflection report."}
</p>

      <div className="divider"></div>

      <div className="emotion-box">
        <span>DOMINANT EMOTION</span>

<h4>
  {report?.dominantEmotion ||
    (errorMessage ? "Generation Limit Reached" : "Not Generated Yet")}
</h4>
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
