import { body, validationResult } from "express-validator";

const validateReferral = [
  body("referrerName").notEmpty().withMessage("Your Name is required"),
  body("referrerEmail").isEmail().withMessage("Your email address is invalid"),
  body("refereeName").notEmpty().withMessage("Your friend's Name is required"),
  body("refereeEmail").isEmail().withMessage("Friend's email address is invalid"),
  
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors.array());
      
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

export default validateReferral;
