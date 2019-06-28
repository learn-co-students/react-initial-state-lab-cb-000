import React from 'react';


export default class Bomb extends React.Component
{
  constructor(props){
    super(props);
    this.state = {
      secondsLeft:this.props.initialCount
    }
  }
  render(){
    const secondsLeft = this.state.secondsLeft;
    return(<div>{secondsLeft === 0 ? 'Boom!' : secondsLeft + ' seconds left before I go boom!'}</div>);
  }
}
