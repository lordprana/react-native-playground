import { createStackNavigator } from '@react-navigation/stack'
import Lessons from '../components/LoggedInScreens/Lessons'
import Practices from '../components/LoggedInScreens/Practices'
import Edit from '../components/LoggedInScreens/Edit'
import {useActiveTab} from '../contexts/ActiveTabContext'

const Stack = createStackNavigator()

const TabStackNavigator = () => {
  const [activeTab, updateActiveTab] = useActiveTab()
  return (
    <Stack.Navigator
      initialRouteName='Lessons'
      screenListeners={({ route }) => ({
        focus: () => {
          updateActiveTab(route.name)
        }
      })}
      screenOptions={{
        animationEnabled: false,
        headerShown: false
      }}
    >
      <Stack.Screen
        name={'Lessons'}
        navigationKey={'Lessons'}
        getId={() => 'Lessons'}
        component={Lessons}
      />
      <Stack.Screen
        name={'Practices'}
        navigationKey={'Practices'}
        component={Practices}
      />
      <Stack.Screen
        name={'Edit'}
        navigationkey={'Edit'}
        component={Edit}
      />
    </Stack.Navigator>
  )
}

export default TabStackNavigator
