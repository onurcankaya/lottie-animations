import React from 'react'
import { Animated, TouchableOpacity } from 'react-native'
import LottieView from 'lottie-react-native'

export default class ButtonAnimation extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      progress: new Animated.Value(0)
    }
  }

  handlePressButton = () => {
    Animated.timing(this.state.progress, {
      toValue: 0.5,
      duration: 2000,
    }).start()
  }

  render() {
    return (
      <TouchableOpacity onPress={this.handlePressButton}>
        <LottieView
          style={{
            width: 720,
            height: 600,
            right: 85,
            top: -60,
          }}
          source={require('../images/button-animation.json')}
          progress={this.state.progress}
        />
      </TouchableOpacity>
    )
  }
}
