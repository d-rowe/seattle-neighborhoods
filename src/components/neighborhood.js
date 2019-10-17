import React from 'react';
import { connect } from 'react-redux';
import { setHover } from '../store/actions';
import '../styles/components/neighborhood.css';

const Neighborhood = ({ path, name, broad, setHover }) => {
  return (
    <path
      d={path}
      className={`neighborhood`}
      onMouseOver={() => setHover({ name, broad })}
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
