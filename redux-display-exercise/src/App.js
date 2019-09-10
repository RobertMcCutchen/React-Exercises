import React from 'react';
import './App.css';
import { connect } from 'react-redux'

function App(props) {

const incrementButtonClicked = () => {
  //setCounter(counter + 1)
  props.onIncrement()
}

const decrementButtonClicked = () => {
  //setCounter(counter + 1)
  props.onDecrement()
}

const addButtonClicked = () => {
  //setCounter(counter + 1)
  props.onAdd()
}

const subtractButtonClicked = () => {
  //setCounter(counter + 1)
  props.onSubtract()
}

return (
    <div>
      <div className="counterDisplay">
      {props.counter}</div>
      <div className="Buttons">
        <button onClick={() => incrementButtonClicked()}>Increment</button>
        <button onClick={() => decrementButtonClicked()}>Decrement</button>
        <button onClick={() => addButtonClicked()}>Add 10</button>
        <button onClick={() => subtractButtonClicked()}>Subtract</button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => { // state is global state 
  return {
      ctr: state.counter  // props.ctr in our component 
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      onIncrement: () => dispatch({type: 'INC_COUNTER'}),
      onDecrement: () => dispatch({type: 'DEC_COUNTER'}),
      onAdd: () => dispatch({type: 'ADD_COUNTER'}),
      onSubtract: () => dispatch({type: 'SUBTRACT_COUNTER'}),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
