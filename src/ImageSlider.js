import React from 'react';

class ImageSlider extends React.Component {
  construtor() {
    super();
    
    this.state = {
      currentSlideIndex: 0
    }
  } // constructor() --

  render() {
    return (
      "I am on slide " + this.state.curretSlideIndex
    )
  } // render() --

} // ImageSlider ---

export default ImageSlider;
