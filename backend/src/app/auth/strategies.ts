export {}; 
const GitHubStrategy = require("passport-github2"); 
const passport = require("passport");

const User = require("../models/User");
const RefreshToken = require("../models/RefreshToken");


passport.serializeUser((user: any, done: any) => done(null, user));
passport.deserializeUser((user: any, done: any) => done(null, user));

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

    const refreshTokenValue = await RefreshToken.createTokenForUser(newUser._id);

    return done(null, accessToken, refreshTokenValue);
  }
  //update user accessToken
  user.updateAccessToken(accessToken);
  const refreshTokenValue = await RefreshToken.createTokenForUser(user._id);

  return done(null, {
    access_token: accessToken,
    refresh_token: refreshTokenValue
  });
}));

