import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const lectureSchema = new Schema({
  fname: {
    type: String,
    required: "enter faculty name",
  },
  batchCode: {
    type: String,
    required: "enter batch code",
  },
  course: {
    type: String,
    required: "enter course",
  },
  lecturer: {
    type: String,
    required: "enter lecturer",
  },
  student: {
    type: String,
    required: "enter student",
  },
});
