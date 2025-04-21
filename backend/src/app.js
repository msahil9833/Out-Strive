import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import { connectDB } from "./config/dbConnect.js";
import userRoutes from "./routes/user.route.js";
import contactRoutes from "./routes/contact.route.js";

dotenv.config({ path: "./.env" });

const PORT = process.env.PORT || 3800;

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173", "https://outstrive-cwk1.vercel.app"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Failed to connect to the database:", error.message);
    process.exit(1);
  });

app.get("/", (req, res) => {
  res.status(200).json({ message: `API is working on port ${PORT}` });
});

app.use("/api/v1/user", userRoutes);
app.use("/api/v1/contact", contactRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "An internal server error occurred" });
});

export default app;

console.log(process.env.PORT);
