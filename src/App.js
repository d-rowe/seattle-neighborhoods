import React from 'react';
import Map from './components/map';
import { connect } from 'react-redux';
import './styles/app.css';

const App = ({ hover }) => {
  return (
    <div className="app">
      <Map />
    </div>
  );
};

const mapStateToProps = state => {
  return { hover: state.hoods.hover };
};

export default connect(mapStateToProps)(App);
