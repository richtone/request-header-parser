"use strict";

var express = require("express");
var pe_Port = process.env.PORT || 8080;

express()
.set('port', pe_Port)
.get("/", (req, res) => {
    
    let response = {"ipadress" : req.connection.remoteAddress};
    
    res.header("Content-Type", "application/json; charset=utf-8");
    res.end(JSON.stringify(response));
})
.listen(pe_Port, () => {
   console.log("whoAmI running on port ", pe_Port) 
});