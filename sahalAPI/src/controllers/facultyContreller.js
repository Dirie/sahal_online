import mongoose from "mongoose";
import { facultySchema } from "../models/facultyModel";

const Faculty = mongoose.model("Faculty", facultySchema);

export const addNewFaculty = (req, res) => {
  let newFaculty = new Faculty(req.body);

  newFaculty.save((err, faculty) => {
    if (err) {
      res.send(err);
    }
    res.json(faculty);
  });
};

export const getFaculty = (req, res) => {
  Faculty.find({}, (err, faculty) => {
    if (err) {
      res.send(err);
    }
    res.json(faculty);
  });
};

export const getFacultyWithID = (req, res) => {
  Faculty.findById(req.params.facultyId, (err, faculty) => {
    if (err) {
      res.send(err);
    }
    res.json(faculty);
  });
};

export const UpdateFaculty = (req, res) => {
  Faculty.findOneAndUpdate(
    { _id: req.params.facultyId },
    req.body,
    { new: true },
    (err, faculty) => {
      if (err) {
        res.send(err);
      }
      res.json(faculty);
    }
  );
};

export const DeleteFaculty = (req, res) => {
  Faculty.findOneAndDelete({ _id: req.params.facultyId }, (err, faculty) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: "faculty succesfully deleted!" });
  });
};
