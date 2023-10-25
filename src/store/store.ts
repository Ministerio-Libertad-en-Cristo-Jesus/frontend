import { configureStore } from '@reduxjs/toolkit'
import { type TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { sidePanelSlice } from './features/sidepanel'
import { checkOutSlice } from './features/checkout'

export const store = configureStore({
  reducer: {
    sidePanel: sidePanelSlice.reducer,
    checkOut: checkOutSlice.reducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export const useAppDispatch: () => typeof store.dispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
