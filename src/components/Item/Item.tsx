'use client'
import React from 'react'
import './Item.scss'
import Image from "next/image";
import item from '../../img/img.png';
import Link from 'next/link';

interface ItemProp {
  id: Number,
  label: String,
  price: Number
}

const Item = (prop: ItemProp) => {
  const [ifItemHover, setIfItemHover] = React.useState(false);

  return (
    <Link href={'/products/' + prop.id}
      className="item fade-in"
      onMouseMove={() => {setIfItemHover(true)}}
      onMouseLeave={() => {setIfItemHover(false)}}
      style={{textDecoration: 'none'}}
    >
      <Image    
        src={item}
        alt="item"
        className='item-img'
        priority
        style={{objectFit: 'contain'}}
      />
      <p className="item-label" style={ifItemHover ? {opacity: 1, transition: " opacity 0.25s ease-in-out"} : {opacity: 0}}>{prop.label}</p>
      <p className="item-price" style={ifItemHover ? {opacity: 1, transition: " opacity 0.25s ease-in-out"} : {opacity: 0}}>{prop.price} mdl</p>     
    </Link>
  )
}

export default Item
