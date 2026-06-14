import "./NotificationsCard.css";
import { Bell, BookOpen, HeartPulse } from "lucide-react";

function NotificationsCard() {
  return (
    <div className="settings-card">

      <div className="card-title">
        <Bell size={20}/>
        <h3>Notifications</h3>
      </div>

      <div className="notify-item">

        <div className="notify-left">
          <BookOpen size={22}/>

          <div>
            <h4>Daily Journal Reminder</h4>
            <p>
              A gentle nudge to write each evening at 9 PM
            </p>
          </div>
        </div>

        <label className="switch">
          <input type="checkbox" defaultChecked />
          <span className="slider"></span>
        </label>

      </div>

      <div className="notify-item">

        <div className="notify-left">
          <HeartPulse size={22}/>

          <div>
            <h4>Mood Check-in Reminder</h4>
            <p>
              Quick check-in prompt twice a day
            </p>
          </div>
        </div>

        <label className="switch">
          <input type="checkbox" />
          <span className="slider"></span>
        </label>

      </div>

    </div>
  );
}

export default NotificationsCard;