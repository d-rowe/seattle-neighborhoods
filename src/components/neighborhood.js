import React from 'react';
import { createClassName } from '../utils/strings';
import { connect } from 'react-redux';
import { setSelectedHood } from '../store/actions';
import '../styles/components/neighborhood.css';

class Neighborhood extends React.Component {
  render() {
    const { HOODS_ID, S_HOOD, L_HOOD } = this.props.properties;

    const s_hood_class = createClassName('s-hood', S_HOOD);
    const l_hood_class = createClassName('l-hood', L_HOOD);

    return (
      <path
        ref={s_hood_class}
        d={this.props.path}
        className={`neighborhood ${s_hood_class} ${l_hood_class}`}
        onMouseDown={() => this.props.setSelectedHood(HOODS_ID)}
        onMouseEnter={() => this.refs[s_hood_class].classList.add('hovered')}
        onMouseLeave={() => this.refs[s_hood_class].classList.remove('hovered')}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setSelectedHood: id => dispatch(setSelectedHood(id))
});

export default connect(
  null,
  mapDispatchToProps
)(Neighborhood);
