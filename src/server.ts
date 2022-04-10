import express, { Application, Response, Request } from "express"
import dotenv from "dotenv"
dotenv.config()

const app : Application = express()


//connect Database
import ConnectDB from "./config/config"
ConnectDB();

//routes



app.get( "/", (req : Request , res : Response) => {
    res.send("Welcome to Project Tracka")
})

//errorHandler
import { errorHandler, notFound} from "./middleware/errorMiddleware"

app.use(notFound, errorHandler);

app.listen(process.env.PORT , () : void => {
    console.log("App Running")
    console.log(process.env.MONGO_DB_URI)
})