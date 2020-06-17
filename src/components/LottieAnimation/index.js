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

    return(
        <Lottie options={defaultOptions}
              height={WIDTH > 768 ? 300 : 200}
              width={WIDTH > 768 ? 600 : 320}
        />
    )
  }
}

export default LottieAnimation