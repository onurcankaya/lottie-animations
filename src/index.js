import { Navigation } from 'react-native-navigation'

import App from './screens/MainScreen'
import LoadingAnimationScreen from './screens/LoadingAnimationScreen'
import ProgressAnimationScreen from './screens/ProgressAnimationScreen'
import ButtonAnimationScreen from './screens/ButtonAnimationScreen'
import CheckmarkAnimationScreen from './screens/CheckmarkAnimationScreen'

export default () => {
  Navigation.registerComponent('App', () => App)
  Navigation.registerComponent('LoadingAnimationScreen', () => LoadingAnimationScreen)
  Navigation.registerComponent('ProgressAnimationScreen', () => ProgressAnimationScreen)
  Navigation.registerComponent('ButtonAnimationScreen', () => ButtonAnimationScreen)
  Navigation.registerComponent('CheckmarkAnimationScreen', () => CheckmarkAnimationScreen)

  Navigation.startSingleScreenApp({
    screen: {
      screen: 'App'
    }
  })
}
