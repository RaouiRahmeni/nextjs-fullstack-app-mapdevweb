import mongoose, { Model } from "mongoose";

export interface Course {
    name: string;
    exercises: string;
    perce_completed: string;
    completed: string;

}

const courseSchema = new mongoose.Schema<Course>(
    {
        name: { type: String },
        exercises: { type: String },
        perce_completed: { type: String },
        completed: { type: String },
    },
    { versionKey: false, timestamps: true }
);

export const courseModel: Model<Course> = mongoose.models?.Course || mongoose.model("Course", courseSchema);
