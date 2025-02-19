import express from "express";
import validateReferral from "../middlewares/validateReferral.js";
import { PrismaClient } from "@prisma/client";

const router = express.Router();

const prisma = new PrismaClient();


router.post("/", validateReferral, async (req, res) => {
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

export default router