import * as UserController from "../controller/user.controller"
import express from "express"


const router = express.Router();

router.post('/', UserController.saveUser);
router.get('/', UserController.getUser);
router.post('/auth', UserController.authUser)

export default router;
