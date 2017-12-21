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
  handlePressBasicAnimation = () => {
    this.props.navigator.push({
      screen: 'BasicAnimationScreen'
    })
  }

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

  handlePressButtonTransitionAnimation = () => {
    this.props.navigator.push({
      screen: 'ButtonTransitionAnimationScreen'
    })
  }

  handlePressScreenTransitionAnimation = () => {
    this.props.navigator.push({
      screen: 'ScreenTransitionAnimationScreen'
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
            onPress={this.handlePressBasicAnimation}
          >
            <Text style={styles.buttonText}>
              Basic Animation
            </Text>
            <Image source={rightArrow} />
          </TouchableOpacity>
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
              Callback Animation
            </Text>
            <Image source={rightArrow} />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.button}
            onPress={this.handlePressButtonTransitionAnimation}
          >
            <Text style={styles.buttonText}>
              Button Transition Animation
            </Text>
            <Image source={rightArrow} />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.button}
            onPress={this.handlePressScreenTransitionAnimation}
          >
            <Text style={styles.buttonText}>
              Screen Transition Animation
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
    fontFamily: 'Verdana'
  },
  buttonsContainer: {
    paddingTop: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ddd',
    marginVertical: 10,
  },
  buttonText: {
    padding: 20,
    fontSize: 18,
  },
});
