/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\n__webpack_require__(1);\n__webpack_require__(2);\n__webpack_require__(3);\n\nvar angular = __webpack_require__(7);\nvar app = angular.module('obesityApp', []);\n\n__webpack_require__(9)(app);\n__webpack_require__(11)(app);\n\n//////////////////\n// WEBPACK FOOTER\n// ./app/entry.js\n// module id = 0\n// module chunks = 0\n//# sourceURL=webpack:///./app/entry.js?");

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	eval("module.exports = __webpack_require__.p + \"index.html\";\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/file-loader?name=[name].[ext]!./app/index.html\n// module id = 1\n// module chunks = 0\n//# sourceURL=webpack:///./app/index.html?./~/file-loader?name=%5Bname%5D.%5Bext%5D");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	eval("module.exports = __webpack_require__.p + \"only-obese-data.CSV\";\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/file-loader?name=[name].[ext]!./app/only-obese-data.CSV\n// module id = 2\n// module chunks = 0\n//# sourceURL=webpack:///./app/only-obese-data.CSV?./~/file-loader?name=%5Bname%5D.%5Bext%5D");

/***/ },
/* 3 */
/***/ function(module, exports) {

	eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./app/scss/base.scss\n// module id = 3\n// module chunks = 0\n//# sourceURL=webpack:///./app/scss/base.scss?");

/***/ },
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	eval("__webpack_require__(8);\nmodule.exports = angular;\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/angular/index.js\n// module id = 7\n// module chunks = 0\n//# sourceURL=webpack:///./~/angular/index.js?");

/***/ },
/* 8 */
/***/ function(module, exports) {


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nmodule.exports = function (app) {\n  __webpack_require__(10)(app);\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./app/js/controllers/index.js\n// module id = 9\n// module chunks = 0\n//# sourceURL=webpack:///./app/js/controllers/index.js?");

/***/ },
/* 10 */
/***/ function(module, exports) {

	eval("'use strict';\n\nmodule.exports = exports = function exports(app) {\n  app.controller('dropCtrl', ['$scope', function ($scope) {\n    $scope.countrylist = ['Afghanistan', 'Angola', 'Albania', 'Andorra', 'United Arab Emirates', 'Argentina', 'Armenia', 'Antigua and Barbuda', 'Australia', 'Austria', 'Azerbaijan', 'Burundi', 'Belgium', 'Benin', 'Burkina Faso', 'Bangladesh', 'Bulgaria', 'Bahrain', 'Belarus', 'Belize', 'Bolivia', 'Brazil', 'Barbados', 'Brunei', 'Bhutan', 'Botswana', 'Central African Republic', 'Canada', 'Switzerland', 'Chile', 'China', 'Cote d Ivoire', 'Cameroon', 'Democratic Republic of the Congo', 'Congo', 'Colombia', 'Comoros', 'Cape Verde', 'Costa Rica', 'Cuba', 'Cyprus', 'Czech Republic', 'Germany', 'Djibouti', 'Dominica', 'Denmark', 'Dominican Republic', 'Algeria', 'Ecuador', 'Egypt', 'Eritrea', 'Spain', 'Estonia', 'Ethiopia', 'Finland', 'Fiji', 'France', 'Federated States of Micronesia', 'United Kingdom', 'Georgia', 'Ghana', 'Guinea', 'The Gambia', 'Guinea-Bissau', 'Equatorial Guinea', 'Greece', 'Grenada', 'Guatemala', 'Guyana', 'Honduras', 'Croatia', 'Haiti', 'Hungary', 'Indonesia', 'India', 'Ireland', 'Iran', 'Iraq', 'Iceland', 'Israel', 'Italy', 'Jamaica', 'Jordan', 'Japan', 'Kazakhstan', 'Kenya', 'Kyrgyzstan', 'Cambodia', 'Kiribati', 'South Korea', 'Kuwait', 'Laos', 'Lebanon', 'Liberia', 'Libya', 'Saint Lucia', 'Sri Lanka', 'Lesotho', 'Lithuania', 'Luxembourg', 'Latvia', 'Morocco', 'Moldova', 'Madagascar', 'Maldives', 'Mexico', 'Marshall Islands', 'Macedonia', 'Mali', 'Malta', 'Myanmar', 'Montenegro', 'Mongolia', 'Mozambique', 'Mauritania', 'Mauritius', 'Malawi', 'Malaysia', 'Namibia', 'Niger', 'Nigeria', 'Nicaragua', 'Netherlands', 'Norway', 'Nepal', 'New Zealand', 'Oman', 'Pakistan', 'Panama', 'Peru', 'Philippines', 'Papua New Guinea', 'Poland', 'North Korea', 'Portugal', 'Paraguay', 'Palestine', 'Qatar', 'Romania', 'Russia', 'Rwanda', 'Saudi Arabia', 'Sudan', 'Senegal', 'Singapore', 'Solomon Islands', 'Sierra Leone', 'El Salvador', 'Somalia', 'Serbia', 'South Sudan', 'Sao Tome and Principe', 'Suriname', 'Slovakia', 'Slovenia', 'Sweden', 'Swaziland', 'Seychelles', 'Syria', 'Chad', 'Togo', 'Thailand', 'Tajikistan', 'Turkmenistan', 'Timor-Leste', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Taiwan', 'Tanzania', 'Uganda', 'Ukraine', 'Uruguay', 'United States', 'Uzbekistan', 'Saint Vincent and the Grenadines', 'Venezuela', 'Vietnam', 'Vanuatu', 'Samoa', 'Yemen', 'South Africa', 'Zambia', 'Zimbabwe'];\n  }]);\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./app/js/controllers/dropController.js\n// module id = 10\n// module chunks = 0\n//# sourceURL=webpack:///./app/js/controllers/dropController.js?");

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nmodule.exports = function (app) {\n  __webpack_require__(12)(app);\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./app/js/directive/index.js\n// module id = 11\n// module chunks = 0\n//# sourceURL=webpack:///./app/js/directive/index.js?");

/***/ },
/* 12 */
/***/ function(module, exports) {

	eval("'use strict';\n\nmodule.exports = exports = function exports(app) {\n  app.directive('obesityChart', function () {\n    return {\n      restrict: 'E',\n      require: '^ngController',\n      scope: {\n        country: '@'\n      },\n      link: function link(scope) {\n        var dataSet = [];\n        scope.$watch('country', function (country) {\n          console.log(\"RENDY\", dataSet);\n          render(dataSet, country);\n        });\n        var margin = {\n          left: 80,\n          top: 20,\n          right: 20,\n          bottom: 80\n        };\n        var padding = {\n          left: 0,\n          top: 0,\n          right: 0,\n          bottom: 0\n        };\n        var outerWidth = 960;\n        var outerHeight = 500;\n        var innerWidth = outerWidth - margin.left - margin.right;\n        var innerHeight = outerHeight - margin.top - margin.bottom;\n        var width = innerWidth - padding.left - padding.right;\n        var height = innerHeight - padding.top - padding.bottom;\n\n        // creating svg\n        var svg = d3.select('body').append('svg').attr('width', width + margin.left + margin.right).attr('height', height + margin.top + margin.bottom).append('g').attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');\n\n        var g = svg.append('g').attr('transform', 'translate(' + padding.left + ',' + padding.top + ')');\n\n        // y scale creation\n        var y = d3.scale.linear().range([height, 0]).domain([0, 1]);\n\n        var startDate = new Date(1990, 0, 1, 0);\n        var endDate = new Date(2013, 0, 1, 0);\n\n        // x scale creation\n        var x = d3.time.scale().domain([startDate, endDate]).range([0, width]);\n\n        // y axis formatting\n        var formatAsPercentage = d3.format('.1%');\n\n        // x axis\n        var xAxis = d3.svg.axis().scale(x).orient('bottom');\n\n        // y axis\n        var yAxis = d3.svg.axis().scale(y).orient('left');\n\n        // format ticks as percent\n        yAxis.tickFormat(formatAsPercentage);\n\n        g.append('rect').attr('class', 'inner').attr('width', width).attr('height', height);\n\n        //Load Data Function\n        function loadData(data) {\n          dataSet = _.filter(data, ['age_group', '20+ yrs, age-standardized']);\n          _.remove(data, ['sex', 'both']);\n          _.remove(data, ['metric', 'overweight']);\n        }\n\n        function render(data, country) {\n          data = _.filter(dataSet, ['location_name', country]);\n          //bind data\n          var line = d3.svg.line().x(function (d) {\n            var date = new Date(d.year, 0, 1, 0);\n            return x(date);\n          }).y(function (d) {\n            return y(d.mean);\n          });\n\n          //NEST\n          var groupData = d3.nest().key(function (d) {\n            return d.sex;\n          }).entries(data);\n\n          var sexGroup = svg.selectAll('.sex').data(groupData);\n\n          sexGroup.enter().append('g').attr('class', 'sex');\n\n          var lines = sexGroup.selectAll('.line').data(function (d) {\n            return [d.values];\n          });\n\n          lines.enter().append('path').attr('class', function (d) {\n            return 'line ' + d[0].sex;\n          });\n\n          lines.transition().duration(350).attr('d', function (d) {\n            return line(d);\n          });\n        }\n\n        // type function\n        function type(d) {\n          d.location_id = +d.location_id;\n          d.age_start = +d.age_start;\n          d.age_end = +d.age_end;\n          d.sex_id = +d.sex_id;\n          d.lower = +d.lower;\n          d.upper = +d.upper;\n          d.mean = +d.mean;\n          d.year = +d.year;\n          d.age_group_id = +d.age_group_id;\n          return d;\n        }\n\n        //reading the data\n        d3.csv('./build/only-obese-data.csv', type, loadData);\n\n        //x axis label\n        g.append('g').attr('class', 'x-axis').attr('transform', 'translate(0,' + height + ')').call(xAxis).append('text').attr('y', 40).attr('x', width / 2 - 50).attr('dy', '0.51em').attr('fill', '#000').text('Year (1990-2013)');\n\n        //y axis label\n        g.append('g').attr('class', 'y-axis').attr('x', height).call(yAxis).append('text').attr('transform', 'rotate(-90)').attr('y', 10).attr('x', -210).attr('dy', '0.51em').attr('fill', '#000').text('% Obesity (male vs. female)');\n      }\n    };\n  });\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./app/js/directive/obesityChartDirective.js\n// module id = 12\n// module chunks = 0\n//# sourceURL=webpack:///./app/js/directive/obesityChartDirective.js?");

/***/ }
/******/ ]);