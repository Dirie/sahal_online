import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const facultySchema = new Schema({
  fname: {
    type: String,
    required: "enter faculty name",
  },
  institute: {
    type: String,
    required: "enter faculty name",
  },
  dean: {
    type: String,
    required: "enter faculty name",
  },
  phone: {
    type: String,
  },
  email: {
    type: String,
  },
  web: {
    type: String,
  },
});
