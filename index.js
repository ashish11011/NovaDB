const express = require('express');
const bodyParser = require('body-parser');
const staticRoute = require("./routers/staticRouter");
const historyRoute = require("./routers/history");
const {connectToMongoDB} = require("./connect");
const app = express();
const PORT = 3000;
const DB = "mongodb+srv://macsingh110:vCiXXlCLM56H3h3v@cluster0.sul3vtf.mongodb.net/NovaDataBase?retryWrites=true&w=majority"
connectToMongoDB(DB).then(()=>{console.log("MongoDB connected")}).catch((err)=>{console.log(`ERR: ${err}`)});

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));


app.use("/",staticRoute);
app.use("/history",historyRoute);

app.listen(PORT, () => console.log(`Server is Running on PORT ${PORT}`));