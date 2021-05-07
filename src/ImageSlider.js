import React from 'react';

class imageSlider extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      currentSlideIndex: 0
    }
  }
  
  render() {
    return (
      <div>
        <p>I am on slide {this.props.currentSlideIndex}</p>
      </div>
      )
  }
}
