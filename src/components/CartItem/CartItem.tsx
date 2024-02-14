import React from 'react'
import './CartItem.scss'
import item from '../../img/img.png'
import Image from 'next/image'

const CartItem = () => {
  return (
    <div className='cart-item'>
        <Image    
            src={item}
            alt="item"
            className='cart-item-img'
            priority
            style={{objectFit: 'contain'}}
        />
        <div className='cart-item-information'>
            <div className='cart-item-label'>
                <p>KINETIC T-SHIRT BLACK</p>
                <p>360</p>
            </div>
            <div className='cart-item-size'>
                <p>SIZE: 1</p>
                <p>MDL</p>
            </div>
            <div className='cart-item-controls'>
                <div className='cart-item-iterator'>
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" fill="none" viewBox="0 0 10 2" width="10" height="10" style={{cursor: 'pointer'}}>
                        <path fillRule="evenodd" clipRule="evenodd" d="M.5 1C.5.7.7.5 1 .5h8a.5.5 0 110 1H1A.5.5 0 01.5 1z" fill="currentColor" />
                    </svg>
                    <p style={{opacity: 1}}>1</p>
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" fill="none" viewBox="0 0 10 10" width="10" height="10" style={{cursor: 'pointer'}}>
                        <path fillRule="evenodd" clipRule="evenodd" d="M1 4.51a.5.5 0 000 1h3.5l.01 3.5a.5.5 0 001-.01V5.5l3.5-.01a.5.5 0 00-.01-1H5.5L5.49.99a.5.5 0 00-1 .01v3.5l-3.5.01H1z" fill="currentColor"/>
                    </svg>
                </div>
                <p style={{fontSize: 12, cursor: 'pointer'}}>REMOVE</p>
            </div>
        </div>
    </div>
  )
}

export default CartItem
