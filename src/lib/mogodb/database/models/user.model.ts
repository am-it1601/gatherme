import mongoose, { Schema, models } from "mongoose";
import { model } from "mongoose";
import { unique } from "next/dist/build/utils";

export interface IUSer extends mongoose.Document {
  clerkId: string;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  profile: string;
}
const UserSchema = new Schema<IUSer>({
  clerkId: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
    unique: true,
  },
  profile: {
    type: String,
    required: true,
  },
});

const User = models.User || model("User", UserSchema);

export default User;
