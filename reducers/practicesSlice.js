import {createSlice} from '@reduxjs/toolkit'

export const practicesSlice = createSlice({
  name: 'practices',
  initialState: [
    {
      name: 'Focus',
      completed: false
    },
    {
      name: 'Emotions',
      completed: false
    }
  ],
  reducers: {
    loadInitialPractices: (state, practices) => {
      for (practice of practices) {
        state.push(practice)
      }
    },
    markPracticeCompleted: (state, action) => {
      const practice = state.find(s => s.name === action.payload)
      practice.completed = true
    }
  }
})

export const {loadInitialPractices, markPracticeCompleted} = practicesSlice.actions

export default practicesSlice.reducer
