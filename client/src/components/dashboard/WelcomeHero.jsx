import "./WelcomeHero.css";
import { useAuth } from "../../store/authStore";

function WelcomeHero() {
  const { user } = useAuth();

  const hour = new Date().getHours();

  let greeting = "Good Evening";

  if (hour < 12) {
    greeting = "Good Morning";
  } else if (hour < 18) {
    greeting = "Good Afternoon";
  }

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="welcome-hero">
      <div className="hero-left">
        <p className="hero-date">{today}</p>

        <h1 className="hero-title">
          {greeting}, <span>{user?.name || "User"}</span>
        </h1>

        <p className="hero-quote">
          "Self-awareness is the beginning of every meaningful change."
        </p>
      </div>
    </div>
  );
}

export default WelcomeHero;