'use strict';

require('!!file?name=[name].[ext]!./index.html');
// require('./scss/base.scss');

const angular = require('angular');
const app = angular.module('obesityApp', []);

app.controller('dropCtrl', function($scope) {
  $scope.countrylist = ['United States', 'Canada', 'South Africa'];
});

app.directive('obesityChart', function() {
  return {
    restrict: 'EAC',
    require: '^ngController',
    scope: {
      country: '='
    },
    link: function(scope, controller) {
    scope.country = controller.countrylist;
    console.log(scope.country);
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
      .range([height, 0]);

      var x = d3.scale.linear()
      .range([0, width]);
      //copied content, delete
      var formatAsPercentage = d3.format(".1%");
      //axis
      var xAxis = d3.svg.axis()
      .scale(x)
      .orient("bottom")
      .ticks(23);


      var yAxis = d3.svg.axis()
      .scale(y)
      .orient("left");

      //copied content, delete
      yAxis.tickFormat(formatAsPercentage);

      g.append("rect")
      .attr("class", "inner")
      .attr("width", width)
      .attr("height", height);


      function render(data) {
        data = _.filter(data, ["location_name", 'South Africa'])
        _.remove(data, ["sex", "both"])
        _.remove(data, ["metric", "overweight"]);
        data = _.filter(data, ["age_group", "20+ yrs, age-standardized"]);
        console.log(data);
        //bind data
        var line = d3.svg.line()
          .x(function(d){ return x(d.year)})
          .y(function(d) { return y(d.mean)});

        y.domain([0, 1]).nice();
        x.domain([1990, 2013]).nice();

        // y.domain(d3.extent(data, function (d){

        //   return d[yAxisLabel]; }));
        // x.domain(['1990','1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998',
        // '1999','2000','2001','2002','2003','2004', '2005', '2006', '2007', '2008',
        // '2009','2010','2011', '2012','2013']);
        // x.domain(formatTime([new Date(1990, 0, 1, 0), new Date(2013, 0, 1, 2)]));



        //NEST
      const groupData = d3.nest()
        .key(function(d) { return d.sex; })
        .key(function(d) { return d.age_group_id; })
        .entries(data);

        // x.domain( d3.extent(groupData[0].values[0].values, function (d){
        //   console.log(d[xAxisLabel]);
        //   //  return d[xAxisLabel];
        //   return d[xAxisLabel]; }));

          var sexGroup = svg.selectAll(".sex")
          .data(groupData)
          .enter().append("g")
          .attr("class", "sex");
          // .attr("transform", function(d, i) { return "translate("+ (i * (width/2)) + " ,0)"; });

          // going off of groupData.values (the objects within the initial array)
          var ageGroup = sexGroup.selectAll(".age")
          .data(function(d) {
            // console.log(d.values);
            return (d.values); })
            .enter().append("g")
            .attr("class", "age");


            // y.domain([0, 1]).nice();
            // x.domain([1990, 2013]).nice();
            // var xDomain = groupData.map(function(d) {
            //   var male = "male"
            //   if (d.key === "male") {
            //     console.log(d);
            //     for (i = 0; i < d.values[0].values.length; i++ ) {
            //       console.log(d.values[0].values.length)
            //       console.log(d.values[0].values[i]);
            //       return d.values[0].values[i]
            //     }
            //   }
            //  });
            //
            //  console.log(groupData);
            //  console.log(xDomain);
            //  x.domain([1990, 2013]).nice();
            // console.log(groupData[0].values[0].values[0]);
            // console.log(data);
            // x.domain(xDomain);

            ageGroup.append("path")
            .attr("class", function(d) {
              // console.log(d.values[0].sex)
              return "line " + d.values[0].sex})
              .attr("d", function(d) { return line(d.values); })


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

            d3.csv("app/obesity.csv", type, render);

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
            .  attr("fill", "#000")
            .text("% Obesity");

    },
    templateUrl: '../d3/index.html'
  };
});
