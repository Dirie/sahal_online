import {
  addNewUserData,
  getUserData,
  getUserDataWithID,
  UpdateUserData,
  DeleteUserData,
} from "./../controllers/userDataController";
import { LogInRequired } from "../controllers/userController";

const userDataRoutes = (app) => {
  app
    .route("/userData")
    .get(LogInRequired, getUserData)

    // post endpoint
    .post(addNewUserData);

  app
    .route("/userData/:userDataId")
    .get(LogInRequired, getUserDataWithID)
    .put(LogInRequired, UpdateUserData)
    .delete(LogInRequired, DeleteUserData);
};

export default userDataRoutes;
