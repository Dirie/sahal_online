import {
  addNewFaculty,
  getFaculty,
  getFacultyWithID,
  UpdateFaculty,
  DeleteFaculty,
} from "./../controllers/facultyContreller";
import { LogInRequired } from "../controllers/userController";

const facultyRoutes = (app) => {
  app
    .route("/faculty")
    .get(
      (req, res, next) => {
        console.log(`requested from ${req.originalUrl}`);
        console.log(`method used ${req.method}`);
        next();
      },
      LogInRequired,
      getFaculty
    )

    // post endpoint
    .post(
      (req, res, next) => {
        console.log(`requested from ${req.originalUrl}`);
        console.log(`method used ${req.method}`);
        next();
      },
      LogInRequired,
      addNewFaculty
    );

  app
    .route("/faculty/:facultyId")
    .get(LogInRequired, getFacultyWithID)
    .put(LogInRequired, UpdateFaculty)
    .delete(LogInRequired, DeleteFaculty);
};

export default facultyRoutes;
