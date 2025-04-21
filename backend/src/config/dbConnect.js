import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const res = await mongoose.connect(`${process.env.MONGODB_URI}/outstrive`);
    console.log(
      `Database connected successfully: Host - ${res.connection.host}`
    );
  } catch (error) {
    console.error(`Database connection failed: ${error.message}`);
    process.exit(1);
  }
};
