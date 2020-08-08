import mongoose from "mongoose";
import { lecturesSchema } from "../models/lecturesModel";

const Lecturer = mongoose.model("Lecturer", lecturesSchema);

export const addNewLecturer = (req, res) => {
  let newLecturer = new Lecturer(req.body);

  newLecturer.save((err, lecturer) => {
    if (err) {
      res.send(err);
    }
    res.json(lecturer);
  });
};

export const getLecturers = (req, res) => {
  Lecturer.find({}, (err, lecturer) => {
    if (err) {
      res.send(err);
    }
    res.json(lecturer);
  });
};

export const getLecturersWithID = (req, res) => {
  Lecturer.findById(req.params.lecturerId, (err, lecturer) => {
    if (err) {
      res.send(err);
    }
    res.json(lecturer);
  });
};

export const UpdateLecturers = (req, res) => {
  Lecturer.findOneAndUpdate(
    { _id: req.params.lecturerId },
    req.body,
    { new: true },
    (err, lecturer) => {
      if (err) {
        res.send(err);
      }
      res.json(lecturer);
    }
  );
};

export const DeleteLecturers = (req, res) => {
  Lecturer.findOneAndDelete({ _id: req.params.lecturerId }, (err, lecturer) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: "lecturer succesfully deleted!" });
  });
};
