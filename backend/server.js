const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
const authRoutes = require("./routes/authRoutes");


dotenv.config();
app.use(cors());
app.use(express.json());

app.use("/api/fullstack", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});