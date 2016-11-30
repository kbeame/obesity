module.exports = exports = (app) => {
  app.directive('obesityChart', function() {
    return {
      restrict: 'E',
      require: '^ngController',
      scope: {
        country: '@'
      },
      link: function(scope) {
        let dataSet = [];
        scope.$watch('country', function(country) {
          console.log("RENDY", dataSet);
          render(dataSet, country);
        });
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

        // creating svg
        var svg = d3.select('body').append('svg')
          .attr('width', width + margin.left + margin.right)
          .attr('height', height + margin.top + margin.bottom)
          .append('g')
          .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');


        var g = svg.append('g')
          .attr('transform', 'translate(' + padding.left + ',' + padding.top + ')');

        // y scale creation
        var y = d3.scale.linear()
          .range([height, 0])
          .domain([0, 1]);

        var startDate = new Date(1990, 0, 1, 0);
        var endDate = new Date(2013, 0, 1, 0);

        // x scale creation
        var x = d3.time.scale()
          .domain([startDate, endDate])
          .range([0, width]);

        // y axis formatting
        var formatAsPercentage = d3.format('.1%');

        // x axis
        var xAxis = d3.svg.axis()
          .scale(x)
          .orient('bottom');

        // y axis
        var yAxis = d3.svg.axis()
          .scale(y)
          .orient('left');

        // format ticks as percent
        yAxis.tickFormat(formatAsPercentage);

        g.append('rect')
          .attr('class', 'inner')
          .attr('width', width)
          .attr('height', height);

        //Load Data Function
        function loadData(data) {
          dataSet = _.filter(data, ['age_group', '20+ yrs, age-standardized']);
          _.remove(data, ['sex', 'both'])
          _.remove(data, ['metric', 'overweight']);
        }


        function render(data, country) {
          data = _.filter(dataSet, ['location_name', country]);
          //bind data
          var line = d3.svg.line()
            .x(function(d){
              var date = new Date(d.year,0,1,0);
              return x(date);
            })
            .y(function(d) {
              return y(d.mean); });

          //NEST
          const groupData = d3.nest()
            .key(function(d) { return d.sex; })
            .entries(data);

          var sexGroup = svg.selectAll('.sex')
            .data(groupData);

          sexGroup
            .enter().append('g')
            .attr('class', 'sex');

          var lines = sexGroup
            .selectAll('.line')
            .data(function(d) {
              return [d.values];
            });

          lines.enter()
            .append('path')
            .attr('class', function(d) {
              return 'line ' + d[0].sex;
            });

          lines
            .transition()
            .duration(350)
            .attr('d', function(d) {
              return line(d);
            });
        }

// type function
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

        //reading the data
        d3.csv('../only-obese-data.csv', type, loadData);

        //x axis label
        g.append('g')
        .attr('class', 'x-axis')
        .attr('transform', 'translate(0,' + height + ')')
        .call(xAxis)
        .append('text')
        .attr('y', 40)
        .attr('x', (width/2-50))
        .attr('dy', '0.51em')
        .attr('fill', '#000')
        .text('Year (1990-2013)');

        //y axis label
        g.append('g')
        .attr('class', 'y-axis')
        .attr('x', height)
        .call(yAxis)
        .append('text')
        .attr('transform', 'rotate(-90)')
        .attr('y', 10)
        .attr('x', -210)
        .attr('dy', '0.51em')
        .attr('fill', '#000')
        .text('% Obesity (male vs. female)');
      }
    };
  });
};
