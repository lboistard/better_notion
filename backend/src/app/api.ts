import express = require("express");
const router = express.Router();

router.get(
  "/status", 
  (req, res, next) => {
    return res.status(200).json({message: "API is available"})
  }
);

const auth = require("./routes/auth")
router.use("/auth", auth)

module.exports = router;
