import { useState, useEffect } from "react";
import { Wind, Pause, RotateCcw } from "lucide-react";
function BreathingExercise() {
  const [running, setRunning] = useState(false);
  const [phase, setPhase] = useState("ready");
  const [count, setCount] = useState(4);
  const [cycles, setCycles] = useState(0);
  const [started, setStarted] = useState(false);
  const startExercise = () => {
    setStarted(true);
    setRunning(true);
    setPhase("inhale");
    setCount(4);
    setCycles(0);
  };

  useEffect(() => {
    if (!running) return;

    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev > 1) {
          return prev - 1;
        }

        if (phase === "inhale") {
          setPhase("hold");
          return 7;
        }

        if (phase === "hold") {
          setPhase("exhale");
          return 8;
        }

        if (phase === "exhale") {
          setCycles((prev) => prev + 1);
          setPhase("inhale");
          return 4;
        }

        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [running, phase]);

  return (
    <div className="tool-content-card">
      <div className="exercise-header">
        <div className="exercise-icon">
          <Wind size={28} />
        </div>
        <div>
          <h2>4-7-8 Breathing</h2>

          <p>Inhale 4s · Hold 7s · Exhale 8s</p>
        </div>
      </div>

      <div className="breathing-center">
        <div className={`breathing-circle ${started ? phase : "ready-state"}`}>
          {" "}
          <div className="ring ring1"></div>
          <div className="ring ring2"></div>
          <div className="ring ring3"></div>
          {!running ? (
            <div className="circle-content">Ready</div>
          ) : (
            <div className="circle-content">
              <h1>{count}</h1>

              <span>{phase.toUpperCase()}</span>
            </div>
          )}
        </div>

        {running && (
          <h3 className={`phase-text ${phase}`}>
            {phase === "inhale"
              ? "Inhale deeply"
              : phase === "hold"
                ? "Hold & be still"
                : "Exhale slowly"}
          </h3>
        )}

        {running && cycles > 0 && (
          <p className="cycle-text">
            ✓ {cycles} {cycles === 1 ? "cycle" : "cycles"} completed
          </p>
        )}

        {!started ? (
          <button className="tool-btn" onClick={startExercise}>
            ▶ Begin 4-7-8
          </button>
        ) : (
          <div className="breathing-actions">
            {!running ? (
              <button
                className="tool-btn-secondary"
                onClick={() => setRunning(true)}
              >
                ▶ Resume
              </button>
            ) : (
              <button
                className="tool-btn-secondary"
                onClick={() => setRunning(false)}
              >
                <Pause size={16} />
                Pause
              </button>
            )}

            <button className="tool-btn-secondary" onClick={startExercise}>
              <RotateCcw size={16} />
              Restart
            </button>
          </div>
        )}
        <p className="breathing-footer">
          4-7-8 breathing activates the parasympathetic nervous system
        </p>
      </div>
    </div>
  );
}

export default BreathingExercise;
