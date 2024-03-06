import React from 'react'
import './Cart.scss'
import CartItem from '../CartItem/CartItem'

interface CartProp {
    isOpenCart: Boolean,
    setIsOpenCart: any,
}

const Cart = (prop: CartProp) => {
    interface Item {
        id: Number,
        label: String,
        price: Number
    }
    const [cartItems, setCartItems] = React.useState([{id: 1, label: 'Kinetic T-shirt', price: 200}]);

  return (
    <div className={'cart-section'} style={prop.isOpenCart ? {right: 0} : {}} >
        <div className='cart-section-header'>
            <p>cart (1)</p>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => {prop.setIsOpenCart(false)}} className='cart-section_close-button'>
                <path d="M3.65186 3.65161L10.9552 10.9549" stroke="#625C58"></path>
                <path d="M10.9551 3.65161L3.65176 10.9549" stroke="#625C58"></path>
            </svg>
        </div>
        <div className='cart-section-items'>
            {
                cartItems.map((item:Item) => {
                    return (
                        <CartItem key={item.id} id={item.id} price={item.price} label={item.label}/>
                    )
                })
            }
        </div>
        <div className='cart-section-total'>
            <p>SUBTOTAL</p>
            <p>300 mdl</p>
        </div>
        <button className='cart-section-checkout-button'>
            CHECKOUT
        </button>
    </div>
  )
}

export default Cart
