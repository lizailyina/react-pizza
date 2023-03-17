import { CartItemState } from "../components/CartItem";

export const getCartTotal = (pizzas: CartItemState[]) => {
  return {
    price: (pizzas.length && pizzas.reduce((sum: number, obj: any) => (sum + obj.prices[obj.type * obj.sizes.length + obj.size] * obj.count), 0).toFixed(2)),
    number: (pizzas.length && pizzas.reduce((sum: number, obj: any) => (sum + obj.count), 0))
  };
}