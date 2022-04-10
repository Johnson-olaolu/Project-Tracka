import ConnectDB from "../config/config"
import { IRole, Role } from "../models/Role.model"
import { IUser, User } from "../models/User.model"

const superAdminDetails : {firstName : string, lastName : string, email : string, password : string, role : string} = {
    firstName : "super",
    lastName : "admin",
    email : "superadmin@projecttracka.com",
    password : "admin",
    role : "superAdmin",
}

const seedSuperAdmin = async(superAdminDetails :  {firstName : string, lastName : string, email : string, password : string, role : string} ) => {
    ConnectDB()
    const role = await Role.findOne({name : superAdminDetails.role}) 
    const details = {
        ...superAdminDetails,
        role : role?._id
    }
    const superAdmin : IUser  = await User.create(details)
    console.log("Super Admin created", superAdmin)
}

seedSuperAdmin(superAdminDetails)