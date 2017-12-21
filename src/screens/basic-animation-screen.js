import React from 'react'
import { Animated, View } from 'react-native'
import LottieView from 'lottie-react-native'

export default class BasicAnimation extends React.Component {
  componentDidMount() {
    this.animation.play()
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <LottieView
          ref={animation => {this.animation = animation}}
          style={{
            width: 500,
            height: 500,
            right: 30,
            top: 10,
          }}
          source={require('../images/react-logo-animation.json')}
        />
      </View>
    )
  }
}
