import React from 'react'
import { Animated, View } from 'react-native'
import LottieView from 'lottie-react-native'

export default class BasicAnimation extends React.Component {
  componentDidMount() {
    this.animation.play()
  }

  render() {
    return (
      <View
        style={{
          flex: 1
        }}
      >
        <LottieView
          ref={animation => {
            this.animation = animation
          }}
          style={{
            width: 400,
            height: 400
          }}
          source={require('../images/react-logo-animation.json')}
        />
      </View>
    )
  }
}
