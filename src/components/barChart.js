import React from 'react';
import * as d3 from 'd3';
import './barChart.css';

class BarChart extends React.Component {
  componentDidMount() {
    this.updateSize();
    this.drawBarChart();
  }

  updateSize() {
    const boundingRect = this.refs.map.getBoundingClientRect();
    this.width = boundingRect.width;
    this.height = boundingRect.height;
  }

  drawBarChart() {
    var svg = d3.select(this.refs.map);
    var projection = d3
      .geoAlbers()
      .scale(150000)
      .rotate([122.3321, 0])
      .center([0, 47.6062])
      .translate([this.width / 2, this.height / 2]);
    var path = d3.geoPath().projection(projection);

    var url =
      'https://opendata.arcgis.com/datasets/b76cdd45f7b54f2a96c5e97f2dda3408_2.geojson';
    var data_url =
      'http://enjalot.github.io/wwsd/data/world/ne_50m_populated_places_simple.geojson';

    Promise.all([d3.json(url), d3.json(data_url)]).then(function(data) {
      var world = data[0];
      var places = data[1];

      svg
        .append('path')
        .attr('d', path(world))
        .attr('fill', 'lightblue')
        .attr('stroke', 'black');

      // svg
      //   .selectAll('circle')
      //   .data(places.features)
      //   .enter()
      //   .append('circle')
      //   .attr('r', function(d) {
      //     return d.properties.pop_max / 1000000;
      //   })
      //   .attr('cx', function(d) {
      //     return projection(d.geometry.coordinates)[0];
      //   })
      //   .attr('cy', function(d) {
      //     return projection(d.geometry.coordinates)[1];
      //   })
      //   .attr('fill', 'darkgreen')
      //   .attr('opacity', 0.5);

      // window.setTimeout(function() {
      //   svg
      //     .selectAll('circle')
      //     .transition()
      //     .duration(5000)
      //     .attr('r', function(d) {
      //       return d.properties.pop_min / 1000000;
      //     });
      // }, 5000);
    });
  }

  render() {
    return <svg className="map" ref="map" />;
  }
}
export default BarChart;
