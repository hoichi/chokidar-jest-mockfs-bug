var mockFs = require('mock-fs');
var chokidar = require('chokidar');

mockFs({"path/to/file.txt": "the file content"});
chokidar.watch("path");

console.log("watch run successfully");
