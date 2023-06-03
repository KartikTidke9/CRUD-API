import dotenv from "dotenv";
dotenv.config();

import express from "express";
import connectDB from "./db/connectDB.js";
import router from "./routes/web.js";

const app = express();

//JSON
app.use(express.json())

connectDB(process.env.DATABASE_URI, process.env.DB_NAME);

app.use("/student", router);

app.listen(process.env.PORT);
