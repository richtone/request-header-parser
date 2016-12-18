"use strict";

var express = require("express");
var useragent = require("useragent.js");

var port = process.env.PORT || 8080;

express()
.get("/", (req, res) => {
    
    let ua = useragent.analyze(JSON.stringify(req.header("user-agent")));
    
    let response = {"ipaddress" :   req.header('x-forwarded-for'),
                    "language"  :   req.acceptsLanguages()[0],
                    "software"  :   ua.os.full
    };
    
    res.header("Content-Type", "application/json; charset=utf-8");
    res.end(JSON.stringify(response));
})
.listen(port, () => {
   console.log("whoAmI running on port ", port)
});