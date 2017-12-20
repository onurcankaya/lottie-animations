import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

import rightArrow from '../images/right-arrow.png'

export default class App extends React.Component {
  handlePressLoadingAnimation = () => {
    this.props.navigator.push({
      screen: 'LoadingAnimationScreen'
    })
  }

  handlePressProgressAnimation = () => {
    this.props.navigator.push({
      screen: 'ProgressAnimationScreen'
    })
  }

  handlePressButtonAnimation = () => {
    this.props.navigator.push({
      screen: 'ButtonAnimationScreen'
    })
  }

  handlePressCheckmarkAnimation = () => {
    this.props.navigator.push({
      screen: 'CheckmarkAnimationScreen'
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>
          Lottie Animations
        </Text>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.button}
            onPress={this.handlePressLoadingAnimation}
          >
            <Text style={styles.buttonText}>
              Loading Animation
            </Text>
            <Image source={rightArrow} />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.button}
            onPress={this.handlePressProgressAnimation}
          >
            <Text style={styles.buttonText}>
              Progress Animation
            </Text>
            <Image source={rightArrow} />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.button}
            onPress={this.handlePressButtonAnimation}
          >
            <Text style={styles.buttonText}>
              Button Animation
            </Text>
            <Image source={rightArrow} />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.button}
            onPress={this.handlePressCheckmarkAnimation}
          >
            <Text style={styles.buttonText}>
              Checkmark Animation
            </Text>
            <Image source={rightArrow} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 40,
    marginHorizontal: 20,
  },
  header: {
    fontSize: 30,
    textAlign: 'center',
  },
  buttonsContainer: {
    paddingTop: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ddd',
    marginVertical: 20,
  },
  buttonText: {
    padding: 20,
    fontSize: 18
  },
});
