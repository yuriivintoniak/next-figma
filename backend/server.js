import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectToDatabase from "./db.js";

dotenv.config();
const app = express();
connectToDatabase();

app.use(cors());
app.use(express.json());

const port = process.env.PORT;

app.listen(port, () => console.log(`Server is running on port ${port}`));
