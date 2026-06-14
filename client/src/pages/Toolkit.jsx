import { useState } from "react";
import "./Toolkit.css";
import EmergencyResources from "../components/toolkit/EmergencyResources";
import Sidebar from "../components/dashboard/Sidebar";
import "../components/toolkit/StressRelief.css";
import BreathingExercise from "../components/toolkit/BreathingExercise";
import GratitudePractice from "../components/toolkit/GratitudePractice";
import GroundingExercise from "../components/toolkit/GroundingExercise";
import StressRelief from "../components/toolkit/StressRelief";

function Toolkit() {
  const [activeTool, setActiveTool] = useState("breathing");

  return (
    <div className="dashboard-layout">
      <Sidebar />

      <main className="toolkit-page">
        <div className="toolkit-header">
          <p>When you need support</p>
          <h1>Coping Toolkit</h1>
        </div>

        <div className="toolkit-layout">
          <div className="toolkit-sidebar">
            <div
              className={`tool-card breathing ${
                activeTool === "breathing" ? "active" : ""
              }`}
              onClick={() => setActiveTool("breathing")}
            >
              <div className="tool-card-top">
                <div className="tool-icon">🌬️</div>

                <div>
                  <h4>4-7-8 Breathing</h4>
                  <p>Calm your nervous system in 2 minutes</p>
                </div>

                <span className="tool-time">2 min</span>
              </div>
            </div>
            <div
              className={`tool-card gratitude ${
                activeTool === "gratitude" ? "active" : ""
              }`}
              onClick={() => setActiveTool("gratitude")}
            >
              <div className="tool-card-top">
                <div className="tool-icon">💚</div>

                <div>
                  <h4>Gratitude Practice</h4>
                  <p>Three good things — research-backed positivity</p>
                </div>

                <span className="tool-time">5 min</span>
              </div>
            </div>

            <div
              className={`tool-card grounding ${
                activeTool === "grounding" ? "active" : ""
              }`}
              onClick={() => setActiveTool("grounding")}
            >
              <div className="tool-card-top">
                <div className="tool-icon">⚓</div>

                <div>
                  <h4>5-4-3-2-1 Grounding</h4>
                  <p>Return to the present with your senses</p>
                </div>

                <span className="tool-time">3 min</span>
              </div>
            </div>

            <div
              className={`tool-card stress ${
                activeTool === "stress" ? "active" : ""
              }`}
              onClick={() => setActiveTool("stress")}
            >
              <div className="tool-card-top">
                <div className="tool-icon">⚡</div>

                <div>
                  <h4>Stress Relief</h4>
                  <p>Quick physical & mental release techniques</p>
                </div>

                <span className="tool-time">10 min</span>
              </div>
            </div>
            <EmergencyResources />
          </div>

          <div className="tool-content-wrapper">
            {activeTool === "breathing" && <BreathingExercise />}

            {activeTool === "gratitude" && <GratitudePractice />}

            {activeTool === "grounding" && <GroundingExercise />}

            {activeTool === "stress" && <StressRelief />}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Toolkit;
