import cors from "cors";
import * as dotenv from "dotenv";
import express from "express";
import morgan from "morgan";

import Auth from "./routes/auth";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(Auth);

app.listen(3000, () => console.log("Servidor On na porta 3000"));
