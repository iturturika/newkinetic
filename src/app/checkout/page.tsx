'use client'
import React from 'react'
import './page.scss'
import Header from "@/components/Header/Header";
import Cart from "@/components/Cart/Cart";

const page = () => {
const [isOpenCart, setIsOpenCart] = React.useState<any>(false);
  return (
    <div className='checkout-page'>
        <Header setIsOpenCart={setIsOpenCart}/>
        <Cart isOpenCart={isOpenCart} setIsOpenCart={setIsOpenCart}/>
    </div>
  )
}

export default page
