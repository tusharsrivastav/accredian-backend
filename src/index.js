import * as dotenv from "dotenv";
dotenv.config({
  path: "./env",
});

import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json("Hello from the accredian backend API!");
});

// Referral submission endpoint
app.post("/refer", async (req, res) => {
console.log(req.body);


  const { referrerName, referrerEmail, refereeName, refereeEmail, message } =
    req.body;

  try {
    const referral = await prisma.referral.create({
      data: { referrerName, referrerEmail, refereeName, refereeEmail, message },
    });

    res.status(201).json(referral);
  } catch (error) {
    console.log(error);
    
    res.status(500).json({ error: "Referral submission failed" });
  }
});

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
