var fs = require("fs");
var data = "Simply the fattest arrows";

// Creating a writable stream
var writeStream = fs.createWriteStream("output.txt");

// Write it!
writeStream.write(data, "UTF8");

// End it!
writeStream.end();

writeStream.on("finish", () => console.log("write has been wrotted"))