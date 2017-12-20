import React from 'react'
import { Animated, View } from 'react-native'
import LottieView from 'lottie-react-native'

export default class ProgressAnimation extends React.Component {
  componentDidMount() {
    this.animation.play()
  }

  render() {
    return (
      <View>
        <LottieView
          ref={animation => {this.animation = animation}}
          style={{
            width: 400,
            height: 250,
            top: 50,
          }}
          source={require('../images/progress-animation.json')}
          loop={true}
        />
      </View>
    )
  }
}
