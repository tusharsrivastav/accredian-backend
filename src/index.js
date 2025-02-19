import * as dotenv from "dotenv";
dotenv.config({
  path: "./env",
});

import express from "express";
const app = express();
import cors from "cors";

app.use(cors());
app.use(express.json());

// Routes import
import referralRoutes from "./routes/referrals.js"

// routes declaration
app.use("/api/v1/refer", referralRoutes);

app.get("/", (req, res) => {
  res.status(200).json("Hello from the accredian backend API!");
});


const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
