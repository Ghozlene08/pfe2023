import express from "express"
import mongoose , {Schema} from "mongoose"
import {UserRouter} from "./routes/userRouter.js"
import {JournalRouter} from "./routes/journalRouter.js"
import {ChartRouter} from "./routes/chartRouter.js"
import {AccountingRouter} from "./routes/accountingRouter.js"
import dotenv from "dotenv"
import {ConnectionDB} from "./database/connection.js"
import bodyParser from "body-parser"
import cors from "cors"

dotenv.config()

const app = express();

const userRoutes = new UserRouter()
const journalRouter = new JournalRouter()
const chartRouter = new ChartRouter()
const accountingRouter = new AccountingRouter()

const connection = new ConnectionDB()

connection.connect(process.env.MONGO_URI_ATLAS)
app.use(cors())
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, OPTIONS'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Content-Type, Accept, X-Custom-Header, Authorization'
  );
  next();
});
app.use(cors())

app.use(bodyParser());


app.use("/user",userRoutes.getRoutes())
app.use("/journal",journalRouter.getRoutes())
app.use("/accounting",accountingRouter.getRoutes())
app.use("/chart",chartRouter.getRoutes())




const port = process.env.PORT || 3000;

app.listen(port);