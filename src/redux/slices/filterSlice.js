import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  activePage: 0,
  activeSortType: 'rating',
  sortDirection: 'desc',
  activeCategory: 0
}

export const filterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setActivePage(state, action) {
      state.activePage = action.payload
    },
    setActiveSortType(state, action) {
      state.activeSortType = action.payload
    },
    setSortDirection(state) {
      if (state.sortDirection === 'asc') state.sortDirection = 'desc';
      else state.sortDirection = 'asc'
    },
    setActiveCategory(state, action) {
      console.log(action);
      state.activeCategory = action.payload
    }
  },
})

export const { setActivePage, setActiveSortType, setActiveCategory, setSortDirection } = filterSlice.actions

export default filterSlice.reducer