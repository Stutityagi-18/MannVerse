import "./GroundingExercise.css";
import { Anchor } from "lucide-react";

function GroundingExercise() {

  const steps = [
    {
      number: 5,
      label: "SEE",
      title:
        "Name 5 things you can see right now — notice colors, shapes, light.",
      color: "see"
    },
    {
      number: 4,
      label: "TOUCH",
      title:
        "Notice 4 textures — the feel of your chair, clothes, skin, air temperature.",
      color: "touch"
    },
    {
      number: 3,
      label: "HEAR",
      title:
        "Listen for 3 distinct sounds — near and far, soft and sharp.",
      color: "hear"
    },
    {
      number: 2,
      label: "SMELL",
      title:
        "Find 2 scents — or imagine your two favorite smells in detail.",
      color: "smell"
    },
    {
      number: 1,
      label: "TASTE",
      title:
        "Notice 1 taste in your mouth — or take a sip of something.",
      color: "taste"
    }
  ];

  return (
    <div className="grounding-page">

      <div className="grounding-header">

        <div className="grounding-icon">
          <Anchor size={24} />
        </div>

        <div>
          <h2>5-4-3-2-1 Grounding</h2>
          <p>Return to the present moment</p>
        </div>

      </div>

      <div className="grounding-intro">
        When anxiety pulls you into the future, this technique uses all
        five senses to anchor you in the present. Work through each step
        slowly and mindfully.
      </div>

      <div className="grounding-steps">

        {steps.map((step) => (
          <div
            key={step.number}
            className={`grounding-step-card ${step.color}`}
          >

            <div className={`grounding-number ${step.color}`}>
              {step.number}
            </div>

            <div className="grounding-content">

              <span className={`grounding-label ${step.color}`}>
                {step.label}
              </span>

              <h4>{step.title}</h4>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default GroundingExercise;