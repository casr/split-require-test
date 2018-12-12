# split-require-test

A test that reproduces non-determisitic builds with browserify and
react-loadable/split-require.

How to test:

    npm install
    npm test

The test script attempts to repeatedly make the build. As the output is always
expected to be 4 files, we detect a hash change by simply looking for there to
be not 4 files in the `bundle` directory.

The file that changes represents the file comp3.jsx, which in turn, imports
comp1.jsx and comp2.jsx, these last two are also imported by react-loadable in
the main.jsx file.
