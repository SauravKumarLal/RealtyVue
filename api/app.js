import express from "express";
import dotenv from 'dotenv';
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoute from "./routes/auth.route.js"
import postRoute from "./routes/post.route.js"

dotenv.config();

const app = express();

app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/api/posts", postRoute);
app.use("/api/auth", authRoute);

const PORT = process.env.PORT || 8800;

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}!"`);
});

