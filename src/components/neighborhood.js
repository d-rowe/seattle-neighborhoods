import React from 'react';
import { connect } from 'react-redux';
import { setHover } from '../store/actions';
import '../styles/components/neighborhood.css';

const Neighborhood = ({ path, name, broad, setHover }) => {
  const getBroad = term => {
    if (term.toLowerCase() === 'None') {
      return null;
    } else {
      return term;
    }
  };

  const kebabCase = text => {
    return text.replace(/\s+/g, '-').toLowerCase()
  }

  const getBroadClass = term => {
    if (term.toLowerCase() === 'no broader term') {
      return 'broad-none';
    } else {
      const broad = kebabCase(term)
      return `broad-${broad}`;
    }
  };

  const getNameClass = term => {
    return `name-${kebabCase(term)}`
  }

  return (
    <path
      d={path}
      className={`neighborhood ${getNameClass(name)} ${getBroadClass(broad)}`}
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
