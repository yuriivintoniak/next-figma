import express from "express";
import { getUsers } from "../controllers/user.js";

const router = express.Router();

export default router.get("/users", getUsers);
