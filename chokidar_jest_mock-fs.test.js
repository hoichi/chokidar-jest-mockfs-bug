var mockFs = require('mock-fs');
var chokidar = require('chokidar');

describe("chokidar & mock-fs", () => {
  it("simple mock", () => {
    mockFs({"path/to/file.txt": "the file content"});
    chokidar.watch("path");
  })
});

