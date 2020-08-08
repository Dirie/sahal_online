import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const instituteSchema = new Schema(
    {
        name: {
            type: String,
            required: "enter faculty name",
        },
        phone: {
            type: String,
            required: "enter faculty name",
        },
        manager: {
            type: String,
            required: "",
        },
        address: {
            type: String,
            
        },
        email: {
            type: String,
                   },
        web: {
            type: String,
            
        },
        
    }
);
