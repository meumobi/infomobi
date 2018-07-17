"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const anniversaries_1 = require("./anniversaries");
admin.initializeApp();
exports.todaysAnniversaries = functions.https.onRequest((request, response) => {
    const anniversaries = new anniversaries_1.Anniversaries(admin);
    anniversaries.perform()
        .then(data => response.send("ok"));
});
//# sourceMappingURL=index.js.map