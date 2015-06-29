var path = require('path');
var sass_true = require('sass-true');

var sassFile = path.join(__dirname, 'test.scss');
sass_true.runSass({file: sassFile}, describe, it);
