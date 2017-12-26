const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

const updateCategoriesModule = require('./updateCategories');
exports.updateCategories = functions.database.ref('/articles/{id}').onWrite(updateCategoriesModule.handler);
