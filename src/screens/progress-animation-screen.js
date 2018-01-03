import React from "react";
import { Animated, View } from "react-native";
import LottieView from "lottie-react-native";

export default class ProgressAnimation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { progress: new Animated.Value(0) };
  }

  componentDidMount() {
    Animated.timing(this.state.progress, {
      toValue: 1,
      duration: 4000
    }).start();
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <LottieView
          ref={animation => {
            this.animation = animation;
          }}
          style={{ width: 200, height: 200, top: 70, left: 45 }}
          source={require("../images/progress-animation.json")}
          progress={this.state.progress}
        />
      </View>
    );
  }
}
