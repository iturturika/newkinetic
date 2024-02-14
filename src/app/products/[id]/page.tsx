'use client'
import React from 'react'
import Header from "@/components/Header/Header";
import Cart from "@/components/Cart/Cart";
import './page.scss'
import item from '../../../img/img.png'
import Image from 'next/image'

const page = () => {
  const [isOpenCart, setIsOpenCart] = React.useState<any>(false);
  return (
    <div className='product-page'>
      <Header setIsOpenCart={setIsOpenCart}/>
      <Cart isOpenCart={isOpenCart} setIsOpenCart={setIsOpenCart}/>
      <Image    
            src={item}
            alt="item"
            className='product-item-img'
            priority
            style={{objectFit: 'contain'}}
        />
    </div>
  )
}

export default page
