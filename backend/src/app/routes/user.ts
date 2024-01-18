export {};

import express from 'express';
import passport from "passport";
const router = express.Router();

import {
  getMe
} from "../controllers/user.controller";


router.get(
  "/me",
  passport.authenticate("bearer", { session: false }),
  getMe,
);

module.exports = router;
