import express from "express";
import * as ItemController from "../controller/item.controller"


const router = express.Router();

router.post('/', ItemController.saveItem);

export default router;
