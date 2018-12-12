# split-require-test
A test that reproduces non-determisitic builds with browserify and react-loadable/split-require.

How to test:
 * run yarn on the root folder to install dependencies;
 * run `./node_modules/gulp/bin/gulp.js` to build bundles with browserify and split-require;
 * look at files outputted to the bundle folder, when their filenames based on sha256 hashes change, it means the file content changed, even though the code did not;
 * it can take a few runs of gulp to reproduce the issue, the bundle folder is generated every time.
 
The usual outputted files are:
 * 8c4bdcef7d5884df59fc73ca5d9339c14210af232b0d7d088426e04167984926.js
 * 88e61c4d6a858435f938484355f6fd49de532860718a941c34cff7b5e75f7b09.js
 * ed073dd404c3874df1b2f3c5e446a31533821ea5b25da70d37826b4bce804869.js
 
Sometimes it outputs the following files:
 * 7ee68b7f46af6f8b5b09fb9499a1de8d01be978b966d214e1074a1c9fe644dcd.js (this file contents are the ones that change)
 * 88e61c4d6a858435f938484355f6fd49de532860718a941c34cff7b5e75f7b09.js
 * ed073dd404c3874df1b2f3c5e446a31533821ea5b25da70d37826b4bce804869.js
 
 The file that changes represents the file comp3.jsx, which in turn, imports comp1.jsx and comp2.jsx, these last two are also imported by react-loadable in the main.jsx file.
