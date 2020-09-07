import React from 'react';

class Bomb extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      secondsLeft: this.props.initialCount
    }
  }
  
  render() {
    let text = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`;
    
    return (
      <div>{text}</div>
    )  
  }
}

export default Bomb;