import mongoose from "mongoose";

const DB_URI = process.env.MONGODB_URI;
const connectionOptions: mongoose.ConnectOptions = {
  dbName: "gatherMe",
  user: process.env.MONGODB_USER,
  pass: process.env.MONGODB_PASSWORD,
  bufferCommands: false,
};
let cached = (global as any).mongoose || { conn: null, promise: null };

export const connectToDatabase = async () => {
  if (cached.conn) return cached.conn;

  if (!DB_URI)
    throw new Error("[server] : Database Connection String is missing");

  cached.promise =
    cached.promise || mongoose.connect(DB_URI, connectionOptions);

  cached.conn = await cached.promise;

  return cached.conn;
};
