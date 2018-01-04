import React from "react";
import { Animated, View } from "react-native";
import LottieView from "lottie-react-native";

export default class ProgressAnimation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { progress: new Animated.Value(0) };
  }

  fakeStep = (prev = 0) => {
    const max = 20;
    const randomTime = Math.random() * 2000 + 1000;
    setTimeout(() => {
      let next = Math.round(Math.random() * (100 - prev) + prev);
      if (next - prev > max) {
        next = prev + max;
      }

      let toValue = next / 100;
      if (toValue > 0.8) {
        toValue = 1;
      }

      console.warn(toValue);

      // animate to next value
      Animated.timing(this.state.progress, {
        toValue,
        duration: 1000
      }).start();
      if (toValue < 1) {
        this.fakeStep(next);
      }
    }, randomTime);
  };

  componentDidMount() {
    this.fakeStep();
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <LottieView
          style={{ width: 200, height: 200, top: 70, left: 45 }}
          source={require("../images/progress-animation.json")}
          progress={this.state.progress}
        />
      </View>
    );
  }
}
