"use strict";

var express = require("express");
var pe_Port = process.env.PORT ;

express()
.get("/", (req, res) => {
    
    let response = {"ipadress" : req.connection.remoteAddress};
    
    res.end(JSON.stringify(response));
})
.listen(pe_Port || 8080, () => {
   console.log("whoAmI running on port ", pe_Port) 
});