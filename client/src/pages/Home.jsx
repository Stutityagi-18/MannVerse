import { useState } from "react";

import EntryEditor from "../components/journal/EntryEditor";
import MoodSlider from "../components/journal/MoodSlider";
import TagPicker from "../components/journal/TagPicker";
import ReflectionCard from "../components/journal/ReflectionCard";

function Home() {
  const [journal, setJournal] = useState("");
  const [mood, setMood] = useState(5);
  const [selectedTags, setSelectedTags] = useState([]);

  return (
    <div className="dashboard">
      <div className="left-panel">
        <EntryEditor
          value={journal}
          onChange={setJournal}
        />
      </div>

      <div className="right-panel">
        <MoodSlider
          mood={mood}
          setMood={setMood}
        />

        <TagPicker
          selectedTags={selectedTags}
          setSelectedTags={setSelectedTags}
        />

        <ReflectionCard />

        <button className="save-btn">
          Save Entry
        </button>
      </div>
    </div>
  );
}

export default Home;