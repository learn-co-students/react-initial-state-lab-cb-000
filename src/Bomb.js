import React from 'react';

class Bomb extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
       secondsLeft: props.initialCount
    }
  } // constructor() --

  render() {
    const {secondsLeft} = this.state;
    const message = secondsLeft === 0 ? 'Boom!' : `${secondsLeft} seconds left before I go boom!`;
    return (
      <div>{message}</div>
    )
  } // render() --

} // Bomb --

export default Bomb;
