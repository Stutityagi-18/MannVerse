import "./AIInsightCard.css";
import { BrainCircuit } from "lucide-react";

function AIInsightCard() {
  return (
    <div className="ai-card">
      <div className="ai-header">
        <BrainCircuit size={20} />
        <h3>Weekly AI Insight</h3>
      </div>
      <div className="theme-box">
        <span>THEME OF THE WEEK</span>
        <h4>Growth & Self-Discovery</h4>
      </div>

      <div className="ai-content">
        <div className="ai-left">
          <p className="ai-text">
            Your writing reveals a meaningful shift — you're moving from
            reactive emotional responses toward thoughtful reflection. Saturday
            continues to be your emotional peak, likely tied to rest and
            connection. Wednesday dips suggest midweek energy management could
            help. Consider scheduling something restorative.
          </p>
        </div>

        <div className="ai-right">
          <div className="metric">
            <div className="metric-top">
              <span>Emotional Depth</span>
              <span className="purple">78%</span>
            </div>

            <div className="progress-track">
              <div
                className="progress-fill purple-fill"
                style={{ width: "78%" }}
              />
            </div>
          </div>

          <div className="metric">
            <div className="metric-top">
              <span>Positivity Ratio</span>
              <span className="green">72%</span>
            </div>

            <div className="progress-track">
              <div
                className="progress-fill green-fill"
                style={{ width: "72%" }}
              />
            </div>
          </div>

          <div className="metric">
            <div className="metric-top">
              <span>Self-Awareness</span>
              <span className="blue">85%</span>
            </div>

            <div className="progress-track">
              <div
                className="progress-fill blue-fill"
                style={{ width: "85%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AIInsightCard;
