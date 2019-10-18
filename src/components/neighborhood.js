import React from 'react';
import { createClassName } from '../utils/strings';
import { connect } from 'react-redux';
import { setSelectedHood } from '../store/actions';
import '../styles/components/neighborhood.css';

const Neighborhood = ({ path, properties, setSelectedHood }) => {
  const { HOODS_ID, S_HOOD, L_HOOD } = properties;

  const s_hood_class = createClassName('s-hood', S_HOOD);
  const l_hood_class = createClassName('l-hood', L_HOOD);
  return (
    <path
      d={path}
      className={`neighborhood ${s_hood_class} ${l_hood_class}`}
      onMouseDown={() => setSelectedHood(HOODS_ID)}
    />
  );
};

const mapDispatchToProps = dispatch => ({
  setSelectedHood: id => dispatch(setSelectedHood(id))
});

export default connect(
  null,
  mapDispatchToProps
)(Neighborhood);
