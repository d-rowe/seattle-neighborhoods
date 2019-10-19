import React from 'react';
import Map from './components/map';
import hood_ids from './geojson/hood_ids.json';
import shuffleArray from './utils/shuffleArray';
import { createClassName } from './utils/strings';
import { getHoodFromID } from './utils/hoods';
import { connect } from 'react-redux';
import './styles/App.css';

const shuffledHoods = shuffleArray(hood_ids);

class App extends React.Component {
  state = { hoodIndex: 0 };
  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.checkAnswer();
      const nextIndex = this.state.hoodIndex + 1;
      this.setState({ hoodIndex: nextIndex });
    }
  }

  checkAnswer() {
    const correct = shuffledHoods[this.state.hoodIndex];
    const answerID = this.props.selectedHood.id;
    const answerSHood = getHoodFromID(answerID).s_hood;
    const isCorrect = answerID === correct.hoods_id;
    if (!isCorrect) {
      this.flashCorrect(correct.s_hood);
    }
    const answerClass = isCorrect ? 'correct' : 'wrong';
    document
      .getElementsByClassName(createClassName('s-hood', answerSHood))[0]
      .classList.add(answerClass);
  }

  flashCorrect(correctSHood) {
    const flashDuration = 250;
    const flashes = 5;

    for (let i = 0; i < flashes; i++) {
      // flash correct color
      setTimeout(() => {
        document
          .getElementsByClassName(createClassName('s-hood', correctSHood))[0]
          .classList.add('correct');
      }, flashDuration * i);

      // remove correct color
      setTimeout(() => {
        document
          .getElementsByClassName(createClassName('s-hood', correctSHood))[0]
          .classList.remove('correct');
      }, flashDuration * i + flashDuration / 2);
    }
  }

  render() {
    const hood = shuffledHoods[this.state.hoodIndex];
    return (
      <div className="app">
        <div className="container">
          <div className="row v-center">
            <div className="col-5 v-center">
              <h1 className="display-4 hood-title">
                <strong>{hood.s_hood}</strong>
              </h1>
            </div>
            <div className="col-md-7">
              <Map />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { selectedHood: state.selectedHood };
}

export default connect(mapStateToProps)(App);
