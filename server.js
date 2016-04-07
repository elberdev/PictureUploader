// these lines requires the http and url modules that come with node.js and
// makes them available through the variable names
var http = require("http");
var url  = require("url");

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
    // extract the url path name so we can properly route the request
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");
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

// this bit makes server.js a module with an accessible start function
exports.start = start;
