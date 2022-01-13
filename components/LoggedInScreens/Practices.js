import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { useSelector } from 'react-redux'

export default function Practices() {
  const practices = useSelector(state => state.practices)
  console.log('Practices')
  console.log(practices)
  return (
    <View style={styles.container}>
      <Text>Practices</Text>
      { practices.map(practice => {
        return (<>
          <Text>{practice.name}</Text>
          <Text>{practice.completed.toString()}</Text>
        </>)
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
