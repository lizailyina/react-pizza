import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  pizzas: [],
  total: 0
}

export const filterSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addPizza(state, action) {
      if (state.pizzas.find((obj) => {
        const { count, ...newObj } = obj;
        return Object.entries(newObj).toString() === Object.entries(action.payload).toString();
      })) {
        state.pizzas = state.pizzas.map((obj) => {
          const { count, ...newObj } = obj;
          if (Object.entries(newObj).toString() === Object.entries(action.payload).toString()) {
            obj.count++;
          }
          return obj;
        })
      } else {
        state.pizzas.push({ ...action.payload, count: 1 });
      }
    },
    removePizza(state, action) {
      state.pizzas = state.pizzas.map((obj) => {
        const { count, ...newObj } = obj;
        if (Object.entries(newObj).toString() === Object.entries(action.payload).toString()) {
          obj.count--;
        }
        return obj;
      }).filter((obj) => (obj.count > 0));

    },
    removeAllPizzas(state, action) {
      state.pizzas = state.pizzas.filter((obj) => {
        const { count, ...newObj } = obj;
        return (Object.entries(newObj).toString() !== Object.entries(action.payload).toString())
      })
    },
    clear(state, action) {
      state.pizzas = []
    }
  },
})

export const selectCart = (state) => state.cart;

export const { addPizza, clear, removeAllPizzas, removePizza } = filterSlice.actions

export default filterSlice.reducer