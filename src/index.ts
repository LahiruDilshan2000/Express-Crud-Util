import express from "express"
import bodyParser from "body-parser"




const app = express();

app.use(bodyParser.json());

app.listen(8080,  () => {
    console.log("Server start on port 8080");
});
