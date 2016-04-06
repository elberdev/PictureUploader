// this first line requires the http module that comes with node.js and
// makes it available through the variable http
var http = require("http");

function start() {
  // the createServer function from the http module returns an object with
  // a listen function which takes a port number for our http server to listen
  // on. We did not have to chain the functions this way. We could have
  // put the object in a variable, then later called the listen function from
  // the variable. We are also passing in an anonymous function right away as
  // a value which tells our server what to do and how to respond.
  //
  // http.createServer(function(request, response) {
  //   response.writeHead(200, {"Content-Type": "text/plain"});
  //   response.write("Hello World!");
  //   response.end();
  // }).listen(8888);

  // this is the non-anonymous way:
  function onRequest(request, response) {
    console.log("Request received.");
    // 200 is the status code, and the second parameter is the content type of
    // the response
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World!");
    response.end();
  }

  // the onRequest function is a callback function (like a completion block)
  http.createServer(onRequest).listen(8888);

  console.log("Server was started.");
}

exports.start = start;
