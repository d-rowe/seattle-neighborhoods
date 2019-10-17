import React from 'react';
import * as d3 from 'd3';
import { connect } from 'react-redux';
import { setHover } from '../store/actions';
import '../styles/components/neighborhood.css';

const Neighborhood = ({ path, name, broad, value_index, setHover }) => {
  const getBroad = term => {
    if (term.toLowerCase() === 'None') {
      return null;
    } else {
      return term;
    }
  };

  const kebabCase = text => {
    return text.replace(/\s+/g, '-').toLowerCase();
  };

  const getBroadClass = term => {
    if (term.toLowerCase() === 'no broader term') {
      return 'broad-none';
    } else {
      const broad = kebabCase(term);
      return `broad-${broad}`;
    }
  };

  const getValueClass = () => {
    getColor();
    if (!value_index) {
      return 'value-none';
    } else {
      return null;
    }
  };

  const getNameClass = term => {
    return `name-${kebabCase(term)}`;
  };

  const getColor = () => {
    var colorScale = d3
      .scaleLinear()
      .domain([300000, 750000, 1500000])
      .range(['#1a9850','yellow','#d73027'])
      .interpolate(d3.interpolateHcl);
    return colorScale(value_index);
  };

  return (
    <path
      fill={getColor()}
      d={path}
      className={`neighborhood ${getNameClass(name)} ${getBroadClass(
        broad
      )} ${getValueClass()}`}
      onMouseOver={() => setHover({ name, broad: getBroad(broad) })}
    />
  );
};

const mapDispatchToProps = dispatch => ({
  setHover: name => dispatch(setHover(name))
});

export default connect(
  null,
  mapDispatchToProps
)(Neighborhood);
