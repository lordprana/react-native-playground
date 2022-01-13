import {StyleSheet} from 'react-native'
import {createNavigationContainerRef} from '@react-navigation/native'
import {Provider} from 'react-redux'
import NavigationContainer from '@react-navigation/native/lib/module/NavigationContainer'
import store from './reducers/store'
import SplashRedirectNavigator from './navigators/SplashRedirectNavigator'

const App = () => {
  const navigationRef = createNavigationContainerRef()
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <SplashRedirectNavigator/>
      </NavigationContainer>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  }
})

export default App
