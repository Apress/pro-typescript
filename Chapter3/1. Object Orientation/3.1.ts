declare var fs: any;

interface FileItem {
    path: string;
    contents: string[];
}

class FileReaderExample {
    getFiles(path: string, depth: number = 0) {
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
    }
}

class LimitedFileReader extends FileReaderExample {
    constructor(public maxDepth: number) {
        super();
    }

    getFiles(path: string, depth = 0) {
        if (depth > this.maxDepth) {
            return [];
        }

        return super.getFiles(path, depth);
    }
}

// instatiating an instance of LimitedFileReader
var fileReader = new LimitedFileReader(1);

// results in only the top level, and one additional level being read
var files = fileReader.getFiles('path');
 