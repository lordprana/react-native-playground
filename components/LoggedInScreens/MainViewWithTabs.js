import {StatusBar} from 'expo-status-bar'
import {ActiveTabProvider} from '../../contexts/ActiveTabContext'
import TabStackNavigator from '../../navigators/TabStackNavigator'
import BottomTabs from '../common/BottomTabs'


const MainViewWithTabs = ({ navigation }) => {
  const onTabPressed = (routeName) => {
    navigation.navigate('MainViewWithTabs', { screen: routeName })
  }
  return (
      <ActiveTabProvider initialActiveTab={'Home'}>
          <TabStackNavigator/>
          <BottomTabs
            tabs={[
              {
                tabName: 'Lessons'
              },
              {
                tabName: 'Practices'
              },
              {
                tabName: 'Edit'
              }
            ]}
            height={300}
            onTabPressed={onTabPressed}
          />
          <StatusBar style="auto"/>
      </ActiveTabProvider>
  )
}

export default MainViewWithTabs
