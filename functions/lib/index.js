"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const anniversaries_1 = require("./anniversaries");
exports.todaysAnniversaries = functions.https.onRequest((request, response) => {
    const anniversaries = new anniversaries_1.Anniversaries();
    anniversaries.perform();
    response.send("Hello from Firebase!");
});
//# sourceMappingURL=index.js.map