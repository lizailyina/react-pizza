import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ParsedQs } from 'qs'
import { RootState } from '../store'

export interface FilterState {
  activePage: number,
  activeSortType: string,
  sortDirection: string,
  activeCategory: number,
  activeSearch: string
}

const initialState: FilterState = {
  activePage: 0,
  activeSortType: 'rating',
  sortDirection: 'desc',
  activeCategory: 0,
  activeSearch: ''
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setActiveSearch(state, action: PayloadAction<string>) {
      state.activeSearch = action.payload
    },
    setActivePage(state, action: PayloadAction<number>) {
      state.activePage = action.payload
    },
    setActiveSortType(state, action: PayloadAction<string>) {
      state.activeSortType = action.payload
    },
    setSortDirection(state) {
      if (state.sortDirection === 'asc') state.sortDirection = 'desc';
      else state.sortDirection = 'asc'
    },
    setActiveCategory(state, action: PayloadAction<number>) {
      state.activeCategory = action.payload
    },
    setState(state, action: PayloadAction<ParsedQs>) {
      state.activeCategory = Number(action.payload.activeCategory);
      if (typeof (action.payload.sortDirection) === 'string') state.sortDirection = action.payload.sortDirection;
      if (typeof (action.payload.activeSortType) === 'string') state.activeSortType = action.payload.activeSortType;
      state.activePage = Number(action.payload.activePage);
    }
  },
})


export const selectFilter = (state: RootState) => state.filter;
export const { setActiveSearch, setActivePage, setActiveSortType, setActiveCategory, setSortDirection, setState } = filterSlice.actions

export default filterSlice.reducer