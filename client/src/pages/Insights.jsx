import Sidebar from "../components/dashboard/Sidebar";

import InsightsHeader from "../components/insights/InsightsHeader";
import StatsCards from "../components/insights/StatsCards";
import MoodTrend from "../components/insights/MoodTrend";
import EmotionChart from "../components/insights/EmotionChart";
import AIInsightCard from "../components/insights/AIInsightCard";

import "./Insights.css";

function Insights() {
  return (
    <div className="dashboard-layout">

      <Sidebar />

      <main className="insights-page">

        <div className="insights-top">

          <InsightsHeader />
        </div>

        <StatsCards />

        <div className="insights-middle">

          <MoodTrend />

          <EmotionChart />

        </div>

        <div className="insights-bottom">

          <AIInsightCard />

        </div>

      </main>

    </div>
  );
}

export default Insights;