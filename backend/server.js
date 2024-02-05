import express from "express";
import dotenv from 'dotenv';
import connectDB from "./db/connectDB.js";
import cookieParser from "cookie-parser";
import cors from 'cors';

dotenv.config();
connectDB();
const app = express();
const PORT = process.env.PORT || 5000;

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());


//Routes
app.use("/api/users", userRoutes);


app.listen(PORT, () => console.log(`Server running at port ${PORT}`));


