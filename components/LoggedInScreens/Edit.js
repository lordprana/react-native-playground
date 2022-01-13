import {
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import {markLessonCompleted} from '../../reducers/lessonsSlice'
import {markPracticeCompleted} from '../../reducers/practicesSlice'


const markPracticeCompletedAsync = (name) => dispatch => {
  setTimeout(() => {
    dispatch(markPracticeCompleted(name))
  },  2000)
}

export default function Edit() {
  const lessons = useSelector(state => state.lessons)
  const practices = useSelector(state => state.practices)
  const dispatch = useDispatch()
  return (
    <View style={styles.container}>
      <Text>Edit</Text>
      { lessons.map(lesson => {
        return(
          <>
            <Text>{lesson.name}</Text>
            <Button
              title={'Mark Completed'}
              onPress={() => dispatch(markLessonCompleted(lesson.name))}/>
          </>
        )
      })}
      { practices.map(practice => {
        return(
          <>
            <Text>{practice.name}</Text>
            <Button
              title={'Mark Completed'}
              onPress={() => dispatch(markPracticeCompletedAsync(practice.name))}/>
          </>
        )
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
