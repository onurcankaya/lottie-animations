import { Navigation } from 'react-native-navigation'

import App from './screens/main-screen'
import BasicAnimationScreen from './screens/basic-animation-screen'
import LoadingAnimationScreen from './screens/loading-animation-screen'
import ProgressAnimationScreen from './screens/progress-animation-screen'
import ButtonTransitionAnimationScreen from './screens/button-transition-animation-screen'
import ScreenTransitionAnimationScreen from './screens/screen-transition-animation-screen'

export default () => {
  Navigation.registerComponent('App', () => App)
  Navigation.registerComponent('BasicAnimationScreen', () => BasicAnimationScreen)
  Navigation.registerComponent('LoadingAnimationScreen', () => LoadingAnimationScreen)
  Navigation.registerComponent('ProgressAnimationScreen', () => ProgressAnimationScreen)
  Navigation.registerComponent('ButtonTransitionAnimationScreen', () => ButtonTransitionAnimationScreen)
  Navigation.registerComponent('ScreenTransitionAnimationScreen', () => ScreenTransitionAnimationScreen)

  Navigation.startSingleScreenApp({
    screen: {
      screen: 'App'
    }
  })
}
