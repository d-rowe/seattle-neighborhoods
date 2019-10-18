import React from 'react';
import Map from './components/map';
import './styles/App.css';

const App = () => {
  return (
    <div className="container app">
      <div className="row v-center">
        <div className="col-5">
          <h1 className="display-4 hood-title">West Woodland</h1>
        </div>
        <div className="col-md-7">
          <Map />
        </div>
      </div>
    </div>
  );
};

export default App;
