import mongoose from "mongoose";
import { courseSchema } from "../models/courseModel";

const Course = mongoose.model("Course", courseSchema);

export const addNewCourse = (req, res) => {
  let newCourse = new Course(req.body);

  newCourse.save((err, course) => {
    if (err) {
      res.send(err);
    }
    res.json(course);
  });
};

export const getCourses = (req, res) => {
  Course.find({}, (err, course) => {
    if (err) {
      res.send(err);
    }
    res.json(course);
  });
};

export const getCoursesWithID = (req, res) => {
  Course.findById(req.params.courseId, (err, course) => {
    if (err) {
      res.send(err);
    }
    res.json(course);
  });
};

export const UpdateCourses = (req, res) => {
  Course.findOneAndUpdate(
    { _id: req.params.courseId },
    req.body,
    { new: true },
    (err, course) => {
      if (err) {
        res.send(err);
      }
      res.json(course);
    }
  );
};

export const DeleteCourses = (req, res) => {
  Course.remove({ _id: req.params.courseId }, (err, course) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: "course succesfully deleted!" });
  });
};
