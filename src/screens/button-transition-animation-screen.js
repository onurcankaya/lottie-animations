import React from 'react'
import { View } from 'react-native'
import AnimatedButton from '../components/animated-button'

export default class ButtonAnimation extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      menuToggled: false
    }
  }

  handlePress = () => {
    this.setState({ menuToggled: !this.state.menuToggled })
  }

  render() {
    return (
      <AnimatedButton
        duration={6000}
        toggled={this.state.menuToggled}
        onPress={this.handlePress}
        fromValue={0}
        toValue={1}
        source={require('../images/heart-animation.json')}
        style={{
          width: 500,
          height: 500,
          right: 55,
          top: -60
        }}
      />
    )
  }
}
