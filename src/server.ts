import express, { Application, Response, Request } from "express"

const app : Application = express()

app.get( "/", (req : Request , res : Response) => {
    res.send("Welcome to Project Tracka")
})

app.listen(process.env.PORT || 5000, () : void => {
    console.log("App Running")
})