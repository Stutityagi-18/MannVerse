function EntryEditor({ value, onChange }) {
  return (
    <div className="glass-card journal-editor">
      <h2>Today's Journal</h2>

      <textarea
        placeholder="How are you feeling today?"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default EntryEditor;