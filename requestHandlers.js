// import child_process module to test non-blocking operations.
// exec() executes a shell command
//var exec = require("child_process").exec;

var querystring = require("querystring"),
    fs          = require("fs")
    // to make sure formidable is installed, run in terminal:
    // $ npm install formidable
    // npm is the Node Package Manager
    formidable  = require("formidable");

function start(response) {
  console.log("Request handler 'start' was called.");

  // UGLY
  var body = '<html>' +
             '<head>' +
             '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />' +
             '</head>' +
             '<body>' +
             '<form action="/upload" enctype="multipart/form-data" method="post">' +
             '<input type="file" name="upload" multiple="multiple">' +
             '<input type="submit" value="Upload file" />' +
             '</form>' +
             '</body>' +
             '</html>';


  response.writeHead(200, { "Content-Type": "text/html" });
  response.write(body);
  response.end();

  // // hack together a sleep function in javascript
  // function sleep(milliseconds) {
  //   var startTime = new Date().getTime();
  //   // keep this empty loop running while time since 1970 is less
  //   // than our target time.
  //   while (new Date().getTime() < startTime + milliseconds);
  // }
  // // simulate a blocking operation
  // sleep(10000);

  // // an asynchronous operation
  // // the anonymous function is a callback function to handle the results
  // exec("find /",
  //   { timeout: 10000, maxBuffer: 20000 * 1024 },
  //   function(error, stdout, stderr) {
  //     response.writeHead(200, {"Content-Type": "text/plain"});
  //     response.write(stdout);
  //     response.end();
  //   }
  // );
}

function upload(response, request) {
  console.log("Request handler 'upload' was called.");

  var form = new formidable.IncomingForm();
  console.log("about to parse");
  form.parse(request, function(error, fields, files) {
    console.log("parsing done");

    /* Possible error on Windows systems:
      tried to rename to an already existing file */
    fs.rename(files.upload.path, "/tmp/test.png", function(error) {
      if (error) {
        fs.unlink("/tmp/test.png");
        fs.rename(files.upload.path, "/tmp/test.png");
      }
    });
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("received image: <br/>");
    response.write("<img src='/show' />");
    response.end();
  });
}

function show(response) {
  console.log("Request handler 'show' was called.");
  response.writeHead(200, {"Content-Type": "image/png"});
  fs.createReadStream("/tmp/test.png").pipe(response);
}

exports.start  = start;
exports.upload = upload;
exports.show   = show;
