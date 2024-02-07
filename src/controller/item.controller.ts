import express from "express";
import CustomResponse from "../dtos/custom.response";
import Item from "../model/Item";
import User from "../model/User";


export const saveItem = async (req: express.Request, res: express.Response) => {

    try {

        let req_body = req.body;

        await Item.create(req_body)
            .then(value => {
                res.status(201).send(
                    new CustomResponse(
                        201,
                        "Item save successfully!",
                        value
                    )
                );
            })
            .catch(reason => {
                res.status(500).send(
                    new CustomResponse(
                        100,
                        reason.parent.sqlMessage as string
                    )
                );
            })

    }catch (error){
        res.status(500).send("Something went wrong !");
    }
}

export const getItemById = async (req: express.Request, res: express.Response) => {

    try {

        const item:any = await Item.findByPk(req.params.id);

        if (item){
            res.status(200).send(
                new CustomResponse(
                    200,
                    "Item getting successfully",
                    item
                )
            );
        }else {
            res.status(404).send(
                new CustomResponse(
                    404,
                    "Item not found !",
                )
            );
        }

    }catch (err){
        res.status(500).send("Something went wrong !");
    }
}
export const getItemByItemCode = async (req: express.Request, res: express.Response) => {

    try {

        const item:any = await Item.findOne({
            where:{
                itemCode:req.params.itemCode
            }
        });

        if (item){
            res.status(200).send(
                new CustomResponse(
                    200,
                    "Item getting successfully",
                    item
                )
            );
        }else {
            res.status(404).send(
                new CustomResponse(
                    404,
                    "Item not found !",
                )
            );
        }
    }catch (err){
        res.status(500).send("Something went wrong !");
    }
}

export const getAllItems = async (req: express.Request, res: express.Response) => {

    try {

        const items = await User.findAll();

        if (items.length > 0){
            res.status(200).send(
                new CustomResponse(
                    200,
                    "Access",
                    items
                )
            );
        }else {
            res.status(200).send(
                new CustomResponse(
                    200,
                    "Items is empty !",
                )
            );
        }

    }catch (err){
        res.status(500).send("Something went wrong !");
    }
}

export const updateItem = async (req: express.Request, res: express.Response) => {

    try {

        let req_body = req.body;

        const [updatedRowsCount] = await User.update(req_body, {
            where:{
                id: req_body.id
            }
        });
        if (updatedRowsCount === 0){
            res.status(404).send(
                new CustomResponse(
                    404,
                    "Item not found !"
                )
            );
        }else {
            const item = await Item.findByPk(req_body.id);
            res.status(200).send(
                new CustomResponse(
                    200,
                    "Item update successfully",
                    item
                )
            );
        }
    }catch (err){
        res.status(500).send("Something went wrong !");
    }
}

export const deleteItem = async (req: express.Request, res: express.Response) => {

    try {

        const deletedRowsCount = await Item.destroy({
            where:{
                id:req.params.id
            }
        });
        if (deletedRowsCount === 0){
            res.status(404).send(
                new CustomResponse(
                    404,
                    "Item not found !"
                )
            );
        }else {
            res.status(200).send(
                new CustomResponse(
                    200,
                    "Item delete successfully"
                )
            );
        }
    }catch (err){
        res.status(500).send("Something went wrong !");
    }
}
