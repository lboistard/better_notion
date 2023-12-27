const express = require("express");
const router = express.Router();

router.post(
  "/local",
  (req: any, res: any, next: any) => {
    return res.status(200).json({
      token: "Bearer 19065dd31c46b99c6288baf89f461c5dbd3c8ed84187c832c7005a72e5582f28"
    });
  },
);

module.exports = router;
