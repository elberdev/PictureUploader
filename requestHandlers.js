function start() {
  console.log("Request handler 'start' was called.");

  // hack together a sleep function in javascript
  function sleep(milliseconds) {
    var startTime = new Date().getTime();
    // keep this empty loop running while time since 1970 is less
    // than our target time.
    while (new Date().getTime() < startTime + milliseconds);
  }

  // simulate a blocking operation
  sleep(10000);
  return "Hello Start";
}

function upload() {
  console.log("Request handler 'upload' was called.");
  return "Hello Upload";
}

exports.start  = start;
exports.upload = upload;
