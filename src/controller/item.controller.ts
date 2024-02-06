import express from "express";
import CustomResponse from "../dtos/custom.response";


export const saveItem = async (req: express.Request, res: express.Response) => {
    res.status(200).send(
        new CustomResponse(
            200,
            "Item save successfully"
        )
    );
}

export const getItem = async (req: express.Request, res: express.Response) => {
    res.status(200).send(
        new CustomResponse(
            200,
            "Item get successfully"
        )
    );
}

export const getAllItems = async (req: express.Request, res: express.Response) => {
    res.status(200).send(
        new CustomResponse(
            200,
            "Items getting successfully"
        )
    );
}

export const updateItem = async (req: express.Request, res: express.Response) => {
    res.status(200).send(
        new CustomResponse(
            200,
            "Item update successfully"
        )
    );
}

export const deleteItem = async (req: express.Request, res: express.Response) => {
    res.status(200).send(
        new CustomResponse(
            200,
            "Item delete successfully"
        )
    );
}
