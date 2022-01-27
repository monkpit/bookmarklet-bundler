const glob = require('glob');
const R = require('ramda');
const TerserPlugin = require("terser-webpack-plugin");

const path = require('path');

const userSrcDir = path.resolve(__dirname, 'user-src');

const jsGlob = glob.sync(`${userSrcDir}/**/*.bml.js`);

module.exports = {
    mode: 'production',
    entry: R.fromPairs(R.zip(jsGlob, jsGlob)),
    output: {
        clean: true,
        filename: (pathData) => pathData.runtime.replace(userSrcDir, ''),
        path: path.resolve(__dirname, 'output'),
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    }
};