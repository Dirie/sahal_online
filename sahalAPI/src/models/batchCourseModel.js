import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const batchCourseSchema = new Schema({
  batchCode: {
    type: String,
    required: "enter faculty name",
  },
  fname: {
    type: String,
    required: "enter faculty name",
  },
  course: {
    type: String,
    required: "enter faculty name",
  },
  lecture: {
    type: String,
  },
});
