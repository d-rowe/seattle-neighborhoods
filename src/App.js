import React from 'react';
import BarChart from './components/barChart';

class App extends React.Component {
  render() {
    return <BarChart data={[1, 4, 7, 1, 12]} />;
  }
}
export default App;
