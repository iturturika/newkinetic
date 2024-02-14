'use client'
import React from "react";
import "./page.scss";
import Header from "@/components/Header/Header";
import Item from "@/components/Item/Item";
import Cart from "@/components/Cart/Cart";


export default function Home() {
  const [isOpenCart, setIsOpenCart] = React.useState<any>(false);
  return (
    <main className="main-page">
      <Header setIsOpenCart={setIsOpenCart}/>
      <div className="items-section">
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
      <Cart isOpenCart={isOpenCart} setIsOpenCart={setIsOpenCart}/>
    </main>
  );
}
