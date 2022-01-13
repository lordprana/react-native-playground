import { createSlice } from '@reduxjs/toolkit'

export const lessonsSlice = createSlice({
  name: 'lessons',
  initialState: [
    {
      name: 'Guy',
      completed: false
    },
    {
      name: 'Matthew',
      completed: false
    },
    {
      name: 'Gaba',
      completed: false
    }
  ],
  reducers: {
    loadInitialLessons: (state, lessons) => {
      for (lesson of lessons) {
        state.push(lesson)
      }
    },
    markLessonCompleted: (state, action) => {
      const lesson = state.find(s => s.name === action.payload)
      lesson.completed = true
    }
  }
})

export const { loadInitialLessons, markLessonCompleted } = lessonsSlice.actions

export default lessonsSlice.reducer
