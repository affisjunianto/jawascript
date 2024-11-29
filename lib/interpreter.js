const fs = require("fs");

// Kamus kata kunci dari bahasa Jawa ke JavaScript
const KEYWORDS = {
    // Control flow
    "yen": "if",
    "utawa": "else",
    "nalika": "while",
    "kanggo": "for",
    "bali": "return",

    // Asynchronous
    "tunggu": "await",
    "janji": "then",

    // Array & Object
    "peta": "map",
    "saring": "filter",
    "kanggoSaben": "forEach",
    "kurangi": "reduce",

    // Logging
    "tulis": "console.log",

    // Fungsi
    "gawean": "function"
};

// Fungsi untuk menerjemahkan baris kode dari bahasa Jawa ke JavaScript
function translateLine(line) {
    Object.keys(KEYWORDS).forEach(jawa => {
        const js = KEYWORDS[jawa];
        const regex = new RegExp(`\\b${jawa}\\b`, "g"); // Cocokkan kata penuh
        line = line.replace(regex, js);
    });
    return line;
}

// Fungsi untuk menjalankan file .jawa
function runJawaFile(filePath) {
    try {
        const fileContent = fs.readFileSync(filePath, "utf-8");
        const lines = fileContent.split("\n");

        // Terjemahkan seluruh isi file
        let translatedCode = "";
        lines.forEach(line => {
            translatedCode += translateLine(line) + "\n";
        });

        // Eksekusi kode JavaScript hasil terjemahan
        eval(translatedCode);
    } catch (error) {
        console.error("Kesalahan:", error.message);
    }
}

module.exports = { runJawaFile };