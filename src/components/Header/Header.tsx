import React from 'react'
import './Header.scss'



const Header = ({setIsOpenCart} : {setIsOpenCart: any}) => {
  return (
    <header className="header fade-in"><p className="logo">KINETIC</p><p className="cart" onClick={() => {setIsOpenCart(true)}}>cart (1)</p></header>
  )
}

export default Header
