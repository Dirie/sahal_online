import mongoose from "mongoose";
import { userDataSchema } from "../models/userDataModels";

const UserData = mongoose.model("UserData", userDataSchema);

export const addNewUserData = (req, res) => {
  let newUserData = new UserData(req.body);

  newUserData.save((err, userData) => {
    if (err) {
      res.send(err);
    }
    res.json(userData);
  });
};

export const getUserData = (req, res) => {
  UserData.find({}, (err, userData) => {
    if (err) {
      res.send(err);
    }
    res.json(userData);
  });
};

export const getUserDataWithID = (req, res) => {
  UserData.findById(req.params.userDataId, (err, userData) => {
    if (err) {
      res.send(err);
    }
    res.json(userData);
  });
};

export const UpdateUserData = (req, res) => {
  UserData.findOneAndUpdate(
    { _id: req.params.userDataId },
    req.body,
    { new: true },
    (err, userData) => {
      if (err) {
        res.send(err);
      }
      res.json(userData);
    }
  );
};

export const DeleteUserData = (req, res) => {
  console.log(req.params.userDataId);
  UserData.findOneAndDelete({ _id: req.params.userDataId }, (err, userData) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: "userData succesfully deleted!" });
  });
  /* UserData.remove({ _id: req.params.userDataId }, (err, userData) => {
     if (err) {
       res.send(err);
     }
     res.json({ message: "userData succesfully deleted!" });
   });
  */
};
