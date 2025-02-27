import express from "express";
import validator from "../utils/validator.utils";
import userSchema from "../validation/user.validation";

import { registerUser } from "../controllers/user.controller";

const userRouter = express.Router();

userRouter.post("/identify", validator(userSchema.registerUser), registerUser);

export default userRouter;
