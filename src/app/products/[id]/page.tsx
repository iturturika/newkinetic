'use client'
import React from 'react'
import Header from "@/components/Header/Header";
import Cart from "@/components/Cart/Cart";
import './page.scss'

const page = () => {
  const [isOpenCart, setIsOpenCart] = React.useState<any>(false);
  return (
    <div className='product-page'>
      <Header setIsOpenCart={setIsOpenCart}/>
      <Cart isOpenCart={isOpenCart} setIsOpenCart={setIsOpenCart}/>
    </div>
  )
}

export default page
