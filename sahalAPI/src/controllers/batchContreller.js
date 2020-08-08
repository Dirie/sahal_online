import mongoose from "mongoose";
import { batchSchema } from "../models/batchsModel";

const Batch = mongoose.model("Batch", batchSchema);

export const addNewBatch = (req, res) => {
  let newBatch = new Batch(req.body);

  newBatch.save((err, batch) => {
    if (err) {
      res.send(err);
    }
    res.json(batch);
  });
};

export const getBatchs = (req, res) => {
  Batch.find({}, (err, batch) => {
    if (err) {
      res.send(err);
    }
    res.json(batch);
  });
};

export const getBatchsWithID = (req, res) => {
  Batch.findById(req.params.batchId, (err, batch) => {
    if (err) {
      res.send(err);
    }
    res.json(batch);
  });
};

export const UpdateBatchs = (req, res) => {
  Batch.findOneAndUpdate(
    { _id: req.params.batchId },
    req.body,
    { new: true },
    (err, batch) => {
      if (err) {
        res.send(err);
      }
      res.json(batch);
    }
  );
};

export const DeleteBatchs = (req, res) => {
  Batch.remove({ _id: req.params.batchId }, (err, batch) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: "batch succesfully deleted!" });
  });
};
