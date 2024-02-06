import express from "express";
import * as ItemController from "../controller/item.controller"


const router = express.Router();

router.post('/', ItemController.saveItem);
router.get('/', ItemController.getItem);
router.get('/getAll', ItemController.getAllItems);
router.put('/', ItemController.updateItem);
router.delete('/', ItemController.deleteItem);

export default router;
