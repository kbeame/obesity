'use strict';

module.exports = exports = (app) => {
  app.controller('dropCtrl', function($scope) {
    $scope.countrylist = ['United States', 'Canada', 'South Africa'];
  });
};
