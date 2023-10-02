import { createSlice } from '@reduxjs/toolkit'

const initialState = false

export const sidePanelSlice = createSlice({
  name: 'sidePanel',
  initialState,
  reducers: {
    OpenCloseSidePanel: (state) => {
      state ? state = false : state = true
    }
  }
})

export default sidePanelSlice.reducer
export const { OpenCloseSidePanel } = sidePanelSlice.actions
