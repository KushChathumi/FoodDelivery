const express = require("express");
const mongoose  = require("mongoose");
const authentication = require("./middleware/Authentication");
const foods = require("./router/foods");
const home = require("./router/home");
const outlet = require("./router/outlets");
const app = express();
const PORT = 5000;

app.use(express.json());

//create connection
mongoose
    .connect("mongodb://localhost/TasteBudsdb")
    .then(() => console.log("connected to db successfully ...!"))
    .catch(err => 
        console.log("errors has occred while connecting to DB : ",err)
    );

//Middleware
app.use(authentication)
app.use("/api/foods", foods);
app.use("/", home);
app.use("/api/outlet", outlet);



app.listen(PORT, () => {
    console.log("Strated listening on port " + PORT);
});

