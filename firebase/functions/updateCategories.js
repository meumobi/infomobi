const functions = require('firebase-functions');
const admin = require('firebase-admin');  
exports.handler = event => {
  const articleData = event.data;
  const category = articleData.child("category");
  const parentId = articleData.child("parent_id");
  admin.database().ref(`/categories/${parentId.val()}`).set({name: category.val()})
  .then(snapshot => {
    console.log("Ok");
  })
  .catch(function(error) {
    console.log("Error:", error);   
  });
};