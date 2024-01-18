export {};

import express,{ Request, Response, NextFunction } from 'express';
const router = express.Router();
const passport = require("passport");
const crypto = require("node:crypto");

const User = require("../models/User");
const oauth2 = require("../auth/oauth2");

/**
 * Email/Password Oauth
 */
// Handle email/password register
router.post(
  "/register",
  async  (req: Request, res: Response, next: NextFunction) => {
    try {
      const {
        body: {  email, password, name }
      } = req;

      const user = await User.findOne({email});

      if(user){
        return res.status(400).json({
          message: "User already exists with this email."
        })
      }

      const salt = crypto.randomBytes(128).toString("hex");
      const hashedPassword = crypto.pbkdf2Sync(password, salt, 20000, 512, "sha512").toString("hex");

      const newUser = await new User({
        name, 
        email,
        hashedPassword,
        salt,
      }).save();

      return res.status(200).json({
        message: "User created with success", 
        user: {
          name: newUser.name,
          email: newUser.email,
        }
      });
    } catch (error) {
      console.log(error)
      return res.status(500).json({
        message: "An error occured"
      });
    }
  }
);

// Handle email/password login
router.use(
  "/login",
  oauth2,
);

/**
 * Github Oauth
 */
router.get("/github",
  passport.authenticate("github", { scope: [ "user:email" ] })
);
  
router.get("/github/callback", 
  passport.authenticate("github"),
  (req: any, res: Response) => {
    const access_token = req?.user?.access_token;
    const refresh_token = req?.user?.refresh_token;
    return res.redirect(
      `http://localhost:5173/oauth-callback?access_token=${access_token}&refresh_token=${refresh_token}`
    )
  }
);


module.exports = router;
