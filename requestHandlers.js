// import child_process module to test non-blocking operations.
// exec() executes a shell command
var exec = require("child_process").exec;

function start() {
  console.log("Request handler 'start' was called.");
  var content = "empty";

  // // hack together a sleep function in javascript
  // function sleep(milliseconds) {
  //   var startTime = new Date().getTime();
  //   // keep this empty loop running while time since 1970 is less
  //   // than our target time.
  //   while (new Date().getTime() < startTime + milliseconds);
  // }
  // // simulate a blocking operation
  // sleep(10000);

  // the anonymous function is a callback function to handle the results
  exec("ls -lah", function(error, stdout, stderr) {
    content = stdout;
  });

  return content;
}

function upload() {
  console.log("Request handler 'upload' was called.");
  return "Hello Upload";
}

exports.start  = start;
exports.upload = upload;
