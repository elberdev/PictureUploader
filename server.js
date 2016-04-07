// these lines requires the http and url modules that come with node.js and
// makes them available through the variable names
var http = require("http");
var url  = require("url");

function start(route, handle) {

  // this is the non-anonymous way:
  function onRequest(request, response) {
    var postData = "";
    // extract the url path name so we can properly route the request
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");

    request.setEncoding("utf8");

    request.addListener("data", function(postDataChunk) {
      postData += postDataChunk;
      console.log("Receive POST data chunk '" + postDataChunk + "'.");
    })

    request.addListener("end", function() {
      route(handle, pathname, response, postData);
    });
  }

  // the onRequest function is a callback function (like a completion block)
  http.createServer(onRequest).listen(8888);
  console.log("Server was started.");
}

// this bit makes server.js a module with an accessible start function
exports.start = start;
