import React from 'react'
import { View, Text } from 'react-native'
import { StackNavigator } from 'react-navigation'

export default class LoadingAnimation extends React.Component {
  render() {
    return (
      <View>
        <Text>
          {this.props.navigation.navigate}
        </Text>
      </View>
    )
  }
}
