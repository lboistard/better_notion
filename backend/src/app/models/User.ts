import { Schema, model } from "mongoose";
import crypto from "node:crypto";

import AccessToken from "./AccessToken";
import RefreshToken from "./RefreshToken";

interface IUser {
  name: string;
  email: string;
  avatar?: string;
  githubId?: string;
  accessToken?: string,
  hashedPassword: string,
  salt: string,
}

interface IUserMethods {
  updateAccessToken(accessToken: string): IUser;
}

const userSchema = new Schema<IUser, {}, IUserMethods>({
  name: { 
    type: String, 
    required: true 
  },
  email: { 
    type: String, 
    index: true,
    unique: true,
    sparse: true
  },
  avatar: String,
  githubId: {
    type: String,
    default: "",
  },
  accessToken: String,
  hashedPassword: { type: String },
  salt: { type: String },
});

type ComparePasswordFunction = (
  candidatePassword: string,
) => void;

const comparePassword: ComparePasswordFunction = function (this: any, password) {
  const hashedPassword = crypto.pbkdf2Sync(password, this.salt, 20000, 512, "sha512").toString("hex");
  return this.hashedPassword === hashedPassword;
};

userSchema.methods.comparePassword = comparePassword;

const createTokensForUser = async function(this: any) {
  const accessTokenValue = crypto.randomBytes(32).toString("hex");
  const refreshTokenValue = crypto.randomBytes(32).toString("hex");

  const accessToken = await new AccessToken({
    user: this._id,
    token: accessTokenValue,
  }).save();
  const refreshToken = await new RefreshToken({
    user: this._id,
    token: refreshTokenValue,
  }).save();
  

  return({
    accessToken: accessToken.token,
    refreshToken: refreshToken.token,
  });

};
userSchema.methods.createTokensForUser = createTokensForUser;

const User = model<IUser>("User", userSchema);

module.exports = User;
