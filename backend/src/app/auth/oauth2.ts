// import passport from "passport";
import express = require("express");
import oauth2orize, {
  ExchangeDoneFunction
} from "oauth2orize";

import crypto from "node:crypto";

import Client from "../models/OAuth/Client";
import RefreshToken from "../models/RefreshToken";
import AccessToken from "../models/AccessToken";
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

server.exchange(oauth2orize.exchange.refreshToken(
  async (client: Client, refreshToken: string, scope: any, done: ExchangeDoneFunction) => {
    try{

    const token = refreshToken.split(" ")[1];
    const _refreshToken = await RefreshToken.findOne({token});

    if(!_refreshToken) return done(null, false);
    // for now we don't check if the refresh token has still a valid date

    const newAccessToken = await new AccessToken({
      userId: _refreshToken.userId,
      token: crypto.randomBytes(32).toString("hex")
    }).save();
    
    return done(null, newAccessToken.token);
      
    }catch(e) {
      return done(null, false);
    }
  }),
);

router.post(
  "/",
  server.token(),
  server.errorHandler(),
);


module.exports = router;
