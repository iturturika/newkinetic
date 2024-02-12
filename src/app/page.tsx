'use client'
import React from "react";
import "./page.scss";

import Header from "@/components/Header/Header";
import Item from "@/components/Item/Item";

export default function Home() {
  const [isOpenCart, setIsOpenCart] = React.useState<any>(false);
  return (
    <main className="main-page">
      <Header setIsOpenCart={setIsOpenCart}/>
      <div className="items-section">
        <Item />
      </div>
      <div className={'cart-section'} style={isOpenCart ? {right: 0} : {}} >
        <p onClick={() => {setIsOpenCart(false)}}>x</p>
      </div>
    </main>
  );
}
