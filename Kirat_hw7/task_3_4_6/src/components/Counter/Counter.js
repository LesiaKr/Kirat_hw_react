import React from 'react';
import { connect } from 'react-redux';
import { incrementAction } from '../../redux/actions';
import ComponentB from './ComponentB';

class Counter extends React.Component {

  handleIncrement() {
    this.props.dispatch(incrementAction);
  }

  render() {
    return (
      <div>
        <h2 style={{paddingTop: 50}}>Counter</h2>
        <ComponentB handleClick={this.handleIncrement.bind(this)}>
          Збільшити
        </ComponentB>
        <h4>{this.props.counter}</h4>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state
  }
}

export default connect(mapStateToProps)(Counter);