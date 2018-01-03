import { Navigation } from "react-native-navigation";

import App from "./screens/main-screen";
import BasicAnimationScreen from "./screens/basic-animation-screen";
import LoadingAnimationScreen from "./screens/loading-animation-screen";
import ProgressAnimationScreen from "./screens/progress-animation-screen";
import CallbackAnimationScreen from "./screens/callback-animation-screen";
import ButtonTransitionAnimationScreen from "./screens/button-transition-animation-screen";

export default () => {
  Navigation.registerComponent("App", () => App);
  Navigation.registerComponent(
    "BasicAnimationScreen",
    () => BasicAnimationScreen
  );
  Navigation.registerComponent(
    "LoadingAnimationScreen",
    () => LoadingAnimationScreen
  );
  Navigation.registerComponent(
    "ProgressAnimationScreen",
    () => ProgressAnimationScreen
  );
  Navigation.registerComponent(
    "CallbackAnimationScreen",
    () => CallbackAnimationScreen
  );
  Navigation.registerComponent(
    "ButtonTransitionAnimationScreen",
    () => ButtonTransitionAnimationScreen
  );

  Navigation.startSingleScreenApp({
    screen: {
      screen: "App"
    }
  });
};
