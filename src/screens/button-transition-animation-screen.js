import React from "react";
import { View } from "react-native";
import AnimatedButton from "../components/animated-button";

export default class ButtonAnimation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menuToggled: false
    };
  }

  handlePress = () => {
    this.setState({ menuToggled: !this.state.menuToggled });
  };

  render() {
    return (
      <AnimatedButton
        duration={2000}
        toggled={this.state.menuToggled}
        onPress={this.handlePress}
        fromValue={0.1}
        toValue={0.6}
        source={require("../images/button-animation.json")}
        style={{
          width: 600,
          height: 500,
          right: 55,
          top: -60
        }}
      />
    );
  }
}
