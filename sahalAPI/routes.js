import crmRoutes from "./src/routes/crmRoutes";
import userRoutes from "./src/routes/userRoutes";
import userDataRoutes from "./src/routes/userDataRoutes";
import instituteRoutes from "./src/routes/instituteRoutes";
import facultyRoutes from "./src/routes/facultyRoutes";
import batchRoutes from "./src/routes/batchRoutes";
import courseRoutes from "./src/routes/courseRoutes";
import lectureRoutes from "./src/routes/lectureRoutes";
import lecturerRoutes from "./src/routes/lecturerRoutes";
import verifyRoutes from "./src/routes/verifyRoutes";

const routes = (app) => {
  crmRoutes(app);
  userRoutes(app);
  userDataRoutes(app);
  instituteRoutes(app);
  facultyRoutes(app);
  batchRoutes(app);
  courseRoutes(app);
  lectureRoutes(app);
  lecturerRoutes(app);
  verifyRoutes(app);
};

export default routes;
