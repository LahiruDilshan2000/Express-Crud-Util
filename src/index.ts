import express from "express"
import bodyParser from "body-parser"
import UserRoutes from "./routes/user.routes";
import ItemRoutes from "./routes/item.routes";
import dotenv from "dotenv";
import db from "./db";
import process from "process";

const app = express();
dotenv.config();

app.use(bodyParser.json());

db.pool.getConnection(err => {
    if (err){
        console.log(err)
        return
    }
    console.log("Database successfully connected !")
});

app.use('/user', UserRoutes);
app.use('/item', ItemRoutes);

app.listen(8080,  () => {
    console.log("Server start on port 8080");
});
