// this first line requires the http module that comes with node.js and
// makes it available through the variable http
var http = require("http");

// the createServer function from the http module returns an object with
// a listen function which takes a port number for our http server to listen
// on. We did not have to chain the functions this way. We could have
// put the object in a variable, then later called the listen function from
// the variable. We are also passing in an anonymous function right away as
// a value which tells our server what to do and how to respond.
http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World!");
  response.end();
}).listen(8888);
