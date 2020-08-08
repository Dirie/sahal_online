import mongoose from "mongoose";
import { batchCourseSchema } from "../models/batchCourseModel";

const BatchCourse = mongoose.model("BatchCourse", batchCourseSchema);

export const addNewBatchCourse = (req, res) => {
  let newBatchCourse = new BatchCourse(req.body);

  newBatchCourse.save((err, batchCourse) => {
    if (err) {
      res.send(err);
    }
    res.json(batchCourse);
  });
};

export const getBatchCourses = (req, res) => {
  BatchCourse.find({}, (err, batchCourse) => {
    if (err) {
      res.send(err);
    }
    res.json(batchCourse);
  });
};

export const getBatchCoursesWithID = (req, res) => {
  BatchCourse.findById(req.params.batchCourseId, (err, batchCourse) => {
    if (err) {
      res.send(err);
    }
    res.json(batchCourse);
  });
};

export const UpdateBatchCourses = (req, res) => {
  BatchCourse.findOneAndUpdate(
    { _id: req.params.batchCourseId },
    req.body,
    { new: true },
    (err, batchCourse) => {
      if (err) {
        res.send(err);
      }
      res.json(batchCourse);
    }
  );
};

export const DeleteBatchCourses = (req, res) => {
  BatchCourse.remove({ _id: req.params.batchCourseId }, (err, batchCourse) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: "batchCourse succesfully deleted!" });
  });
};
