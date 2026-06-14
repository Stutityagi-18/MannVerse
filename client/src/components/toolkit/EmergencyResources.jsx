import "./EmergencyResources.css";
import { Phone } from "lucide-react";

function EmergencyResources() {
  return (
    <div className="emergency-card">
      <div className="emergency-header">
        <Phone size={18} />
        <span>EMERGENCY CONTACTS</span>
      </div>

      <a
  href="https://telemanas.mohfw.gov.in/"
  target="_blank"
  rel="noreferrer"
  className="helpline-link"
>
  <h4>Tele-MANAS</h4>
  <p>Call 14416</p>
</a>
<a
  href="http://www.aasra.info/"
  target="_blank"
  rel="noreferrer"
  className="helpline-link"
>
  <h4>AASRA</h4>
  <p>+91 9820466726</p>
</a>

      <a
  href="https://icallhelpline.org/"
  target="_blank"
  rel="noreferrer"
  className="helpline-link"
>
  <h4>iCALL</h4>
  <p>Professional Mental Health Support</p>
</a>
    </div>
  );
}

export default EmergencyResources;