import {
  addNewCourse,
  getCourses,
  getCoursesWithID,
  UpdateCourses,
  DeleteCourses,
} from "./../controllers/courseController";
import { LogInRequired } from "../controllers/userController";

const crmRoutes = (app) => {
  app
    .route("/course")
    .get(
      (req, res, next) => {
        console.log(`requested from ${req.originalUrl}`);
        console.log(`method used ${req.method}`);
        next();
      },
      LogInRequired,
      getCourses
    )

    // post endpoint
    .post(
      (req, res, next) => {
        console.log(`requested from ${req.originalUrl}`);
        console.log(`method used ${req.method}`);
        next();
      },
      LogInRequired,
      addNewCourse
    );

  app
    .route("/course/:courseId")
    .get(LogInRequired, getCoursesWithID)
    .put(LogInRequired, UpdateCourses)
    .delete(LogInRequired, DeleteCourses);
};

export default crmRoutes;
