import React from 'react'

import { addPizza } from '../../redux/slices/cartSlice';
import { useDispatch, useSelector } from 'react-redux'
import { CartItemState } from '../CartItem';

export const typeItems = ['thin', 'traditional']
export const sizeItems = [20, 26, 40];

export type Pizza = {
  category: number,
  rating: number,
  id: number,
  imageUrl: string,
  title: string,
  types: number[],
  sizes: number[],
  price: number,
  prices: number[]
}

const getCount = (pizzas: Pizza[], currentPizza: CartItemState): number => {
  return pizzas.reduce((sum: number, obj: any) => {
    console.log(obj, currentPizza);
    if (obj.id === currentPizza.id) {
      return sum + obj.count;
    } else {
      return sum;
    }
  }, 0)
}

export const PizzaBlock: React.FC<Pizza> = ({
  category,
  rating,
  id,
  imageUrl,
  title,
  types,
  sizes,
  price,
  prices
}) => {


  const dispatch = useDispatch();
  // @ts-ignore
  const { pizzas } = useSelector(state => state.cart);
  const [type, setType] = React.useState(types[0]);
  const [size, setSize] = React.useState(sizes[0]);
  const [touched, setTouched] = React.useState(false);
  const [count, setCount] = React.useState(0);

  const currentPizza: CartItemState = {
    category,
    rating,
    id,
    types,
    price,
    imageUrl,
    title,
    type,
    size,
    prices,
    sizes,
    count: 0
  };

  React.useEffect(() => {
    setCount(getCount(pizzas, currentPizza));
  }, [pizzas, getCount])

  return (
    <div className="pizza-block">
      <img
        className="pizza-block__image"
        src={imageUrl}
        alt="Pizza"
      />
      <h4 className="pizza-block__title">{title}</h4>
      <div className="pizza-block__selector">
        <ul>
          {types.map((item) => (
            <li className={type === item ? "active" : ""}
              key={item}
              onClick={() => { setType(item); setTouched(true) }}>{typeItems[item]}</li>
          ))}
        </ul>
        <ul>
          {sizes.map((item) => (
            <li className={size === item ? "active" : ""}
              key={item}
              onClick={() => { setSize(item); setTouched(true); }}>{sizeItems[item]} cm.</li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">{
          touched ?
            `${prices[type * sizes.length + size]?.toFixed(2)}$`
            :
            `from ${price.toFixed(2)} $`
        }
        </div>
        <div className="button button--outline button--add"
          onClick={() => dispatch(addPizza(currentPizza))}>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Add</span>
          <i>{count}</i>
        </div>
      </div>
    </div >
  )
}
