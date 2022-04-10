import { IRole, Role } from "../models/Role.model"
import dotenv from "dotenv"
import mongoose from "mongoose"

dotenv.config()

const ConnectDB = async () => {
    // const conn = await mongoose.connect(process.env.MONGO_DB_URI || "")
    // if (conn) {
    //     console.log(`MongoDB Connected: ${conn.connection.host}`)
    // } else {
    //     console.log("Error connecting to db")
    // }
    console.log(process.env.MONGO_DB_URI)
}

ConnectDB();


const rolesToSeed : {name : string, permissions : [] }[] = [
    {
        name : "superAdmin",
        permissions : []
    },
    {
        name : "stateCoordinator",
        permissions : []
    }, 
    {
        name : "projectManager",
        permissions : []
    },
    {
        name : "projectOwner",
        permissions : []
    },
    {
        name : "financeManager",
        permissions : []
    }
]

const seedRoles = async (roles : {name : string, permissions : [] }[])  => {
    
    for (const role  of roles) {
        const existingRole = await Role.findOne({name : role.name}).exec()
        if (existingRole) {
            existingRole.update({permissions : role.permissions})
            console.log("updated Role:", existingRole)
        }else {
            const newRole : IRole = await Role.create(role)
            console.log("created new Role:", newRole)
        }
        
    }
} 

seedRoles(rolesToSeed)