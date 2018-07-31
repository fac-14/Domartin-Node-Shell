#!/usr/bin/env node

const fs = require("fs");
const path = require("path");


const fileToRead = fs.readFileSync(path.join(__dirname, process.argv[2]))

const fileToReadParsed = fs.readFileSync(path.join(__dirname, process.argv[2]), "utf8")

// FOUR WAYS TO ACHIEVE IT. LAST WAY SEEMS BEST IMO

// console.log(fileToRead.toString("utf8"))

// console.log(fileToReadParsed)

// process.stdout.write(fileToRead)


// console.log(process.cwd() + "/" + process.argv[2])

process.stdout.write(fs.readFileSync(process.cwd() + "/" + process.argv[2]));