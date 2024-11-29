#!/usr/bin/env node
const fs = require("fs");
const { executeJawaFile, translateLine } = require("../lib/interpreter");
const readline = require("readline");

function startRepl() {
    console.log("Sugeng Rawuh menyang Jawascript REPL");
    console.log("Ketik kode sampeyan. Ketik `.metu` kanggo metu.");
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "jawa> "
    });

    rl.prompt();

    rl.on("line", (line) => {
        const input = line.trim();
        if (input === ".metu") {
            console.log("Matur nuwun! Sampai jumpa!");
            rl.close();
            return;
        }

        try {
            const translated = translateLine(input);
            const result = eval(translated);
            console.log(result !== undefined ? result : "undefined");
        } catch (err) {
            console.error("Kesalahan kode Jawascript: " + err.message);
        }

        rl.prompt();
    }).on("close", () => {
        console.log("Sampai jumpa!");
        process.exit(0);
    });
}

function main() {
    const args = process.argv.slice(2);

    if (args.length === 0) {
        startRepl();
    } else {
        const filePath = args[0];
        try {
            executeJawaFile(filePath);
        } catch (err) {
            console.error(err.message);
            process.exit(1);
        }
    }
}

main();