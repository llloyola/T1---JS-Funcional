// How to use:
//    Install dependencies -> "npm install connect serve-static"
//    Run -> "node server.js"

var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(8080, function(){
    console.log('Server running on 8080...');
});
