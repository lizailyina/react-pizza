import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { Pizza } from '../../components/PizzaBlock';
import { FilterState } from './filterSlice';

export const fetchPizzas = createAsyncThunk(
  'pizza/fetchPizzas',
  async (params: FilterState) => {
    const { activePage, activeSortType, sortDirection, activeCategory, activeSearch } = params;
    let link = `https://63ffec509f84491029866878.mockapi.io/items?p=${activePage + 1}&l=8&sortBy=${activeSortType}&order=${sortDirection}`;
    if (activeCategory > 0) {
      link += `&category=${activeCategory}`;
    }
    if (activeSearch && !activeCategory) {
      link += `&title=${activeSearch}`
    }
    const { data } = await axios.get(link);
    return data;
  }
)

interface PizzaState {
  items: Pizza[],
  status: string;
}

const initialState: PizzaState = {
  items: [],
  status: ""
}

export const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state: PizzaState) => {
      state.items = [];
      state.status = 'loading';
    })

      .addCase(fetchPizzas.fulfilled, (state: PizzaState, action: PayloadAction<Pizza[]>) => {
        state.items = action.payload;
        state.status = 'complited';
      })

      .addCase(fetchPizzas.rejected, (state: PizzaState) => {
        state.items = [];
        state.status = 'error';
      })
  }
})

// export const { } = pizzaSlice.actions

export default pizzaSlice.reducer