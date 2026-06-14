import Sidebar from "../components/dashboard/Sidebar";
import EntriesSidebar from "../components/journal/EntriesSidebar";
import EntryEditor from "../components/journal/EntryEditor";
import "./EntryView.css";

function EntryView() {
  return (
    <div className="dashboard-layout">

      <Sidebar />

      <main className="journal-main">

        <div className="journal-layout">

          <EntriesSidebar />

          <EntryEditor />

        </div>

      </main>

    </div>
  );
}

export default EntryView;