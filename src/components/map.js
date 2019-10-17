import React from 'react';
import * as d3 from 'd3';
import geojson from '../geojson/hoods.geojson';
import Neighborhood from './neighborhood';

class Map extends React.Component {
  state = { neighborhoods: null, viewBox: null };

  componentDidMount() {
    this.setHoods();
  }

  setViewBox() {
    const bBox = this.refs.mapSvg.getBBox();
    this.setState({
      viewBox: `${bBox.x} ${bBox.y} ${bBox.width} ${bBox.height}`
    });
  }

  setHoods() {
    let projection = d3
      .geoAlbers()
      .scale(150000)
      .rotate([122.3321, 0])
      .center([0, 47.6062]);

    let path = d3.geoPath().projection(projection);

    d3.json(geojson).then(data => {
      // Map features to Neighborhood components
      let neighborhoods = data.features.map((feature, i) => {
        const { L_HOOD, S_HOOD, VALUE_INDEX } = feature.properties;
        return (
          <Neighborhood
            path={path(feature)}
            name={S_HOOD}
            broad={L_HOOD}
            value_index={VALUE_INDEX}
            key={i}
          />
        );
      });
      this.setState({ neighborhoods });
      this.setViewBox();
    });
  }

  render() {
    return (
      <svg viewBox={this.state.viewBox} className="mapSvg" ref="mapSvg">
        <g className="neighborhoods">{this.state.neighborhoods}</g>
      </svg>
    );
  }
}
export default Map;
