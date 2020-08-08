import {
  addNewInstitute,
  getInstitutes,
  getInstitutesWithID,
  UpdateInstitutes,
  DeleteInstitutes,
} from "./../controllers/instituteController";
import { LogInRequired } from "../controllers/userController";

const instituteRoutes = (app) => {
  app
    .route("/institute")
    .get(LogInRequired, getInstitutes)

    // post endpoint
    .post(addNewInstitute);

  app
    .route("/institute/:instituteId")
    .get(LogInRequired, getInstitutesWithID)
    .put(LogInRequired, UpdateInstitutes)
    .delete(LogInRequired, DeleteInstitutes);
};

export default instituteRoutes;
