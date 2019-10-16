import React from 'react';
import * as d3 from 'd3';
import geojson from '../geoJSON/neighborhoods.geojson';
import './map.css';

class Map extends React.Component {
  componentDidMount() {
    this.updateSize();
    this.drawBarChart();
  }

  updateSize() {
    const { width, height } = this.refs.map.getBoundingClientRect();
    this.width = width;
    this.height = height;
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

    d3.json(geojson).then(data => {
      var world = data;
      world.features.forEach(feature => {
        svg
          .append('path')
          .attr('d', path(feature))
          .attr('class', 'hood');
      });
    });
    // Promise.all([d3.json(url)]).then(data => {
    // });
  }

  render() {
    return <svg className="map" ref="map" />;
  }
}
export default Map;
