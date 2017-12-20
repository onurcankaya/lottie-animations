import React from 'react'
import { Animated, TouchableOpacity } from 'react-native'
import LottieView from 'lottie-react-native'

export default class ButtonAnimation extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      progress: new Animated.Value(0),
      menuVisible: true
    }
  }

  handlePressButton = () => {
    if (this.state.menuVisible) {
      Animated.timing(this.state.progress, {
        toValue: 0.5,
        duration: 2000
      }).start()
      this.setState({ menuVisible: false })
    } else {
      Animated.timing(this.state.progress, {
        toValue: 0,
        duration: 2000
      }).start()
      this.setState({ menuVisible: true })  
    }
  }

  render() {
    return (
      <TouchableOpacity
        onPress={this.handlePressButton}
        activeOpacity={0.5}
      >
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
