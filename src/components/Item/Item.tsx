'use client'
import React from 'react'
import './Item.scss'
import Image from "next/image";
import item from '../../img/img.png';

const Item = () => {
  const [ifItemHover, setIfItemHover] = React.useState(false);

  return (
    <div className="item fade-in"
        onMouseMove={() => {setIfItemHover(true)}}
        onMouseLeave={() => {setIfItemHover(false)}}
    >
    <Image    
        src={item}
        alt="item"
        className='item-img'
        priority
        style={{objectFit: 'contain'}}
    />
    <p className="item-label" style={ifItemHover ? {opacity: 1, transition: " opacity 0.25s ease-in-out"} : {opacity: 0}}>KINETIC T</p>
    <p className="item-price" style={ifItemHover ? {opacity: 1, transition: " opacity 0.25s ease-in-out"} : {opacity: 0}}>300 mdl</p>
    </div>
  )
}

export default Item
