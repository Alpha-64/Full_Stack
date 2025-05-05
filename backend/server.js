const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
const authRoutes = require("./routes/authRoutes");


dotenv.config();
app.use(cors());
app.use(express.json());

const fullstaskroutes = require('./routes/authRoutes')
app.use("/api/fullstack", fullstaskroutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});