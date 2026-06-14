import "./Settings.css";
import Sidebar from "../components/dashboard/Sidebar";
import SettingsHeader from "../components/settings/SettingsHeader";
import ProfileCard from "../components/settings/ProfileCard";
import SecurityCard from "../components/settings/SecurityCard";

function Settings() {
  return (
    <div className="dashboard-layout">
      <Sidebar />

      <div className="settings-page">
        <div className="settings-container">
          <SettingsHeader />

          <ProfileCard />

          {/* <NotificationsCard /> */}

          <SecurityCard />
        </div>
      </div>
    </div>
  );
}

export default Settings;
