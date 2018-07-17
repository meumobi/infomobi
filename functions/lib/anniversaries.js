"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const admin = require("firebase-admin");
class Anniversaries {
    getCurrentDate() {
        // return new Date().toLocaleDateString("pt-BR");    
        return "07/16/2018";
    }
    getAnniversaries(currentDate) {
        const teste = admin.firestore().collection('contacts').where('birthday', '==', currentDate).get().then(data => {
            console.log(data);
        });
        return teste;
    }
    perform() {
        const currentDate = this.getCurrentDate();
        const contacts = this.getAnniversaries(currentDate);
        console.log(currentDate);
        console.log(contacts);
    }
}
exports.Anniversaries = Anniversaries;
//# sourceMappingURL=anniversaries.js.map