import React from 'react'
import { Animated, View } from 'react-native'
import LottieView from 'lottie-react-native'

export default class LoadingAnimation extends React.Component {
  componentDidMount() {
    this.animation.play()
  }

  render() {
    return (
      <View>
        <LottieView
          ref={animation => {this.animation = animation}}
          style={{
            width: 500,
            height: 500,
            right: 30,
          }}
          source={require('../images/loading-animation.json')}
          loop={true}
        />
      </View>
    )
  }
}
