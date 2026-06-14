import Sidebar from "../components/dashboard/Sidebar";
import EntriesSidebar from "../components/journal/EntriesSidebar";
import EntryEditor from "../components/journal/EntryEditor";
import "./EntryView.css";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../services/api";

function EntryView() {
  const { id } = useParams();

  const [entry, setEntry] = useState(null);

  useEffect(() => {
    fetchEntry();
  }, [id]);

  const fetchEntry = async () => {
    try {
      const res = await API.get(`/entries/${id}`);

      setEntry(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="dashboard-layout">
      <Sidebar />

      <main className="journal-main">
        <div className="journal-layout">
          <EntriesSidebar />

          <EntryEditor entry={entry} />
        </div>
      </main>
    </div>
  );
}

export default EntryView;