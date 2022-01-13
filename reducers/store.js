import { configureStore } from '@reduxjs/toolkit'
import lessonsSlice from './lessonsSlice'
import practicesSlice from './practicesSlice'

export default configureStore({
  reducer: {
    lessons: lessonsSlice,
    practices: practicesSlice
  }
})
