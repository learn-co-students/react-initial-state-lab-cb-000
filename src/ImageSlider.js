import React from 'react'

class ImageSlider extends React.component{
  constructor() {
    super();

    this.state = {
      currentSlideIndex: 0
    }
  }

  render() {
    return(
      <h3>I am on slide {this.state.currentSlideIndex}</h3>
    )
  }
}
