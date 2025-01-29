import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/user.js";
import { connectToDatabase } from "./db.js";

dotenv.config();
const app = express();
connectToDatabase();

app.use(cors());
app.use(express.json());

app.use("/api", userRoutes);

const port = process.env.PORT;
app.listen(port, () => console.log(`Server is running on port ${port}`));
