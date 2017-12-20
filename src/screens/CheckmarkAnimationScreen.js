import React from 'react'
import { Animated, View } from 'react-native'
import LottieView from 'lottie-react-native'

export default class LoadingAnimation extends React.Component {
  componentDidMount() {
    this.animation.play()
  }

  render() {
    return (
      <LottieView
        ref={animation => {this.animation = animation}}
        style={{
          width: 200,
          height: 200,
          top: 60,
          left: 45,
        }}
        source={require('../images/checkmark-animation.json')}
        loop={true}
      />
    )
  }
}
