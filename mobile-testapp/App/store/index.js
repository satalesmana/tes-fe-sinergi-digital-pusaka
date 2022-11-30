import { configureStore } from '@reduxjs/toolkit'
import biodataReducer from './reducer/biodataReducer'

export default configureStore({
  reducer: {
    biodata: biodataReducer,
  },
  
})