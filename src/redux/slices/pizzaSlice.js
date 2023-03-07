import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchPizzas = createAsyncThunk(
  'pizza/fetchPizzas',
  async (params) => {
    const { activePage, activeSortType, sortDirection, activeCategory, activeSearch } = params;
    let link = `https://63ffec509f84491029866878.mockapi.io/items?p=${activePage + 1}&l=8&sortBy=${activeSortType}&order=${sortDirection}&category=${activeCategory ? activeCategory : ""}&title=${activeSearch ? activeSearch : ""}`;
    const { data } = await axios.get(link);
    return data;
  }
)

const initialState = {
  items: [],
  status: ""
}

export const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
  },
  extraReducers: {
    [fetchPizzas.pending]: (state) => {
      state.items = [];
      state.status = 'loading';
    },
    [fetchPizzas.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = 'complited';
    },
    [fetchPizzas.rejected]: (state) => {
      state.items = [];
      state.status = 'error';
    }
  }
})

// export const { } = pizzaSlice.actions

export default pizzaSlice.reducer