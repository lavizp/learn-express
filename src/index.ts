import express, { Express, Request, Response, Application } from "express";
import dotenv from "dotenv";
import router from "./routes";

//For env File
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8000;
app.use(express.json());
app.use("/api", router);

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});
