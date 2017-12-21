import React from 'react'
import { Animated, View } from 'react-native'
import LottieView from 'lottie-react-native'

export default class LoadingAnimation extends React.Component {
  componentDidMount() {
    this.animation.play()
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <LottieView
          ref={animation => {this.animation = animation}}
          style={{
            width: 200,
            height: 200,
            top: 70,
            left: 45,
          }}
          source={require('../images/timeshifter-spinner.json')}
          loop={true}
        />
      </View>
    )
  }
}
