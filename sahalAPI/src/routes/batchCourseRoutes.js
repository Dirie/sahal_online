import {
  addNewBatchCourse,
  getBatchCourses,
  getBatchCoursesWithID,
  UpdateBatchCourses,
  DeleteBatchCourses,
} from "./../controllers/batchCourseController";
import { LogInRequired } from "../controllers/userController";

const batchCourseRoutes = (app) => {
  app
    .route("/batchCourse")
    .get(
      (req, res, next) => {
        console.log(`requested from ${req.originalUrl}`);
        console.log(`method used ${req.method}`);
        next();
      },
      LogInRequired,
      getBatchCourses
    )

    // post endpoint
    .post(
      (req, res, next) => {
        console.log(`requested from ${req.originalUrl}`);
        console.log(`method used ${req.method}`);
        next();
      },
      LogInRequired,
      addNewBatchCourse
    );

  app
    .route("/batchCourse/:batchCourseId")
    .get(LogInRequired, getBatchCoursesWithID)
    .put(LogInRequired, UpdateBatchCourses)
    .delete(LogInRequired, DeleteBatchCourses);
};

export default batchCourseRoutes;
