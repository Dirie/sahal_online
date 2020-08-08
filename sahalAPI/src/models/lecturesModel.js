import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const lecturesSchema = new Schema({
  fullName: {
    type: String,
    required: "enter faculty name",
  },
  phone: {
    type: String,
    required: "enter faculty name",
  },
  email: {
    type: String,
    required: "enter faculty name",
  },
  web: {
    type: String,
  },
  links: {
    type: String,
  },
});
