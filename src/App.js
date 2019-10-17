import React from 'react';
import Map from './components/map';
import './styles/App.css';

const App = () => {
  return (
    <div className="container app">
      <div className="row">
        <div className="col-md-8">
          <Map />
        </div>
        <div className="col-4">
          <h1 align="center">Test</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Non quam
            lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Felis
            eget nunc lobortis mattis aliquam faucibus purus. Metus dictum at
            tempor commodo ullamcorper a lacus vestibulum sed. Vel fringilla est
            ullamcorper eget nulla facilisi. A condimentum vitae sapien
            pellentesque. Consectetur libero id faucibus nisl. Odio morbi quis
            commodo odio aenean. Facilisis gravida neque convallis a cras semper
            auctor neque. Amet massa vitae tortor condimentum. Gravida neque
            convallis a cras semper. Feugiat scelerisque varius morbi enim nunc
            faucibus. Est lorem ipsum dolor sit amet consectetur. Augue interdum
            velit euismod in. Mauris in aliquam sem fringilla ut morbi. Vitae
            auctor eu augue ut lectus arcu bibendum at. Vitae congue mauris
            rhoncus aenean vel elit scelerisque. Ornare suspendisse sed nisi
            lacus. Magna sit amet purus gravida quis. Ornare arcu dui vivamus
            arcu felis bibendum. Massa massa ultricies mi quis hendrerit dolor
            magna eget. Purus in massa tempor nec.
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
