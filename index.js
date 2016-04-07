var server          = require("./server");
var router          = require("./router");
var requestHandlers = require("./requestHandlers");

// this is a javascript object, which is a collection of key<string>/value pairs,
// that is, a friggin' dictionary! Our values will all be functions so we can
// pass the handle object to the start function.
var handle = {};
handle["/"]       = requestHandlers.start;
handle["/start"]  = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;

// this is a bit of dependency injection
server.start(router.route, handle);
