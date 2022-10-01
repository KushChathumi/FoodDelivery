const express = require("express");
const mongoose  = require("mongoose");
const cors = require("cors")
const authentication = require("./middleware/Authentication");
const dotenv = require('dotenv').config()
const foods = require("./router/foods");
const home = require("./router/home");
const outlet = require("./router/outlets");
const user = require("./router/users");
const signin = require("./router/signin");
const order = require("./router/orders");
const app = express();
const PORT = 5000;

app.use(express.json());

//create connection
mongoose
    .connect("mongodb://localhost/TasteBudsdb" , { 
        useNewUrlParser: true ,
        useUnifiedTopology: true
    })
    .then(() => console.log("connected to db successfully ...!"))
    .catch(err => 
        console.log("errors has occred while connecting to DB : ",err)
    );

//Middleware
app.use(authentication)
app.use(cors());
 
app.use("/", home);
app.use("/api/outlets", outlet);
app.use("/api/foods", foods);
app.use("/api/users", user);
app.use("/api/login", signin);
app.use("/api/orders", order);


app.listen(PORT, () => {
    console.log("Strated listening on port " + PORT);
});

