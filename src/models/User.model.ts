import mongoose , { Types} from "mongoose";

export interface IUser extends mongoose.Document {
    _id : Types.ObjectId;
    firstName : string;
    lastName : string;
    email : string;
    password : string;
    role : Types.ObjectId ;
    state? : string;
    createdAt : Date;
    upDatedAt : Date;
}

const UserSchema = new  mongoose.Schema<IUser>({
    firstName : {
        type : String,
        required : true
    },
    lastName  : {
        type : String,
        required : true
    }, 
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    role : {
        type : mongoose.Schema.Types.ObjectId,
        ref: "Role",
        required : true
    },
    state : {
        type : String
    }
}, {
    timestamps : true
})

type UserModelType = mongoose.Model<IUser>;

export const User = mongoose.model<IUser, UserModelType>('User', UserSchema);

