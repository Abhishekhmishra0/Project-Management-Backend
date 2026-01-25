import { Router } from "express";
import { forgotPasswordRequest, getCurrentUser, logoutUser, refreshAccessToken, registerUser, resendEmailVerification, resetForgotPassword, verifyEmail, changeCurrentPassword } from "../controllers/auth.controllers.js";
import { validate } from "../middlewares/validator.middleware.js";
import {userChangeCurrentPasswordValidator, userForgotPasswordValidator, userLoginValidator, userRegisteredValidator} from "../validators/index.js"
import {login} from "../controllers/auth.controllers.js"
import {verifyJWT} from "../middlewares/auth.middleware.js";
const router = Router();

//unsecure route

router.route("/register").post(userRegisteredValidator(),validate, registerUser);

router.route("/login").post(userLoginValidator(),validate,login);
router.route("/verify-email/:verificationToken").get(verifyEmail);
router.route("/refresh-token").post(refreshAccessToken);
router.route("/forgot-password").post(userForgotPasswordValidator, validate, forgotPasswordRequest);
router.route("/reset-password/:resetToken").post(userForgotPasswordValidator, validate, resetForgotPassword);


// secure route
router.route("/logout").post(verifyJWT, logoutUser);
router.route("/current-user").post(verifyJWT, getCurrentUser);
router.route("/change-password").post(verifyJWT, userChangeCurrentPasswordValidator, validate, changeCurrentPassword);
router.route("/resend-email-verification").post(verifyJWT, resendEmailVerification)



export default router;
