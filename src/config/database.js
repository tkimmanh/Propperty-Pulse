import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.NEXT_MONGODB_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("error connect to MongoDB", error);
  }
};
export default connectDB;
