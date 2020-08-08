import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const userDataSchema = new Schema({
  fullName: {
    type: String,
    required: "enter full name",
  },
  phone: {
    type: String,
    required: "enter last name",
  },
  email: {
    type: String,
  },
  institution: {
    type: String,
    required: "Enter institution name",
  },
  role: {
    type: String,
    required: "Enter institution name",
  },

  address: {
    type: String,
  },
  created_date: {
    type: Date,
    default: Date.now,
  },
});
