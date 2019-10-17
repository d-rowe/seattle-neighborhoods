import React from 'react';
import * as d3 from 'd3';
import geojson from '../geojson/neighborhoods.geojson';
import Neighborhood from './neighborhood';
import '../styles/components/map.css';

class Map extends React.Component {
  state = { neighborhoods: null };

  componentDidMount() {
    this.updateSize();
    this.setHoods();
  }

  updateSize() {
    const { width, height } = this.refs.mapSvg.getBoundingClientRect();
    this.width = width;
    this.height = height;
  }

  setHoods() {
    let projection = d3
      .geoAlbers()
      .scale(150000)
      .rotate([122.3321, 0])
      .center([0, 47.6062])
      .translate([this.width / 2, this.height / 2]);

    let path = d3.geoPath().projection(projection);

    d3.json(geojson).then(data => {
      let neighborhoods = data.features.map((feature, i) => {
        const { L_HOOD, S_HOOD } = feature.properties;
        return (
          <Neighborhood
            path={path(feature)}
            name={S_HOOD}
            broad={L_HOOD}
            key={i}
          />
        );
      });
      this.setState({ neighborhoods });
    });
  }

  render() {
    return (
        <svg className="mapSvg" ref="mapSvg">
          <g className="neighborhoods">{this.state.neighborhoods}</g>
        </svg>
    );
  }
}
export default Map;
