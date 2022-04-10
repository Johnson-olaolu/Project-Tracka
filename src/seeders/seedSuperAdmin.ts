import { IUser, User } from "../models/User.model"

const superAdminDetails : {firstName : string, lastName : string, email : string, password : string, role : string} = {
    firstName : "super",
    lastName : "admin",
    email : "superadmin@projecttracka.com",
    password : "admin",
    role : "superAdmin",
}

const seedSuperAdmin = async(superAdminDetails :  {firstName : string, lastName : string, email : string, password : string, role : string} ) => {
    const superAdmin : IUser  = await User.create(superAdminDetails)
    console.log("Super Admin created", superAdmin)
}

seedSuperAdmin(superAdminDetails)