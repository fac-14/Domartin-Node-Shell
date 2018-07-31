#!/usr/bin/env node

const fs = require("fs");
const fileToWriteTo = process.argv[process.argv.indexOf(">") + 1]

// Creating a writable stream
var writeStream = fs.createWriteStream(fileToWriteTo);

var file = process.cwd() + "/" + process.argv[2];
var readStream = fs.createReadStream(file)
var fileContent = ""

readStream.on("data", chunk => fileContent += chunk)

readStream.on("end", function(){
    writeStream.write(fileContent, "UTF8")
    writeStream.end();
    writeStream.on("finish", () => console.log("write has been wrotted"))

});


var data = "Simply the fattest arrows";

