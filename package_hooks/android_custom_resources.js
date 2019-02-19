var fs = require('fs');
 var path = require('path');

 var sourceDir = 'resources/android/notification';
 var platformDir = 'platforms/android/app/src/main';
 var resourceDirs = [
 'res/drawable-ldpi',
 'res/drawable-mdpi',
 'res/drawable-mdpi-v11',
 'res/drawable-hdpi',
 'res/drawable-hdpi-v11',
 'res/drawable-xhdpi',
 'res/drawable-xhdpi-v11',
 'res/drawable-xxhdpi',
 'res/drawable-xxhdpi-v11',
 'res/drawable-xxxhdpi',
 'res/drawable-xxxhdpi-v11'
  ];

  module.exports = function(ctx) {
   if (ctx.opts.platforms.indexOf('android') < 0) {
     return;
   }

 var Q = ctx.requireCordovaModule('q');
 var deferred = Q.defer();
 var androidPlatformDir = path.join(ctx.opts.projectRoot, platformDir);
 var customResourcesDir = path.join(ctx.opts.projectRoot, sourceDir);

 function copy(src, dest) {
   var deferred = Q.defer();

   fs.stat(src, function(err, stats) {
     if (err || !stats.isFile()) {
       return deferred.reject(err);
     }

     fs.stat(path.dirname(dest), function(err, stats) {
       if (err || !stats.isDirectory()) {
         return deferred.reject(err);
       }

     var rs = fs.createReadStream(src);

     rs.on('error', function(err) {
       console.error(err.stack);
       deferred.reject(err);
     });

     var ws = fs.createWriteStream(dest);

     ws.on('error', function(err) {
       console.error(err.stack);
       deferred.reject(err);
     });

     ws.on('close', function() {
       deferred.resolve();
     });

     rs.pipe(ws);
   });
 });

 return deferred.promise;
 }

  fs.stat(customResourcesDir, function(err, stats) {
    if (err || !stats.isDirectory()) {
      return deferred.resolve();
   }

 fs.readdir(customResourcesDir, function(err, files) {
   var copies = [];
   for (var i in files) {
     var innerDir = path.join(customResourcesDir, files[i]);
     var innerFiles = fs.readdirSync(innerDir);
     for (var k in innerFiles){
       var innerFilePath = path.join(innerDir, innerFiles[k]);
       var innerDestPath = path.join(androidPlatformDir, 'res', files[i], innerFiles[k]);

       copies.push([innerFilePath, innerDestPath]);
     }
   }

   copies.map(function(args) {
     return copy.apply(copy, args);
   });

   Q.all(copies).then(function(r) {
     deferred.resolve();
   }, function(err) {
     console.error(err.stack);
     deferred.reject(err);
      });
    });
  });

  return deferred.promise;
 }