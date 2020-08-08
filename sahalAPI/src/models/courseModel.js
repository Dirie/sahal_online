import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const courseSchema = new Schema({
  fname: {
    type: String,
    required: "enter faculty name",
  },
  courseCode: {
    type: String,
    required: "enter course code",
  },
  courseName: {
    type: String,
  },
  email: {
    type: String,
  },
  web: {
    type: String,
  },
});
