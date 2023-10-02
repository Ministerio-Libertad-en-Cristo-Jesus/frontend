import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  open: false
}

export const sidePanelSlice = createSlice({
  name: 'sidePanel',
  initialState,
  reducers: {
    OpenCloseSidePanel: (state) => {
      state.open ? state.open = false : state.open = true
    }
  }
})

export default sidePanelSlice.reducer
export const { OpenCloseSidePanel } = sidePanelSlice.actions
