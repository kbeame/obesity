'use strict';

require('!!file?name=[name].[ext]!./index.html');
// require('./scss/base.scss');

const angular = require('angular');
const app = angular.module('obesityApp', []);


require('./js/controllers')(app);
require('./js/directive')(app);
