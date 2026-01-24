import { Router } from "express";
import { registerUser } from "../controllers/auth.controllers.js";
import { validate } from "../middlewares/validator.middleware.js";
import {userLoginValidator, userRegisteredValidator} from "../validators/index.js"
import {login} from "../controllers/auth.controllers.js"

const router = Router();

router.route("/register").post(userRegisteredValidator(),validate, registerUser);

router.route("/login").post(userLoginValidator(),validate,login);


export default router;
