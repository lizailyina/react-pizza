import { RootState } from '../store'
import { CartItemState } from '../../components/CartItem'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CartState {
  pizzas: CartItemState[]
}

const initialState: CartState = {
  pizzas: [],
}

export const filterSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addPizza(state, action: PayloadAction<CartItemState>) {
      if (state.pizzas.find((obj) => {
        const newObj = action.payload;
        newObj.count = obj.count;
        return Object.entries(obj).toString() === Object.entries(action.payload).toString();
      })) {
        state.pizzas = state.pizzas.map((obj) => {
          if (Object.entries(obj).toString() === Object.entries(action.payload).toString()) {
            obj.count++;
          }
          return obj;
        })
      } else {
        state.pizzas.push({ ...action.payload, count: 1 });
      }
    },
    removePizza(state, action: PayloadAction<CartItemState>) {
      state.pizzas = state.pizzas.map((obj) => {
        if (Object.entries(obj).toString() === Object.entries(action.payload).toString()) {
          obj.count--;
        }
        return obj;
      }).filter((obj) => (obj.count > 0));

    },
    removeAllPizzas(state, action: PayloadAction<CartItemState>) {
      state.pizzas = state.pizzas.filter((obj) => {
        return (Object.entries(obj).toString() !== Object.entries(action.payload).toString())
      })
    },
    clear(state) {
      state.pizzas = []
    }
  },
})

export const selectCart = (state: RootState) => state.cart;

export const { addPizza, clear, removeAllPizzas, removePizza } = filterSlice.actions

export default filterSlice.reducer