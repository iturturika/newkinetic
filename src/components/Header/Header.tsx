import React from 'react'
import './Header.scss'
import Link from 'next/link'

const Header = ({setIsOpenCart} : {setIsOpenCart: any}) => {
  return (
    <header className="header fade-in"><Link href={'/'} className="logo">KINETIC</Link><p className="cart" onClick={() => {setIsOpenCart(true)}}>cart (1)</p></header>
  )
}

export default Header
