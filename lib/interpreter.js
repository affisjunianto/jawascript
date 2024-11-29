const KEYWORDS = {
    "yen": "if",
    "utawa": "else",
    "nalika": "while",
    "kanggo": "for",
    "bali": "return",
    "tunggu": "await",
    "janji": "then",
    "peta": "map",
    "saring": "filter",
    "kanggoSaben": "forEach",
    "kurangi": "reduce",
    "tulis": "console.log",
    "gawean": "function",
    "tekan": "require",
    "gunakake": "use",
    "rungokake": "listen",
    "kirim": "send",
    "awak": "body"
};

function translateLine(code) {
    // Menerjemahkan setiap kata kunci
    Object.keys(KEYWORDS).forEach(jawa => {
        const js = KEYWORDS[jawa];
        const regex = new RegExp(`\\b${jawa}\\b`, "g");
        code = code.replace(regex, js);
    });
    return code;
}

function executeJawaFile(filePath) {
    const fs = require("fs");
    const path = require("path");

    if (!fs.existsSync(filePath)) {
        throw new Error(`File "${filePath}" ora ditemokake.`);
    }

    const code = fs.readFileSync(filePath, "utf-8");
    const translatedCode = translateLine(code);

    try {
        require("vm").runInThisContext(translatedCode, { filename: path.basename(filePath) });
    } catch (err) {
        throw new Error("Kesalahan kode Jawascript: " + err.message);
    }
}

module.exports = { translateLine, executeJawaFile };