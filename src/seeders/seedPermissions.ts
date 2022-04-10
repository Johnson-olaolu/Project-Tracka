import ConnectDB from "../config/config"
import { Permission } from "../models/Permission.model"

const permissionsToSeed :{ name: string, description: string  }[] = [
    { 
        name: "project:create", 
        description: "create a project and upload relevent documents" 
    }, 
    {
        name : "project:update",
        description: "update an existing project details"
    }, 
    {
        name : "project:delete",
        description : "delete an existing project"
    },
    {
        name : "project:pre-approve",
        description : "pre-approve a project"
    }, 
    {
        name : "project:pre-reject",
        description : "pre-reject a project"
    },
    {
        name : "project:approve",
        description : "approve project"
    }, 
    {
        name : "project:reject",
        description : "reject project"
    }
]

const seedPermissions  = async (permissions: { name: string, description: string  }[]) => {
    ConnectDB()
    for (const permission of permissions) {
        const existingPermission = await Permission.findOne({ name: permission.name })
        if (existingPermission) {
            existingPermission.update(permission)
        } else {
            const newPermission = await Permission.create(permission)
            console.log("created new Permission", newPermission)
        }
    }
    return;
}

seedPermissions(permissionsToSeed)