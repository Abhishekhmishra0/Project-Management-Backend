import {body} from "express-validator";

const userRegisteredValidator = () => {
    return [
        body("email")
        .trim()
        .notEmpty()
        .withMessage("Email is required")
        .isEmail()
        .withMessage("Email is Invalid"),
        body("username")
        .trim()
        .notEmpty()
        .withMessage("Username is required")
        .isLowercase()
        .withMessage("username must be in lowercase")
        .isLength({min: 3})
        .withMessage("Username must be of atleast 3 characters long"),
        body("password")
        .trim()
        .notEmpty()
        .withMessage("Password is required"),
        body("fullName")
        .optional()
        .trim()
        
        
    ]
};

const userLoginValidator = () => {
    return [
        body("email")
        .optional()
        .isEmail()
        .withMessage("Email is invalid"),
        body("password")
        .notEmpty()
        .withMessage("Password is Required")
    ];
}

const userChangeCurrentPasswordValidator = () =>{
    return [
        body("oldPassword").notEmpty().withMessage("Old Password is required"),
        body("newPassword").notEmpty().withMessage("New Password is required"),
    ];
}

const userForgotPasswordValidator = () => {
    return [
        body("email")
        .notEmpty()
        .withMessage('Email is required')
        .isEmail()
        .withMessage("Email is invalid")
    ];
};

const userResetForgotPasswordValidator = ()=>{
    return [
        body("newPassword")
        .notEmpty()
        .withMessage("Password is required")
    ];
};


export {userRegisteredValidator, userLoginValidator, userChangeCurrentPasswordValidator, userForgotPasswordValidator, userResetForgotPasswordValidator}