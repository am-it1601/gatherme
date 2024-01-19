import { StringToBoolean } from "class-variance-authority/types";
import mongoose, { Schema, models } from "mongoose";
import { model } from "mongoose";
import { unique } from "next/dist/build/utils";

export interface IEvents extends mongoose.Document {
  _id: string;
  title: string;
  description: string;
  location: string;
  createdAt: Date;
  imageUrl: string;
  startDateTime: Date;
  endDateTime: Date;
  price: string;
  isFree: Boolean;
  url: string;
  category: {
    _id: string;
    name: string;
  };
  organizer: {
    _id: string;
    firstName: string;
    lastName: string;
  };
}
const EventSchema = new Schema<IEvents>(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
    },
    location: {
      type: String,
      required: true,
      unique: true,
    },
    startDateTime: {
      type: Date,
      required: true,
    },
    endDateTime: {
      type: Date,
      required: true,
    },
    price: {
      type: String,
    },
    isFree: {
      type: Boolean,
      default: false,
    },
    url: String,
    imageUrl: String,
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
    },
    organizer: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Events = models.Events || model("Events", EventSchema);

export default Events;
