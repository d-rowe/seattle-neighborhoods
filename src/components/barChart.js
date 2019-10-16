import React from 'react';
import * as d3 from 'd3';
import './barChart.css';

class BarChart extends React.Component {
  componentDidMount() {
    this.width = 500;
    this.height = 500;
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

    Promise.all([d3.json(url)]).then(data => {
      var world = data[0];
      console.log(world)
      world.features.forEach(f => {
        svg
          .append('path')
          .attr('d', path(f))
          .attr('class', 'hood');
      });

    });
  }

  render() {
    return <svg className="map" ref="map" />;
  }
}
export default BarChart;
