import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  activePage: 0,
  activeSortType: 'rating',
  sortDirection: 'desc',
  activeCategory: 0
}

export const filterSlice = createSlice({
  name: 'filter',
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
      state.activeCategory = action.payload
    },
    setState(state, action) {
      state.activeCategory = Number(action.payload.activeCategory);
      state.sortDirection = action.payload.sortDirection;
      state.activeSortType = action.payload.activeSortType;
      state.activePage = Number(action.payload.activePage);
    }
  },
})

export const { setActivePage, setActiveSortType, setActiveCategory, setSortDirection, setState } = filterSlice.actions

export default filterSlice.reducer