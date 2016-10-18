var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var FileReaderExample = (function () {
    function FileReaderExample() {
    }
    FileReaderExample.prototype.getFiles = function (path, depth) {
        if (typeof depth === "undefined") { depth = 0; }
        var fileTree = [];

        var files = fs.readdirSync(path);

        for (var i = 0; i < files.length; i++) {
            var file = files[i];

            var stats = fs.statSync(file);
            var fileItem;

            if (stats.isDirectory()) {
                // Add directory and contents
                fileItem = {
                    path: file,
                    contents: this.getFiles(file, (depth + 1))
                };
            } else {
                // Add file
                fileItem = {
                    path: file,
                    contents: []
                };
            }

            fileTree.push(fileItem);
        }

        return fileTree;
    };
    return FileReaderExample;
})();

var LimitedFileReader = (function (_super) {
    __extends(LimitedFileReader, _super);
    function LimitedFileReader(maxDepth) {
        _super.call(this);
        this.maxDepth = maxDepth;
    }
    LimitedFileReader.prototype.getFiles = function (path, depth) {
        if (typeof depth === "undefined") { depth = 0; }
        if (depth > this.maxDepth) {
            return [];
        }

        return _super.prototype.getFiles.call(this, path, depth);
    };
    return LimitedFileReader;
})(FileReaderExample);

// instatiating an instance of LimitedFileReader
var fileReader = new LimitedFileReader(1);

// results in only the top level, and one additional level being read
var files = fileReader.getFiles('path');
