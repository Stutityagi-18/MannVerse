import "./StressRelief.css";

import {
  Zap,
  Droplets,
  Dumbbell,
  Brain,
  Eye,
  PersonStanding
} from "lucide-react";

function StressRelief() {

  const techniques = [
    {
      icon: <Dumbbell size={24} />,
      time: "5 min",
      title: "Progressive Muscle",
      desc: "Tense and release each muscle group from toes to forehead"
    },
    {
      icon: <Droplets size={24} />,
      time: "30 sec",
      title: "Cold Water",
      desc: "Splash cold water on face — activates the mammalian dive reflex"
    },
    {
      icon: <PersonStanding size={24} />,
      time: "10 min",
      title: "Movement Break",
      desc: "A short walk or stretch to metabolize cortisol physically"
    },
    {
      icon: <Brain size={24} />,
      time: "5 min",
      title: "Brain Dump",
      desc: "Write every anxious thought out — externalize to neutralize"
    },
    {
      icon: <Eye size={24} />,
      time: "2 min",
      title: "Mindful Object",
      desc: "Spend 2 minutes observing one object in complete detail"
    },
    {
      icon: <PersonStanding size={24} />,
      time: "8 min",
      title: "Body Scan",
      desc: "Scan head to toe, consciously releasing tension at each point"
    }
  ];

  return (
    <div className="stress-page">

      <div className="stress-header">

        <div className="stress-main-icon">
          <Zap size={24} />
        </div>

        <div>
          <h2>Stress Relief</h2>
          <p>Quick physical & mental techniques</p>
        </div>

      </div>

      <div className="stress-grid">

        {techniques.map((item, index) => (
          <div
            className="stress-technique-card"
            key={index}
          >

            <div className="stress-top">

              <div className="stress-card-icon">
                {item.icon}
              </div>

              <span className="stress-time">
                {item.time}
              </span>

            </div>

            <h3>{item.title}</h3>

            <p>{item.desc}</p>

          </div>
        ))}

      </div>

    </div>
  );
}

export default StressRelief;