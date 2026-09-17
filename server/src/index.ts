import express, { Express, Request, Response } from "express";
import cors from "cors";
import helmet from "helmet"
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();

app.use(express.json());
app.use(cors());
app.use(helmet());

app.get("/", (req:Request, res:Response) => {
   res.send("Hello From serevr");
});

const port = process.env.PORT || 7000;

app.listen(port, () => {
    console.log(`Server is listening successfully on port ${port}`)
});