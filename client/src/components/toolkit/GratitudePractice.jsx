import { useState } from "react";
import { Heart } from "lucide-react";
import { FaLeaf } from "react-icons/fa";
import "./GratitudePractice.css";
import API from "../../services/api";
function GratitudePractice() {
  const [thing1, setThing1] = useState("");
  const [thing2, setThing2] = useState("");
  const [thing3, setThing3] = useState("");
  const allFilled = thing1.trim() && thing2.trim() && thing3.trim();
  const [saved, setSaved] = useState(false);
  if (saved) {
    return (
      <div className="gratitude-page">
        <div className="gratitude-header">
          <div className="gratitude-icon">
            <Heart size={28} />
          </div>

          <div>
            <h2>Gratitude Practice</h2>
            <p>Three good things exercise</p>
          </div>
        </div>

        <div className="gratitude-success">
          <FaLeaf className="success-leaf" />

          <h2>Beautiful. You did it.</h2>

          <p>
            These three moments of gratitude are now part of your journal. Come
            back tomorrow.
          </p>

          <button
            className="write-again-btn"
            onClick={() => {
              setSaved(false);
              setThing1("");
              setThing2("");
              setThing3("");
            }}
          >
            Write again
          </button>
        </div>
      </div>
    );
  }
  const handleSave = async () => {
    try {
      await API.post("/gratitude", {
        thing1,
        thing2,
        thing3,
      });

      setSaved(true);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="gratitude-page">
      <div className="gratitude-header">
        <div className="gratitude-icon">
          <Heart size={28} />
        </div>

        <div>
          <h2>Gratitude Practice</h2>

          <p>Three good things exercise</p>
        </div>
      </div>

      <p className="gratitude-description">
        Research by Dr. Martin Seligman shows that noting three good things
        daily for just one week significantly increases happiness and reduces
        depression — and the effects last for months.
      </p>

      <p className="gratitude-label">GOOD THING #1</p>

      <textarea
        className="gratitude-input"
        placeholder="Something that brought you a smile..."
        value={thing1}
        onChange={(e) => setThing1(e.target.value)}
      />

      <p className="gratitude-label">GOOD THING #2</p>

      <textarea
        className="gratitude-input"
        placeholder="A person you're grateful for..."
        value={thing2}
        onChange={(e) => setThing2(e.target.value)}
      />

      <p className="gratitude-label">GOOD THING #3</p>

      <textarea
        className="gratitude-input"
        placeholder="A moment of beauty or peace..."
        value={thing3}
        onChange={(e) => setThing3(e.target.value)}
      />

      <button
        onClick={handleSave}
        disabled={!allFilled}
        className={`save-btn ${allFilled ? "active" : "disabled"}`}
      >
        {allFilled
          ? "Save my three good things "
          : "Fill in all three to continue"}
      </button>
    </div>
  );
}

export default GratitudePractice;
