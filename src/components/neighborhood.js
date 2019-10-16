import React from 'react';
import './neighborhood.css';

const Neighborhood = ({ path, name, broad }) => {
  return (
    <path
      d={path}
      className="neighborhood"
      onClick={() => console.log(name, broad)}
      onMouseOver={() => console.log('hover', name, broad)}
    />
  );
};

export default Neighborhood;
