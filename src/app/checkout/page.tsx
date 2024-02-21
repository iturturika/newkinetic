'use client'
import React from 'react'
import './page.scss'
import Header from "@/components/Header/Header";
import Cart from "@/components/Cart/Cart";
import CartItem from '@/components/CartItem/CartItem';

const page = () => {
const [isOpenCart, setIsOpenCart] = React.useState<any>(false);
  return (
    <div className='checkout-page'>
        <Header setIsOpenCart={setIsOpenCart}/>
        <form className='checkout-form fade-in'>
          <h2 style={{color: '#000'}} >Your order</h2>
          <div className='checkout-cart-section'>
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
          </div>
          <div className='checkout-form__contact-section'>
            <h2 style={{color: '#000'}} >Contact</h2>
            <input className='checkout-form__input' placeholder='Email'></input>
            <input className='checkout-form__input' placeholder='Phone'></input>
          </div>

          <div className='checkout-form__delivery-section'>
            <h2 style={{color: '#000'}} >Delivery</h2>
            <input className='checkout-form__input' placeholder='Country/Region'></input>
            <input className='checkout-form__input' placeholder='First name'></input>
            <input className='checkout-form__input' placeholder='Last name'></input>
            <input className='checkout-form__input' placeholder='Address'></input>
            <input className='checkout-form__input' placeholder='Postal code'></input>
            <input className='checkout-form__input' placeholder='City'></input>
          </div>
          <h2 style={{color: '#000'}} >Shipping method</h2>
          <select className='checkout-form__delivery-method-select'>
            <option>Select</option>
          </select>
          <div className='chekout-form__checkbox-section'>
            <input type='checkbox'></input>
            <p>You agrree with we use your personal info</p>
          </div>
          <button className='checkout-form__order-button'>Order</button>
        </form>
        <Cart isOpenCart={isOpenCart} setIsOpenCart={setIsOpenCart}/>
    </div>
  )
}

export default page
