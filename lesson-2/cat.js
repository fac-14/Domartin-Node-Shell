#!/usr/bin/env node

const fs = require("fs");

var file = process.cwd() + "/" + process.argv[2];
var readStream = fs.createReadStream(file)
var fileContent = ""

readStream.on("data", chunk => fileContent += chunk)

readStream.on("end", () => console.log(fileContent.toString("utf8")))


