import React from 'react'
import { Link } from 'react-router-dom'
import IMG from '../assets/img/empty-cart.png'

export const CartEmpty = () => {
  return (
    <div className="content">
      <div className="container container--cart">
        <div className="cart cart--empty">
          <h2>Cart is empty 😕</h2>
          <p>
            Looks like you haven't chosen pizza yet.<br />
            To choose one, go back to the main page.
          </p>
          <img src={IMG} alt="Empty cart" />
          <Link to="/" className="button button--black">
            <span>Go Back</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
