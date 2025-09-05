// backend/server.js
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";

import authRoutes from "./routes/authRoutes.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

// DB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Routes
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
