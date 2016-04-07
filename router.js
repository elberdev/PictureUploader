function route(handle, pathname) {
  console.log("About to route a request for " + pathname);
  // if handle[pathname] is a function, call it
  if (typeof handle[pathname] === 'function') {
    return handle[pathname]();
  // otherwise if it's null for that key, we ain't got a request handler for it
  } else {
    console.log("No request handler found for " + pathname);
    return "404 not found";
  }
}

exports.route = route;
