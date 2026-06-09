const tags = [
  "Happy",
  "Sad",
  "Anxious",
  "Grateful",
  "Work",
  "Study",
  "Family",
];

function TagPicker({ selectedTags, setSelectedTags }) {
  const toggleTag = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(
        selectedTags.filter((t) => t !== tag)
      );
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  return (
    <div className="glass-card">
      <h3>Tags</h3>

      <div className="tag-container">
        {tags.map((tag) => (
          <button
            key={tag}
            className={`tag ${
              selectedTags.includes(tag)
                ? "active-tag"
                : ""
            }`}
            onClick={() => toggleTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}

export default TagPicker;