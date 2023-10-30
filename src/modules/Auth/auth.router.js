import { Router } from "express";
import * as authController from './controller/auth.controller.js'
import { asyncHandler } from "../../services/errorHandling.js";
import validation from "../../middleware/validation.middleware.js";
import { loginSchema, signupSchema } from "./Auth.validation.js";
const router = Router();

router.post('/signup',validation(signupSchema),asyncHandler(authController.signup));
router.post('/login',validation(loginSchema),asyncHandler(authController.login));
router.get('/confirmEmail/:token',asyncHandler(authController.confirmEmail));

export default router;