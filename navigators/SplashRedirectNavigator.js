import {createStackNavigator} from '@react-navigation/stack'
import Splash from '../components/Splash'
import MainViewWithTabs from '../components/LoggedInScreens/MainViewWithTabs'

const Stack = createStackNavigator()

const SplashRedirectNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName='Splash'
      screenOptions={{
        animationEnabled: false,
        headerShown: false
      }}
    >
      <Stack.Screen
        name={'Splash'}
        component={Splash}
      />
      <Stack.Screen
        name={'MainViewWithTabs'}
        component={MainViewWithTabs}
      />
    </Stack.Navigator>
  )
}

export default SplashRedirectNavigator
