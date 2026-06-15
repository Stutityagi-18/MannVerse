import "./AIInsightCard.css";
import { Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
function AIInsightCard() {
  const reminders = [
    {
      quote: "Growth is rarely loud. Often it is quiet consistency.",
      theme: "ON PATIENCE",
      color: "#8b5cf6",
    },
    {
      quote: "You are allowed to move at your own pace.",
      theme: "ON SELF-COMPASSION",
      color: "#3b82f6",
    },
    {
      quote: "Rest is not a reward. It is a necessity.",
      theme: "ON REST",
      color: "#14b8a6",
    },
    {
      quote: "Every honest entry brings you closer to yourself.",
      theme: "ON SELF-AWARENESS",
      color: "#a855f7",
    },
    {
      quote: "Small progress is still progress.",
      theme: "ON GROWTH",
      color: "#10b981",
    },
    {
      quote: "Healing is not linear, and that's okay.",
      theme: "ON HEALING",
      color: "#ec4899",
    },
    {
      quote: "A difficult day does not define your journey.",
      theme: "ON RESILIENCE",
      color: "#f97316",
    },
    {
      quote: "Your emotions deserve acknowledgment, not judgment.",
      theme: "ON ACCEPTANCE",
      color: "#06b6d4",
    },
    {
      quote: "You have survived every hard day you've faced so far.",
      theme: "ON STRENGTH",
      color: "#8b5cf6",
    },
    {
      quote: "Be gentle with yourself. You're doing your best.",
      theme: "ON KINDNESS",
      color: "#14b8a6",
    },
    {
      quote: "It's okay to pause. You don't have to quit.",
      theme: "ON BALANCE",
      color: "#3b82f6",
    },
    {
      quote: "The fact that you're trying matters more than perfection.",
      theme: "ON PROGRESS",
      color: "#f59e0b",
    },
    {
      quote: "Your story is still unfolding.",
      theme: "ON HOPE",
      color: "#10b981",
    },
    {
      quote: "One calm breath can change the next moment.",
      theme: "ON MINDFULNESS",
      color: "#06b6d4",
    },
    {
      quote: "You don't have to carry everything at once.",
      theme: "ON PEACE",
      color: "#a855f7",
    },
  ];
  const [current, setCurrent] = useState(0);

  const nextReminder = () => {
    setCurrent((prev) => (prev + 1) % reminders.length);
  };

  const prevReminder = () => {
    setCurrent((prev) => (prev - 1 + reminders.length) % reminders.length);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % reminders.length);
    }, 5000);

    return () => clearTimeout(timer);
  }, [current]);
  const reminder = reminders[current];
  return (
    <div className="ai-card">
      <div className="ai-header">
        <Sparkles size={20} />
        <h3>Gentle Reminder</h3>
      </div>

      <div className="reminder-box">
        <div className="reminder-top"></div>

        <p
          className="reminder-text"
          style={{
            color: reminder.color,
            textShadow: `0 0 20px ${reminder.color}55`,
          }}
        >
          "{reminder.quote}"
        </p>
        <div className="dots">
          {reminders.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === current ? "active" : ""}`}
              style={{
                background: index === current ? reminder.color : "#334155",
              }}
            />
          ))}
        </div>

        <div
          className="reminder-theme"
          style={{
            color: reminder.color,
          }}
        >
          {reminder.theme}
        </div>
      </div>
    </div>
  );
}

export default AIInsightCard;
