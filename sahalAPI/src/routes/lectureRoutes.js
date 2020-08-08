import {
  addNewLecture,
  getLectures,
  getLecturesWithID,
  UpdateLectures,
  DeleteLectures,
} from "./../controllers/lectureController";
import { LogInRequired } from "../controllers/userController";

const lectureRoutes = (app) => {
  app
    .route("/lecture")
    .get(
      (req, res, next) => {
        console.log(`requested from ${req.originalUrl}`);
        console.log(`method used ${req.method}`);
        next();
      },
      LogInRequired,
      getLectures
    )

    // post endpoint
    .post(
      (req, res, next) => {
        console.log(`requested from ${req.originalUrl}`);
        console.log(`method used ${req.method}`);
        next();
      },
      LogInRequired,
      addNewLecture
    );

  app
    .route("/lecture/:lectureId")
    .get(LogInRequired, getLecturesWithID)
    .put(LogInRequired, UpdateLectures)
    .delete(LogInRequired, DeleteLectures);
};

export default lectureRoutes;
