import { Router } from "express";
import * as authController from './controller/auth.controller.js'
import { asyncHandler } from "../../services/errorHandling.js";
const router = Router();

router.post('/signup',asyncHandler(authController.signup));
router.post('/login',asyncHandler(authController.login));

export default router;