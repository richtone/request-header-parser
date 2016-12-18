"use strict";

var express = require("express");
var useragent = require("useragent.js");

var pe_Port = process.env.PORT || 8080;

express()
.set('port', pe_Port)
.get("/", (req, res) => {
    
    let ua = useragent.analyze(JSON.stringify(req.header("user-agent")));
    
    let response = {"ipaddress" :   req.header('x-forwarded-for'),
                    "language"  :   req.acceptsLanguages()[0],
                    "software"  :   ua.os.full
    };
    
    res.header("Content-Type", "application/json; charset=utf-8");
    res.end(JSON.stringify(response));
})
.listen(pe_Port, () => {
   console.log("whoAmI running on port ", pe_Port)
});