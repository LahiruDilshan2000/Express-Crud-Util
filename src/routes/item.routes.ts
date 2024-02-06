import express from "express";
import * as ItemController from "../controller/item.controller"
import * as MiddleWare from "../middlewares/index"


const router = express.Router();

router.post('/', MiddleWare.verifyToken, ItemController.saveItem);
router.get('/', MiddleWare.verifyToken, ItemController.getItem);
router.get('/getAll', MiddleWare.verifyToken, ItemController.getAllItems);
router.put('/', MiddleWare.verifyToken, ItemController.updateItem);
router.delete('/', MiddleWare.verifyToken, ItemController.deleteItem);

export default router;
