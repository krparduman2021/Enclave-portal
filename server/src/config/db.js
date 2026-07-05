import mongoose from "mongoose";
import logger from "../utils/logger.js";

const connectDB = async () => {
  const mongoUri =
    process.env.MONGO_URI ||
    process.env.MONGODB_URI ||
    process.env.MONGO_URL ||
    process.env.DATABASE_URL;

  if (!mongoUri) {
    logger.error(
      "MongoDB connection string is missing. Set MONGO_URI (or MONGODB_URI) in Render environment variables."
    );
    process.exit(1);
  }

  try {
    const connection = await mongoose.connect(mongoUri);

    logger.info(`MongoDB Connected : ${connection.connection.host}`);
  } catch (error) {
    logger.error(`MongoDB Connection Failed : ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;