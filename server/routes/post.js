import express from "express";
import dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";

import Post from "../models/post.js";

const router = express.Router();

export default router;