import {
  addNewBatch,
  getBatchs,
  getBatchsWithID,
  UpdateBatchs,
  DeleteBatchs,
} from "./../controllers/batchContreller";
import { LogInRequired } from "../controllers/userController";

const crmRoutes = (app) => {
  app
    .route("/batch")
    .get(
      (req, res, next) => {
        console.log(`requested from ${req.originalUrl}`);
        console.log(`method used ${req.method}`);
        next();
      },
      LogInRequired,
      getBatchs
    )

    // post endpoint
    .post(
      (req, res, next) => {
        console.log(`requested from ${req.originalUrl}`);
        console.log(`method used ${req.method}`);
        next();
      },
      LogInRequired,
      addNewBatch
    );

  app
    .route("/batch/:batchId")
    .get(LogInRequired, getBatchsWithID)
    .put(LogInRequired, UpdateBatchs)
    .delete(LogInRequired, DeleteBatchs);
};

export default crmRoutes;
