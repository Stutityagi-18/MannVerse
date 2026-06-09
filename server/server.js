require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const authRoutes = require("./routes/auth.routes");
const { protect } = require("./middleware/auth.middleware");
const app = express();
const entryRoutes = require("./routes/entry.routes");
connectDB();

app.use(cors());
app.use(express.json());
app.use("/api/entries", entryRoutes);

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("MindJournal API Running ");
});
app.get("/api/profile", protect, (req, res) => {
  res.json(req.user);
});
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});