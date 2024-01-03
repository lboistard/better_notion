import { Model, Schema, model } from 'mongoose';
const jwt = require("jsonwebtoken");

const User = require("./User");
interface IRefreshToken {
  userId: Schema.Types.ObjectId;
  token: string;
  created: Date;
}

interface IRefreshTokenModel extends Model<IRefreshToken> {
  createTokenForUser(): string;
}

const refreshTokenSchema = new Schema<IRefreshToken, IRefreshTokenModel>({
  userId: { type: Schema.Types.ObjectId, ref: "User" },
  token: {
    type: String,
    unique: true,
    required: true,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

refreshTokenSchema.static("createTokenForUser", async function createTokenForUser(userId: string): Promise<string> {
  const refreshTokenValue = jwt.sign(
    { id: userId }, 
    process.env.JWT_SECRET, 
    { expiresIn: process.env.JWT_REFRESH_EXPIRATION }
  );
   
  await new RefreshToken({
    userId: userId,
    token: refreshTokenValue,
  }).save(); 

  return refreshTokenValue;
});

const RefreshToken = model<IRefreshToken>("RefreshToken", refreshTokenSchema);

module.exports = RefreshToken;
