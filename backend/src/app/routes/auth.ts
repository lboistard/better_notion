const express = require("express");
const router = express.Router();
const passport = require("passport");

router.post(
  "/local",
  (req: any, res: any) => {
    // return fake token for now
    return res.status(200).json({
      token: "Bearer 19065dd31c46b99c6288baf89f461c5dbd3c8ed84187c832c7005a72e5582f28"
    });
  }
);

router.get("/github",
  passport.authenticate("github", { scope: [ "user:email" ] })
);
  
router.get("/github/callback", 
  passport.authenticate("github"),
  (req: any, res: any) => {
    const access_token = req.user.access_token;
    const refresh_token = req.user.refresh_token;
    return res.redirect(
      `http://localhost:5173/oauth-callback?access_token=${access_token}&refresh_token=${refresh_token}`
    )
  }
);


module.exports = router;
