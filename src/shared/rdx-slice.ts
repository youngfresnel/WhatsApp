import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IMainSlice, TMessage } from './type'


// Define the initial state using that type
const initialState: IMainSlice = {
 user_details: {
  id:200,
  name:'Marius',
  profile_picture:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB3M40s88YcW6KaA3Ef90EaiQSil_HIzxolw&s'
 },
 messages: []
}

export const mainSlice = createSlice({
  name: 'main',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
   
    // Use the PayloadAction type to declare the contents of `action.payload`
    setMessage: (state, action: PayloadAction<TMessage>) => {
      state.messages.push(action.payload)
    },
  },
})

export const {  
    setMessage
  } = mainSlice.actions

export default mainSlice.reducer