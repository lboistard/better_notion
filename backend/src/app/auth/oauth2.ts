// import passport from "passport";
import express = require("express");
import oauth2orize, {
  ExchangeDoneFunction
} from "oauth2orize";

import Client from "../models/OAuth/Client";
const User = require("../models/User");

const server = oauth2orize.createServer();
const router = express.Router();

// We skip client auth for now ;)
server.exchange(oauth2orize.exchange.password(
  async (client: Client, email: string, password: string, scope: string[], done: ExchangeDoneFunction) => {
    try {
      const user = await User.findOne({email});
      if(!user){
        return done(new Error("No such user in database"), false);
      }

      if(!user.comparePassword(password)){
        return done(new Error("Wrong password provided, please try again"), false);
      }

      const {
        accessToken,
        refreshToken
      } = await user.createTokensForUser();
      
      return done(null, accessToken, refreshToken)

    } catch (err: any) {
      return done(new Error(err));
    }
  }),
);

router.post(
  "/",
  server.token(),
  server.errorHandler(),
);


module.exports = router;
