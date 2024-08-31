const express = require("express");
const app = express(); 


app.get("/", function (request, response) {
    response.send();
});

app.listen(3000, function (){
    console.log("Server started on Port 3000");
});