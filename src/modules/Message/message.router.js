import { Router } from "express";
import * as messageController from '../Message/controller/message.controller.js';
import { asyncHandler } from "../../services/errorHandling.js";
import { auth } from "../../middleware/auth.middleware.js";
const router = Router();

router.post('/:receiverId', asyncHandler(messageController.sendMessage))
router.get('/',auth, asyncHandler(messageController.getMessage))
router.delete('/:messageId',auth, asyncHandler(messageController.deleteMessage))

export default router;