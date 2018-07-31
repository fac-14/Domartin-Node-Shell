#!/usr/bin/env node

const fs = require("fs");
// const path = require("path");

// console.log(process.cwd())

fs.readdir(process.cwd(), (err, files) => {
    if(err){
        console.log("error!")
    } else {
        files.forEach(i => console.log(i + " woohoo!"))
    }
})
