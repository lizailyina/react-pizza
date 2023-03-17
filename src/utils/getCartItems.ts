import { CartItemState } from "../components/CartItem";

export const getCartItems = (): CartItemState[] => {
  const json = window.localStorage.getItem("cart")
  const data = json ? JSON.parse(json) : [];
  return data;
}