'use client'
import React from 'react'
import Header from "@/components/Header/Header";
import Cart from "@/components/Cart/Cart";
import './page.scss'
import item from '../../../img/img.png'
import Image from 'next/image'

const page = () => {
  const [isOpenCart, setIsOpenCart] = React.useState<any>(false);
  const [isOpenSizeGuide, setIsOpenSizeGuide] = React.useState<any>(false);
  return (
    <div className='product-page'>
      <Header setIsOpenCart={setIsOpenCart}/>
      <Cart isOpenCart={isOpenCart} setIsOpenCart={setIsOpenCart}/>
      <div className='product-page-item fade-in'>
        <div className='product-page__img-collection'>
          <Image    
            src={item}
            alt="item"
            className='product-item-img'
            priority
            style={{objectFit: 'contain'}}
          />
          <Image    
            src={item}
            alt="item"
            className='product-item-img_selected'
            priority
            style={{objectFit: 'contain'}}
          />
        </div>

        <div className='product-page__main-img'>
          <Image    
            src={item}
            alt="item"
            priority
            style={{objectFit: 'contain', width: '40%', height: 'auto'}}
          />
        </div>

        <div className='product-page__info'>
          <div className='product-page__info-label-and-price'>
            <p>BASIC T-SHIRT BLACK</p>
            <p>360mdl</p>
          </div>
          <select className='product-page-select'>
            <option>SIZE</option>
          </select>
          <button className='product-page-add-to-cart-button'>ADD TO CART</button>
          <div className='product-page__info-size'>
            <p onClick={() => {setIsOpenSizeGuide(!isOpenSizeGuide)}} style={{marginBottom: '20px'}}>SIZE GUIDE</p>
            {
              isOpenSizeGuide ?
              <p style={{marginBottom: '20px'}} className='fade-in'>
                SIZE  1 2 3<br/>
                US  6-8.5 9-10.5 11-13<br/>
                BROTHER IS SIZE US 11 HE IS WEARING A SIZE 3<br/>
              </p>
              : null
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
