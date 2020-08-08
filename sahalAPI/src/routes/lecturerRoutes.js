import {
  addNewLecturer,
  getLecturers,
  getLecturersWithID,
  UpdateLecturers,
  DeleteLecturers,
} from "./../controllers/lecturersController";
import { LogInRequired } from "../controllers/userController";

const lecturerRoutes = (app) => {
  app
    .route("/lecturer")
    .get(
      (req, res, next) => {
        console.log(`requested from ${req.originalUrl}`);
        console.log(`method used ${req.method}`);
        next();
      },
      LogInRequired,
      getLecturers
    )

    // post endpoint
    .post(
      (req, res, next) => {
        console.log(`requested from ${req.originalUrl}`);
        console.log(`method used ${req.method}`);
        next();
      },
      LogInRequired,
      addNewLecturer
    );

  app
    .route("/lecturer/:lecturerId")
    .get(LogInRequired, getLecturersWithID)
    .put(LogInRequired, UpdateLecturers)
    .delete(LogInRequired, DeleteLecturers);
};

export default lecturerRoutes;
