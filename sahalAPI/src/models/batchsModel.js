import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const batchSchema = new Schema({
  fname: {
    type: String,
    required: "enter faculty name",
  },
  batchCode: {
    type: String,
    required: "enter code",
  },
  kaape: {
    type: String,
  },
});
