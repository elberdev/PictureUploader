var server = require("./server");
var router = require("./router");

// this is a bit of dependency injection
server.start(router.route);
