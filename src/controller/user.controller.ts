import express from "express";
import CustomResponse from "../dtos/custom.response";
import User from "../model/User";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";
import process from "process";


export const saveUser = async (req: express.Request, res: express.Response) => {
    try {

        let req_body = req.body;

        bcrypt.hash(req_body.password, 8, async (err, hash) => {
            if (err)
                throw err;

            req_body.password = hash

            await User.create(req_body)
                .catch(reason => {
                    res.status(500).send(
                        new CustomResponse(
                            100,
                            reason.parent.sqlMessage as string
                        )
                    );
                })
                .then((value:any) => {
                    value.password = "";
                    res.status(201).send(
                        new CustomResponse(
                            201,
                            "Users save successfully",
                            value
                        )
                    );
                })
        });
    } catch (err) {
        res.status(500).send("Something went wrong !");
    }
}

export const getUser = async (req: express.Request, res: express.Response) => {

    try {

        const user:any = await User.findByPk(req.params.id);

        if (user) {

            user.password = "";

            res.status(200).send(
                new CustomResponse(
                    200,
                    "Users getting successfully",
                    user
                )
            );
        } else {
            res.status(404).send(
                new CustomResponse(
                    404,
                    "Users not found !",
                )
            );
        }


    } catch (err) {
        res.status(500).send("Something went wrong !");
    }
}

export const authUser = async (req: express.Request, res: express.Response) => {

    try {

        // email, password
        let request_body = req.body;


        const user: any = await User.findOne({
            where: {
                email: request_body.email
            }
        });
        if (user) {

            const isMatch = await bcrypt.compare(request_body.password, user.password);

            if (isMatch) {

                user.password = "";
                const expiresIn = "1w"

                //token generate
                jwt.sign( {user}, process.env.SECRET as string, {expiresIn}, (err:any, token:any) => {
                    if (err){
                        res.status(100).send(
                            new CustomResponse(100, "Something went wrong")
                        );
                    }else {

                        let res_body = {
                            user: user,
                            accessToken: token
                        }
                        res.status(200).send(
                            new CustomResponse(200, "Access", res_body)
                        );
                    }
                });
            }else {
                res.status(403).send(
                    new CustomResponse(
                        403,
                        "Invalid credential !"
                    )
                );
            }
        } else {
            res.status(404).send(
                new CustomResponse(
                    404,
                    "Users not found !"
                )
            );
        }
    } catch (err) {
        res.status(500).send("Something went wrong !");
    }
}
