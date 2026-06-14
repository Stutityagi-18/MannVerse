import Sidebar from "../components/dashboard/Sidebar";
import WelcomeHero from "../components/dashboard/WelcomeHero";
import JournalCard from "../components/dashboard/JournalCard";
import AIReflectionCard from "../components/dashboard/AIReflectionCard";
import TodayVibeCard from "../components/dashboard/TodayVibeCard";
import StatsCards from "../components/dashboard/StatsCards";
import QuickAccessCard from "../components/dashboard/QuickAccessCard";
import StreakModal from "../components/dashboard/StreakModal";

import "./Home.css";

function Home() {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <main className="dashboard-main">
        <div className="hero-row">
          <WelcomeHero />
          {/* <StreakModal /> */}
        </div>
        <div className="dashboard-content">
          <div className="left-section">
            <JournalCard />
            <StatsCards />
          </div>
          <div className="right-section">
            <AIReflectionCard />
            <TodayVibeCard />
            <QuickAccessCard />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
