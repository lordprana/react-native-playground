import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { useSelector } from 'react-redux'

export default function Lessons() {
  const lessons = useSelector(state => state.lessons)
  return (
    <View style={styles.container}>
      <Text>Lessons</Text>
      { lessons.map(lesson => {
        return (<>
          <Text>{lesson.name}</Text>
          <Text>{lesson.completed.toString()}</Text>
        </>)
      })}
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
