import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()

const ConnectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGO_DB_URI || "")
    if (conn) {
        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } else {
        console.log("Error connecting to db")
    }
}

export default ConnectDB;