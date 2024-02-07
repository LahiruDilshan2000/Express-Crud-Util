import express from "express"
import bodyParser from "body-parser"
import UserRoutes from "./routes/user.routes";
import ItemRoutes from "./routes/item.routes";


const app = express();

app.use(bodyParser.json());

app.use('/user', UserRoutes);
app.use('/item', ItemRoutes);

app.listen(8080,  () => {
    console.log("Server start on port 8080");
});
