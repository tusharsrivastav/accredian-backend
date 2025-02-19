import { body, validationResult } from "express-validator";

const validateReferral = [
  body("referrerName").notEmpty().withMessage("Name is required"),
  body("referrerEmail").isEmail().withMessage("Invalid email address"),
  body("referrerName").notEmpty().withMessage("Name is required"),
  body("referrerEmail").isEmail().withMessage("Invalid email address"),
  
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

export default validateReferral;
