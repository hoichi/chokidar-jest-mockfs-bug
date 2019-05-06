var chokidar = require('chokidar');
var fs = require('fs');
var mockFs = require('mock-fs');

describe('chokidar & mock-fs', () => {
  /* setup */
  let path = 'path/to/file.txt';
  let content = 'The file content';

  beforeEach(() => mockFs({ [path]: content }));
  afterEach(mockFs.restore);
  /* end setup */

  /**
   * This test runs ok
   */
  it('fs.readFileSync', () => {
    expect(fs.readFileSync(path, { encoding: 'utf-8' })).toBe(content);
  });

  /**
   * THIS * ONE * THROWS *
   */
  it('chokidar.watch', () => {
    return new Promise((resolve, reject) => chokidar.watch('path').on('add', () => resolve(expect('$20').toBe('$20'))));
  });
});
