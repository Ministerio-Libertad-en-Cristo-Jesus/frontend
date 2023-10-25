import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
interface Check {
  amountCheck: string
  descriptionCheck: string
}

const initialState: Check = {
  amountCheck: '1',
  descriptionCheck: ''
}

export const checkOutSlice = createSlice({
  name: 'checkOut',
  initialState,
  reducers: {
    changeCheck: (state, actions: PayloadAction<Check>) => {
      state.amountCheck = actions.payload.amountCheck
      state.descriptionCheck = actions.payload.descriptionCheck
    }
  }
})

export default checkOutSlice.reducer
export const { changeCheck } = checkOutSlice.actions
