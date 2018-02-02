import React from 'react'
import { TouchableOpacity, Animated } from 'react-native'
import LottieView from 'lottie-react-native'

export default class AnimatedButton extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      progress: new Animated.Value(
        this.props.toggled ? this.props.toValue : this.props.fromValue
      )
    }
  }

  componentWillReceiveProps(nextProps) {
    const toValue = nextProps.toggled
      ? this.props.toValue
      : this.props.fromValue
    this.animate(toValue)
  }

  animate = toValue => {
    Animated.timing(this.state.progress, {
      toValue,
      duration: this.props.duration
    }).start()
  }

  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        activeOpacity={0.5}
        style={{ flex: 1 }}
      >
        <LottieView
          style={this.props.style}
          source={this.props.source}
          progress={this.state.progress}
        />
      </TouchableOpacity>
    )
  }
}
