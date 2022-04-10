import mongoose , {Types} from "mongoose";

export interface IProject extends mongoose.Document {
    name : string;
    description : string;
    status : string;
    reciepts : [];
    images : [];
    type :  Types.ObjectId;
    category : string;
    comments : [];
    createdAt : Date;
    updatedAt : Date;
}

const ProjectSchema = new mongoose.Schema<IProject>({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["PENDING", "PRE-REJECTED", "PRE-APPROVED", "REJECTED", "APPROVED", "STARTED", "COMPLETED"],
        required: true
    },
    reciepts: {
        type: [
            {
                name: {type : String},
                url: {type : String}
            }
        ]
    }, 
    images : {
        type: [
            {
                name: {type : String},
                url: {type : String}
            }
        ]
    }, 
    type : {
        type : mongoose.Schema.Types.ObjectId,
        required : true
    },
    category : {
        type : String,
        required : true
    }, 
    comments : {
        type : [
            {
                user : { type :mongoose.Schema.Types.ObjectId} ,
                comment : {type : String}
            }
        ]
    }
}, {
    timestamps : true
})

type ProjectModelType = mongoose.Model<IProject>
export const Permission = mongoose.model<IProject, ProjectModelType>("Permision", ProjectSchema)