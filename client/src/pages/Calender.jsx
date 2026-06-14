import "./Calender.css";
import { useState } from "react";
import Sidebar from "../components/dashboard/Sidebar";

import CalenderGrid from "../components/calender/CalenderGrid";
import SelectedEntryCard from "../components/calender/SelectedEntryCard";
import MonthlyStatsCard from "../components/calender/MonthlyStatsCard";

function Calender() {
  const [currentDate, setCurrentDate] = useState(
  new Date()
);
  return (
    <div className="dashboard-layout">

      <Sidebar />

      <main className="dashboard-main">

        <div className="calender-header">
          <p>Your emotional timeline</p>
          <h1>Calendar View</h1>
        </div>

        <div className="calender-layout">

          <CalenderGrid />

          <div className="calender-right">
            <SelectedEntryCard />
            <MonthlyStatsCard />
          </div>

        </div>

      </main>

    </div>
  );
}

export default Calender;