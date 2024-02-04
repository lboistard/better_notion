export {};

import express from 'express';
const router = express.Router();
const passport = require("passport");


import {
  getMe
} from "../controllers/user.controller";


router.get(
  "/me",
  passport.authenticate("bearer", { session: false }),
  getMe,
);

module.exports = router;
