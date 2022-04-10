import { IRole, Role } from "../models/Role.model"
import dotenv from "dotenv"
import mongoose, {Types} from "mongoose"
import ConnectDB from "../config/config";
import { Permission } from "../models/Permission.model";

dotenv.config()




const rolesToSeed : {name : string, permissions : string[] }[] = [
    {
        name : "superAdmin",
        permissions : [
            "project:create",
            "project:update",
            "project:delete",
            "project:pre-approve",
            "project:pre-reject",
            "project:approve",
            "project:delete"
        ]
    },
    {
        name : "stateCoordinator",
        permissions : [
            "project:create",
            "project:update",
            "project:delete",
        ]
    }, 
    {
        name : "projectManager",
        permissions : [
            "project:pre-approve",
            "project:pre-reject",
        ]
    },
    {
        name : "projectOwner",
        permissions : [
            "project:approve",
            "project:delete"
        ]
    },
    {
        name : "financeManager",
        permissions : []
    }
]

const seedRoles = async (roles : {name : string, permissions : string[] }[])  => {
    ConnectDB();
    for (const role  of roles) {
        const existingRole = await Role.findOne({name : role.name}).exec()
        if (existingRole) {
            const permissions_id  : Types.ObjectId[]= []
            for (const permission of role.permissions) {
                const selectedPermission = await Permission.findOne({name : permission})
                permissions_id.push(selectedPermission?._id)
            }
            await existingRole.update({permissions : permissions_id}, {new: true})
            console.log("updated Role:", existingRole)
        }else {
            const newRole : IRole = await Role.create(role)
            console.log("created new Role:", newRole)
        }
        
    }
} 

seedRoles(rolesToSeed)