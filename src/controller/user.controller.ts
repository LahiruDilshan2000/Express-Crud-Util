import express from "express";
import CustomResponse from "../dtos/custom.response";
import User from "../model/User";


export const saveUser =async (req:express.Request, res:express.Response) => {

    let req_body = req.body;
    console.log(req_body)
    try {
        User.create(req_body)
    }catch (err){
        console.log(err)
    }

    res.status(200).send(
        new CustomResponse(
            200,
            "Users save successfully"
        )
    );
}

export const getUser =async (req:express.Request, res:express.Response) => {
    res.status(200).send(
        new CustomResponse(
            200,
            "Users getting successfully"
        )
    );
}

export const authUser =async (req:express.Request, res:express.Response) => {
    res.status(200).send(
        new CustomResponse(
            200,
            "Users auth successfully"
        )
    );
}
