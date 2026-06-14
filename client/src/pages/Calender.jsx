import "./Calender.css";
import Sidebar from "../components/dashboard/Sidebar";
import { useEffect, useState } from "react";
import API from "../services/api";
import CalenderGrid from "../components/calender/CalenderGrid";
import SelectedEntryCard from "../components/calender/SelectedEntryCard";
import MonthlyStatsCard from "../components/calender/MonthlyStatsCard";

function Calender() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [entries, setEntries] = useState([]);
  const [selectedEntry, setSelectedEntry] = useState(null);
  useEffect(() => {
    fetchEntries();
  }, []);

  const fetchEntries = async () => {
    try {
      const res = await API.get("/entries");

      setEntries(res.data);

      if (res.data.length > 0) {
        setSelectedEntry(res.data[0]);
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="dashboard-layout">
      <Sidebar />

      <main className="dashboard-main">
        <div className="calender-header">
          <p>Your emotional timeline</p>
          <h1>Calendar View</h1>
        </div>

        <div className="calender-layout">
          <CalenderGrid entries={entries} setSelectedEntry={setSelectedEntry} />
          <div className="calender-right">
            <SelectedEntryCard selectedEntry={selectedEntry} />{" "}
            <MonthlyStatsCard entries={entries} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Calender;
