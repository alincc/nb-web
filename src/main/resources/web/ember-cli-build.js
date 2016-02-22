/* global require, module */
var fs = require('fs');
var path = require('path');

var mergeTrees = require('broccoli-merge-trees');
var Angular2App = require('angular-cli/lib/broccoli/angular2-app');
var compileSass = require('broccoli-sass');
var broccoliAutoprefixer = require('broccoli-autoprefixer');
var autoprefixerOptions = require('./build/autoprefixer-options');

module.exports = function(defaults) {
    var app = new Angular2App(defaults);
    var appCssTree = compileSass(['src/styles'], 'main.scss', 'styles/main.css');
    var componentCssTree = getCssTree('components');
    return mergeTrees([
        app.toTree(),
        componentCssTree,
        appCssTree]);
};

/** Gets the tree for all of the components' CSS. */
function getCssTree(folder) {
    var srcPath = `src/app/${folder}/`;
    var components = fs.readdirSync(srcPath)
        .filter(file => fs.statSync(path.join(srcPath, file)).isDirectory());

    var componentCssTrees = components.reduce((trees, component) => {
        // We want each individual scss file to be compiled into a corresponding css file
        // so that they can be individually included in styleUrls.
        var scssFiles = fs.readdirSync(path.join(srcPath, component))
            .filter(file => path.extname(file) === '.scss')
            .map(file => path.basename(file, '.scss'));

        return scssFiles.map(fileName => {
            return compileSass(
                [`${srcPath}/${component}`, 'src/core/style'], // Directories w/ scss sources
                `./${fileName}.scss`,                              // Root scss input file
                `${folder}/${component}/${fileName}.css`);        // Css output file
        }).concat(trees);
    }, []);
    return broccoliAutoprefixer(mergeTrees(componentCssTrees), autoprefixerOptions);
}
