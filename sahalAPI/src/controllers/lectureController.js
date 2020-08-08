import mongoose from "mongoose";
import { lectureSchema } from "../models/lectureModel";

const Lecture = mongoose.model("Lecture", lectureSchema);

export const addNewLecture = (req, res) => {
  let newLecture = new Lecture(req.body);

  newLecture.save((err, lecture) => {
    if (err) {
      res.send(err);
    }
    res.json(lecture);
  });
};

export const getLectures = (req, res) => {
  Lecture.find({}, (err, lecture) => {
    if (err) {
      res.send(err);
    }
    res.json(lecture);
  });
};

export const getLecturesWithID = (req, res) => {
  Lecture.findById(req.params.lectureId, (err, lecture) => {
    if (err) {
      res.send(err);
    }
    res.json(lecture);
  });
};

export const UpdateLectures = (req, res) => {
  Lecture.findOneAndUpdate(
    { _id: req.params.lectureId },
    req.body,
    { new: true },
    (err, lecture) => {
      if (err) {
        res.send(err);
      }
      res.json(lecture);
    }
  );
};

export const DeleteLectures = (req, res) => {
  Lecture.remove({ _id: req.params.lectureId }, (err, lecture) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: "lecture succesfully deleted!" });
  });
};
