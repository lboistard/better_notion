import { Date, Schema, model } from 'mongoose';

interface IRefreshToken {
  userId: Schema.Types.ObjectId;
  token: string;
  created: Date;
}

const refreshTokenSchema = new Schema<IRefreshToken>({
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
})

const RefreshToken = model<IRefreshToken>("RefreshToken", refreshTokenSchema);

module.exports = RefreshToken;
