import mongoose, { Model } from "mongoose";

export interface Phase {
    level: string;
    name: string;
    courses: string;
    perce_completed: string;
    completed: string;

}

const phaseSchema = new mongoose.Schema<Phase>(
    {
        level: { type: String },
        name: { type: String },
        courses: { type: String, lowercase: true },
        perce_completed: { type: String, select: false },
        completed: { type: String },
    },
    { versionKey: false, timestamps: true }
);

export const phaseModel: Model<Phase> = mongoose.models?.Phase || mongoose.model("Phase", phaseSchema);
