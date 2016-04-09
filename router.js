function route(handle, pathname, response, postData) {
  console.log("About to route a request for " + pathname);
  // if handle[pathname] is a function, call it
  if (typeof handle[pathname] === 'function') {
    handle[pathname](response, postData);
  // otherwise if it's null for that key, we ain't got a request handler for it
  } else {
    console.log("No request handler found for " + pathname);
    response.writeHead(404, {"Content-type": "text/plain"});
    response.write("404 not found");
    response.end();
  }
}

exports.route = route;
