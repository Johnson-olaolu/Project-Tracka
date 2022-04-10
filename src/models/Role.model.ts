import mongoose, { Types } from "mongoose";

export interface IRole   extends mongoose.Document{
    _id : Types.ObjectId;
    name : string;
    permissions : Types.ObjectId[]
}

const RoleSchema  = new mongoose.Schema<IRole>({
    name : {
        type : String,
        required  : true
    },
    permissions : {
        type : [],
        required : true
    }
}, {
    timestamps : true
})

type RoleModelType = mongoose.Model<IRole>;
export const Role = mongoose.model<IRole, RoleModelType> ("Role", RoleSchema)