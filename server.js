var express = require("express");
var mongoose = require("mongoose");
var handlebars = require("express-handlebars");

var PORT = process.env.PORT || 3000;

var app = express();

var router = express.Router();

require("./config/routes")(router);

app.use(express.static(__dirname + "/public"));

app.engine("handlebars", handlebars({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

app.use(router);

var db = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.connect(db, function(error){

    if(error) {
        console.log(error);
    }
    else{
        console.log("Mongoose connection successful!");
    }

});


app.listen(PORT, function(){
    console.log("Listening on port: " + PORT)
});
