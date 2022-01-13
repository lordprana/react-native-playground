import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { useEffect } from 'react'

export default function Splash({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('MainViewWithTabs', { screen: 'Lessons' })
    }, 2000)
  }, [])
  return (
    <View style={styles.container}>
      <Text>Splash</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
});
