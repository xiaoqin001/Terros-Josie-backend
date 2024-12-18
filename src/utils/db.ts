import mongoose from 'mongoose';
import dotenv from "dotenv";


dotenv.config();

const URI = process.env.URI || '';


const connectDB = async (): Promise<void> => {
  try {

    await mongoose.connect(URI);
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }
};

export default connectDB;
