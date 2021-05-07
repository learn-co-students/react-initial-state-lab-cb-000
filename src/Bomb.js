import React, {Component} from 'react';

export default class Bomb extends React.Component {
  
  constructor(props) {
    console.log(props)
    super(props)
    
    this.state = { 
      secondsLeft: this.state.initialCount
  }
  
  render() {
    const message = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`;
    
    return (
      <div>{message}</div>
      )
  }
}
