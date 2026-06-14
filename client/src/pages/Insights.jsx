import Sidebar from "../components/dashboard/Sidebar";
import { useEffect, useState } from "react";
import API from "../services/api";
import InsightsHeader from "../components/insights/InsightsHeader";
import StatsCards from "../components/insights/StatsCards";
import MoodTrend from "../components/insights/MoodTrend";
import EmotionChart from "../components/insights/EmotionChart";
import AIInsightCard from "../components/insights/AIInsightCard";

import "./Insights.css";

function Insights() {
  const [entries, setEntries] = useState([]);

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
    <div className="dashboard-layout">
      <Sidebar />

      <main className="insights-page">
        <div className="insights-top">
          <InsightsHeader />
        </div>

        <StatsCards entries={entries} />
        <div className="insights-middle">
          <MoodTrend entries={entries} />
          <EmotionChart entries={entries} />{" "}
        </div>

        <div className="insights-bottom">
          <AIInsightCard />
        </div>
      </main>
    </div>
  );
}

export default Insights;
