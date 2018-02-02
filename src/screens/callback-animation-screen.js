import React from 'react'
import {
  Animated,
  View,
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native'
import LottieView from 'lottie-react-native'

export default class CallbackAnimation extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      progress: new Animated.Value(0)
    }
  }

  handleSuccess = () => {
    Animated.timing(this.state.progress, {
      toValue: 0.47,
      duration: 6000
    }).start()
  }

  handleFail = () => {
    Animated.timing(this.state.progress, {
      toValue: 0.97,
      duration: 6000
    }).start()
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={this.handleSuccess}
            activeOpacity={0.5}
          >
            <Text style={styles.buttonText}>Success</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={this.handleFail}
            activeOpacity={0.5}
          >
            <Text style={styles.buttonText}>Fail</Text>
          </TouchableOpacity>
        </View>
        <LottieView
          style={{
            width: 250,
            height: 250,
            top: 50,
            left: 30
          }}
          source={require('../images/callback-animation.json')}
          progress={this.state.progress}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: '#ddd',
    width: 100
  },
  buttonText: {
    padding: 10,
    textAlign: 'center'
  }
})
