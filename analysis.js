var d3 = require('d3');
var _  = require('lodash');


d3.csv('obesity.csv', function(dataset) {
  dataset = _.filter(dataset, [location_name, 'Afghanistan']);
  console.log(dataset);
});
