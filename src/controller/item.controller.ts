import express from "express";
import CustomResponse from "../dtos/custom.response";
import db from "../db";


export const saveItem = async (req: express.Request, res: express.Response) => {
    try {
        db.pool.getConnection((err, connection) => {
            if (err) throw err;
            connection.execute('SELECT `field` FROM `table`');
        });
        ///const [rows, fields] = await pool.query('SELECT * FROM itrm');
    }catch (error){
        console.log(error);
    }
    res.status(200).send(
        new CustomResponse(
            200,
            "Item save successfully!"
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
