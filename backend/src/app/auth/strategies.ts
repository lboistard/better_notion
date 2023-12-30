export {}; 
const GitHubStrategy = require("passport-github2"); 
const passport = require('passport');

passport.use(new GitHubStrategy({
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: "http://localhost:3000/api/auth/github/callback"

},
function(accessToken: any, refreshToken: any, profile: any, done: any) {
  // console.log("profile : ", profile)
  // User.findOrCreate({ githubId: profile.id }, function (err, user) {
    // });
    return done();
}
));

