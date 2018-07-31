const fs = require("fs");
const file = process.cwd() + "/" + process.argv[2];
const stream = fs.createReadStream(file);


let contentBuildup = "";

stream.on("data", (chunk) => contentBuildup += chunk);

stream.on("end", () => console.log(contentBuildup.split("\n").length))

// var file = process.cwd() + "/" + process.argv[2];