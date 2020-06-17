// LottieAnimation.js
import React, { Component } from 'react'
import Lottie from 'react-lottie'
import animationData from '../../assets/animation/logo/data.json'

class LottieAnimation extends Component {


  render(){

    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

    const WIDTH = window.innerWidth;
    const HEIGHT = window.innerHeight;

    return(
        <Lottie options={defaultOptions}
              height={200}
              width={350}
        />
    )
  }
}

export default LottieAnimation