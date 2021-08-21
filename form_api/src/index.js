var express = require("express");
var formvalidator = require("./Form-Validator.js");

var app = express();
app.use("/Form-Validator", formvalidator);

app.listen(8080, function() {
    console.log("App started on port 8080");
});