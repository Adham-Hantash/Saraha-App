import { Router } from "express";
import * as userController from './controller/user.controller.js'
import { auth } from "../../middleware/auth.middleware.js";
import fileUpload, { HME } from "../../services/multer.js";
const router = Router();

router.get('/profile',auth,userController.profile);
router.patch('/profilePic',auth,fileUpload().single('image'),HME,userController.profilePicture)
export default router;