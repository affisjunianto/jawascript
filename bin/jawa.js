#!/usr/bin/env node
const { runJawaFile } = require("../lib/interpreter");
const path = require("path");

const args = process.argv.slice(2);

if (args.length < 1) {
    console.error("Penggunaan: jawa <file.jawa>");
    process.exit(1);
}

const filePath = path.resolve(args[0]);
runJawaFile(filePath);