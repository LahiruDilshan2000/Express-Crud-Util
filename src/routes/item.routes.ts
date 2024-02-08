import express from "express";
import * as ItemController from "../controller/item.controller"
import * as MiddleWare from "../middlewares/index"


const router = express.Router();

router.post('/', MiddleWare.verifyToken, ItemController.saveItem);
router.get('/getById/:id', MiddleWare.verifyToken, ItemController.getItemById);
router.get('/getByItemCode/:itemCode', MiddleWare.verifyToken, ItemController.getItemByItemCode);
router.get('/getAll', MiddleWare.verifyToken, ItemController.getAllItems);
router.put('/', MiddleWare.verifyToken, ItemController.updateItem);
router.delete('/:id', MiddleWare.verifyToken, ItemController.deleteItem);

export default router;
