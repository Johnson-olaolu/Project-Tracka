import mongoose from "mongoose";

export interface IProjectType extends mongoose.Document {
    name : string;
    categories : []
}

const ProjectTypeSchema = new mongoose.Schema<IProjectType>({
    name : {
        type : String, 
        required : true
    },
    categories : {
        type : [{
            name : {type : String},
            description : {type : String}
        }]
    }
},
{
    timestamps : true
}
)

type ProjectTypeModelType = mongoose.Model<IProjectType>

export const ProjectType = mongoose.model<IProjectType, ProjectTypeModelType>("ProjectType", ProjectTypeSchema)
