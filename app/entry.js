'use strict';

require('!!file?name=[name].[ext]!./index.html');
// require('./scss/base.scss');

const angular = require('angular');
const app = angular.module('obesityApp', []);

app.controller('dropCtrl', function($scope) {
  $scope.countrylist = ['United States', 'Canada', 'South Africa'];
  // $scope.selectedCountry = this.countrylist[0];
  // $scope.locationChange = function (item){
    // this.countrylist = item;
  // };
});

app.directive('obesityChart', function() {
  return {
    restrict: 'E',
    require: '^ngController',
    scope: {
      country: '@'
    },
    link: function(scope, controller) {

    let dataSet = [];
    scope.$watch('country', function(country) {
      render(dataSet, country);
    });
    const yAxisLabel = "mean"
    const xAxisLabel = "year"
    const margin = {
      left: 80,
      top: 20,
      right: 20,
      bottom: 80
      };
    const padding = {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      };
      var outerWidth = 960;
      var outerHeight = 500;
      var innerWidth = outerWidth - margin.left - margin.right;
      var innerHeight = outerHeight - margin.top - margin.bottom;
      var width = innerWidth - padding.left - padding.right;
      var height = innerHeight - padding.top - padding.bottom;

      // creating an svg and appending it to the body of the page
      var svg = d3.select("body").append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
      // Scales
      // mean y|_x year

      var g = svg.append("g")
      .attr("transform", "translate(" + padding.left + "," + padding.top + ")")

      var y = d3.scale.linear()
        .range([height, 0])
        .domain([0, 1]);

      var startDate = new Date(1990, 0, 1, 0);
      var endDate = new Date(2013, 0, 1, 0);
      var x = d3.time.scale()
        .domain([startDate, endDate])
        .range([0, width]);

      //copied content, delete
      var formatAsPercentage = d3.format(".1%");
      //axis
      var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom");


      var yAxis = d3.svg.axis()
      .scale(y)
      .orient("left");

      //copied content, delete
      yAxis.tickFormat(formatAsPercentage);

      g.append("rect")
      .attr("class", "inner")
      .attr("width", width)
      .attr("height", height);

//Load Data Function
function loadData(data) {
  dataSet = _.filter(data, ["age_group", "20+ yrs, age-standardized"]);
  _.remove(data, ["sex", "both"])
  _.remove(data, ["metric", "overweight"]);
}
//render??


      function render(data, country) {
        data = _.filter(dataSet, ["location_name", country])
        console.log(data);
        //bind data
        var line = d3.svg.line()
          .x(function(d){
            var date = new Date(d.year,0,1,0);
            return x(date);
          })
          .y(function(d) { return y(d.mean)});



        //NEST
      const groupData = d3.nest()
        .key(function(d) { return d.sex; })
        .entries(data);

        console.log('GROUPS', groupData);

          var sexGroup = svg.selectAll(".sex")
          .data(groupData);

          sexGroup
            .enter().append("g")
            .attr("class", "sex");

          var lines = sexGroup
            .selectAll(".line")
            .data(function(d) {
              return [d.values];
            })

          lines.enter()
            .append("path")
            .attr("class", function(d) {
              return "line " + d[0].sex;
            });

          lines
            .transition()
            .duration(350)
            .attr("d", function(d) {
              return line(d);
            });
            
          }

            function type(d) {

              d.location_id = +d.location_id;
              d.age_start = +d.age_start;
              d.age_end = +d.age_end;
              d.sex_id = +d.sex_id;
              d.lower = +d.lower;
              d.upper = +d.upper;
              d.mean = +d.mean;
              d.year = +d.year;
              d.age_group_id = +d.age_group_id;
              return d;
            }

            d3.csv("app/onlyObese.csv", type, loadData);

            //x axis label
            g.append("g")
            .attr("class", "x-axis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis)
            .append("text")
            .attr("y", 40)
            .attr("x", (width/2-50))
            .attr("dy", "0.51em")
            .attr("fill", "#000")
            .text("Year (1990-2013)");

            //y axis label
            g.append("g")
            .attr("class", "y-axis")
            .attr("x", height)
            .call(yAxis)
            .append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 10)
            .attr("x", -70)
            .attr("dy", "0.51em")
            .attr("fill", "#000")
            .text("% Obesity");

    }
  };
});
