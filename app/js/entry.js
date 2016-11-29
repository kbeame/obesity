'use strict';

require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

const angular = require('angular');
const app = angular.module('obesityApp', []);

app.controller('dropCtrl', function($scope) {
  $scope.countrylist = ['United States', 'Canada', 'South Africa'];
});
