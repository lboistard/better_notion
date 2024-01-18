import express = require("express");

const authAPI = require("./routes/auth");
const userAPI = require("./routes/user");

const router = express.Router();

router.get(
  "/status", 
  (req, res, next) => {
    return res.status(200).json({message: "API is available"})
  }
);


router.use("/auth", authAPI)
router.use("/user", userAPI)


module.exports = router;
