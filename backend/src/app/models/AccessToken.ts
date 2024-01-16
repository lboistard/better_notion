import { Schema, model } from "mongoose";

interface IAccessToken {
  userId: Schema.Types.ObjectId;
  token: string;
  created: Date;
}

const accessTokenSchema = new Schema<IAccessToken>({
  userId: { type: Schema.Types.ObjectId, ref: "User" },
  token: {
    type: String,
    unique: true,
    required: true
  },
  created: {
    type: Date,
    default: Date.now
  }
});

const AccessToken = model<IAccessToken>("AccessToken", accessTokenSchema);

export default AccessToken;
