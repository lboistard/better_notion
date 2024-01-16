export {}; 
const GitHubStrategy = require("passport-github2"); 
const passport = require("passport");

const User = require("../models/User");

passport.serializeUser((user: any, done: any) => done(null, user));
passport.deserializeUser((user: any, done: any) => done(null, user));

// WIP
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

