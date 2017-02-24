/* Brocfile.js */

// Import some Broccoli plugins
var compileLess = require('broccoli-less');
var mergeTrees = require('broccoli-merge-trees');

// Specify the Sass and Coffeescript directories
var lessDir = 'app/less';

// Tell Broccoli how we want the assets to be compiled
var styles = compileLess([lessDir], 'jiuvii.less', 'styles.css');

// Merge the compiled styles into one output directory.
module.exports = mergeTrees([styles]);