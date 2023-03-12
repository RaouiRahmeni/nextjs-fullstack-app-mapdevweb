import mongoose, { Model } from 'mongoose';

interface IUser {
  name: string;
  email: string;
  password: string;
}

const userSchema = new mongoose.Schema<IUser>(
  {
    name: String,
    email: String,
    password: Number,
  },
  { versionKey: false, timestamps: true }
);

export const UserModel: Model<IUser> =
  mongoose.models?.User || mongoose.model<IUser>('User', userSchema);
