import mongoose from "mongoose";
import { instituteSchema } from "../models/instituteModel";

const Institute = mongoose.model("Institute", instituteSchema);

export const addNewInstitute = (req, res) => {
  let newInstitute = new Institute(req.body);

  newInstitute.save((err, institute) => {
    if (err) {
      res.send(err);
    }
    res.json(institute);
  });
};

export const getInstitutes = (req, res) => {
  Institute.find({}, (err, institute) => {
    if (err) {
      res.send(err);
    }
    res.json(institute);
  });
};

export const getInstitutesWithID = (req, res) => {
  Institute.findById(req.params.instituteId, (err, institute) => {
    if (err) {
      res.send(err);
    }
    res.json(institute);
  });
};

export const UpdateInstitutes = (req, res) => {
  Institute.findOneAndUpdate(
    { _id: req.params.instituteId },
    req.body,
    { new: true },
    (err, institute) => {
      if (err) {
        res.send(err);
      }
      res.json(institute);
    }
  );
};

export const DeleteInstitutes = (req, res) => {
  Institute.findOneAndUpdate(
    { _id: req.params.instituteId },
    (err, institute) => {
      if (err) {
        res.send(err);
      }
      res.json({ message: "institute succesfully deleted!" });
    }
  );
};
