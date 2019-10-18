import React from 'react';
import { connect } from 'react-redux';
import { setSelectedHood } from '../store/actions';
import '../styles/components/neighborhood.css';

const Neighborhood = ({
  path,
  hoods_id,
  l_hood_id,
  s_hood,
  l_hood,
  setSelectedHood
}) => {
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

  const getNameClass = term => {
    return `name-${kebabCase(term)}`;
  };

  return (
    <path
      d={path}
      className={`neighborhood ${getNameClass(s_hood)} ${getBroadClass(l_hood)}`}
      onMouseDown={() => setSelectedHood({ hoods_id, l_hood_id })}
    />
  );
};

const mapDispatchToProps = dispatch => ({
  setSelectedHood: selected => dispatch(setSelectedHood(selected))
});

export default connect(
  null,
  mapDispatchToProps
)(Neighborhood);
