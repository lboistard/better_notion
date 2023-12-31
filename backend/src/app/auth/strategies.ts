export {}; 
const GitHubStrategy = require("passport-github2"); 
const passport = require('passport');
const jwt = require("jsonwebtoken");

const User = require("../models/User");
const RefreshToken = require("../models/RefreshToken");

passport.use(new GitHubStrategy({
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: "http://localhost:3000/api/auth/github/callback"
}, async (accessToken: any, refreshToken: any, profile: any, done: any) => {

  console.log("github strategy")
  console.log("profile : ", profile)
  
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

    const refreshTokenValue = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_REFRESH_EXPIRATION
    });
    return done(null, accessToken, refreshTokenValue);
  }
  //update user accessToken
  user.updateAccessToken(accessToken);

  console.log("user : ", user)
  return done();
}
));

