const admin = require('firebase-admin');

module.exports = { setCommentsDomain };
module.exports = { replaceCommentsType };
module.exports = { lowerCaseValues };

var serviceAccount = {
  "type": "service_account",
  "project_id": "ion-employee-int",
  "private_key_id": "42f291aa57b05a1c673a959310dea13436fa29b6",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDD6mSHbBczdxsq\n58Xu2vnFmG0j1x7WV95+cPWRyYQuy0OFOB1+xmOGP6pGQS47czjQq6fFzTfMoYjb\nCM3bOb9eDIduiHIKAKKtwN9CtWRoOuSHVC2vX8q2oW2BQQebWtPVixvbcMrlX7XE\nz3ESC73kAV8rtnEoJ4kAolQIl/Xd6AD53lHlShzdJyH7ewanDzynDhkuCML70xGF\nIxfsE/D5W2nbVjscULLJFiJjtSpSeqbgTrJx2epnjUlkQJDjqZQtJfOKSi1bcmrB\n/59KsLYhjWMpwDN5SnmhT1j+Cl61G59U3CnitQwKn6VjvNS8uuN2o+ZTNISZoSGw\nFVRQ9VRfAgMBAAECggEACKY4efdpBCSmARGVHiPHaH8qPQLU9wbkvmr47HlxFH/K\nI1TZjddEXZDspjK1JSVub11PXYmJ2nGR5oRPp6C3tMyTeMBysxkEFZew7kkD0yDb\n0KhZZqdb/mQcvtrCyIu3U8jTGgUIxXJMRrwXHyzVh/4SLY6Iawq+dFYLpQrQbVN/\nlyBOYweopzrJHufVa3EdgtNzQPaC1dF7NMC6wRJWWF2NN7svWhWgDBFSEtqgp2Gt\n5i0XHe06q36m+K27NuweqorGTodwhGl/1oO649dP3Cfnm5QSqlbIm1kVbtjOCl+Z\nLTFTUJWnDLslGMIvD+W6aKtmimhiKk0UdyPkJoCjwQKBgQD36Gn897J1Zq9tIWjn\nxFp8bLu1KQUB73MKdFvrUOSx7nZqbvhb7Lb1pxRvKJoGi+HNtY7Uw/dVoQVcrgA+\nBYAak5+sOWGTjqZg3eHo7jm31kpqm9W2gSskZg1eH7shaAekUf8WFHjEzgjKOmq+\nlGBhbpwhJX83qVp1MwQWz3OV5QKBgQDKT4RcLuLUoGW+YD0m2pPeybDwQI1yGH+N\ntdO5EeLaDhbCjdXQF1RrHDkTXObr6kEU37DE38G7aAk9dtaDD4iJwyjE9Y+76Dlg\ne0bg3oLvW8xt+4pgy99eAj7X9GiGZg+nxUvtLXi2ZEUOuU+BzNrkzEtR/tm0C3n7\noOY+POUc8wKBgQCdK/62YRwFjrq9x6bI+hYcOJuxOXZxSax3/lmgkULNBFCTHhPb\nw/IjQHCWIPm2GM1qLCeIAU44PcQ2hCKnL7mOH/XlrOOON6yIUWQ+13pEcVnwySfv\nc2k0xHbJK/jqLxhZN5swFn6S18V+4RZ4CX4ph4T5BtrnITm2gEehZpjzeQKBgDky\nAdmN59L1Bc6spp01blit7Lf/h/2Zr3YA0bqgs+Gx2f1m2+vYrKUbdYdj3GUV9RBR\nrUf7emnhH7ugvUSQP6my4vPL+LbHEHGWaJNqVNoWudTeKGD1QlDxkZK8JlDYydRE\nkxKaqGXoMx3WhgPMRpYoq6Kiyil8lR/ufSlbTerBAoGBAILeReQgmB050Xahqr9c\nkV4tY5qpMDPv4ldBRoOYZaFVKeJOliq6YWyShgymvIKWKE9/NjIaHR2FCJrPFgjg\nueW6/cEu/MME0tt1YcxGRHomM4wlLKPXDVljm9NYPLp2Xnwr7iggs2D/37zG3NtE\nte995/IMjGcz/3fm/Ev+M8Vk\n-----END PRIVATE KEY-----\n",
  "client_email": "ion-employee-int@appspot.gserviceaccount.com",
  "client_id": "111652085061254932896",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/ion-employee-int%40appspot.gserviceaccount.com"
}

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

var db = admin.firestore();

function setCommentsDomain(domain) {
  if (!domain) {
    console.log('Please provide a domain as argument (ex: node -e \'require("./index").setCommentsDomain("katrium.meumobi.com")\')');
    return;
  }

  db.collection('comments')
  .get()
  .then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
      db.collection("comments").doc(doc.id).update({"domain": domain});
    });
  })
  .catch(function(e) {
    console.log(e);
  });
}

function hasUpperCase(str) {
  return (/[A-Z]/.test(str));
}

function lowerCaseValues(field) {
  if (!field) {
    console.log('Please provide a domain as argument (ex: node -e \'require("./index").lowerCaseValues("type")\')');
    return;
  }

  db.collection('comments')
  .get()
  .then(function(documentSnapshot) {
    documentSnapshot.forEach(function(doc) {
      const comment = doc.data();
      console.log(doc.id, {"has upper case": hasUpperCase(comment.type), "value": comment.type});
      if (comment.type) {
        db.collection("comments").doc(doc.id).update({"type": comment.type.toLowerCase()});
      }
    });
  })
  .catch(function(e) {
    console.log(e);
  });
}

function replaceCommentsType(from, to) {
  if (!from) {
    console.log('Please provide a from type as the first argument (ex: node -e \'require("./index").replaceCommentsType("Message","message")\')');
    return;
  }

  if (!to) {
    console.log('Please provide a to type as the second argument (ex: node -e \'require("./index").replaceCommentsType("Message","message")\')');
    return;
  }

  db.collection('comments')
  .where('type', '==', from)
  .get()
  .then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
      db.collection("comments").doc(doc.id).update({"type": to});
    });
  })
  .catch(function(e) {
    console.log(e);
  });
}