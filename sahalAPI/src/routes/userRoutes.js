import { register, lgoIn } from "../controllers/userController";

const userRoutes = (app) => {
  app.route("/auth/register").post(register);

  app.route("/auth/login").post(lgoIn);
};

export default userRoutes;
