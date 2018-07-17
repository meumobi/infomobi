"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const anniversaries_1 = require("./anniversaries");
admin.initializeApp();
exports.todaysAnniversaries = functions.https.onRequest((request, response) => {
    const anniversariesService = new anniversaries_1.AnniversariesService(admin);
    anniversariesService.perform()
        .then(data => response.send(data));
});
//# sourceMappingURL=index.js.map