import mongoose, {Types} from "mongoose";

export interface IPermission extends mongoose.Document {
    id : Types.ObjectId;
    name : string;
    description : string;
    createdAt : Date;
    updatedAt : Date;
} 


const PermissionSchema = new mongoose.Schema<IPermission>({
    name : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    }
}, {
    timestamps : true
})

type PermissionModelType = mongoose.Model<IPermission> 
export const Permission= mongoose.model<IPermission, PermissionModelType>("Permission", PermissionSchema)


