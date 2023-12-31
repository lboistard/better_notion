import { Model, Schema, HydratedDocument, model } from 'mongoose';

interface IUser {
  name: string;
  email: string;
  avatar?: string;
  githubId?: string;
  accessToken?: string,
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
    sparse: true,
  },
  avatar: String,
  githubId: {
    type: String,
    unique: true,
  },
  accessToken: String,
}, 
);


userSchema.method("updateAccessToken", function updateAccessToken(accessToken) {
  this.accessToken = accessToken;
  return this.save();
});


const User = model<IUser>('User', userSchema);

module.exports = User;
