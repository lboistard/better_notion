export {}; 
const passport = require("passport");
const GitHubStrategy = require("passport-github2"); 
import { Strategy as BearerStrategy, IVerifyOptions } from "passport-http-bearer";

import AccessToken from "../models/AccessToken";
const User = require("../models/User");

const VALIDITY_TIME = 2629743000;

passport.serializeUser((user: any, done: any) => done(null, user));
passport.deserializeUser((user: any, done: any) => done(null, user));

// Email/Password 
passport.use(new BearerStrategy(
  async (accessToken: string, done: (error: Error | undefined, user?: any, options?: IVerifyOptions | string) => void) => {
    try {
      console.log("[BearerStrategy] applied, accessToken: " + accessToken);
      const token = await AccessToken.findOne({token: accessToken}).lean();

      if (!token) return done(undefined, false);
      
      // Check token validity date
      const today =  new Date().getTime();
      const tokenIsExpired = token.created.getTime() + VALIDITY_TIME  <= today;

      if(tokenIsExpired) return done(undefined, false);

      const user = await User.findById(token.userId);
      if (!user) return done(undefined, false);

      return done(undefined, user, { scope: "all", message: "success" });

    } catch (error) {
      console.log(error)
      return done(new Error("Error while performing auth"));
    }
}));


// WIP Github
passport.use(new GitHubStrategy({
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: "http://localhost:3000/api/auth/github/callback"
}, async (accessToken: any, refreshToken: any, profile: any, done: any) => {

  const user = await User.findOne({githubId: profile.id});

  if(!user) {
    console.log("Creating a new User from Github.");
    const newUser = await new User({
      githubId: profile.id,
      name: profile.displayName,
      email: profile?.email,
      avatar: profile?.avatar_url,
      accessToken
    }).save();


    return done(null, accessToken, refreshToken);
  }

  return done(null, { access_token: accessToken });
}));

