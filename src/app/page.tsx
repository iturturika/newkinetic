'use client'
import React from "react";
import "./page.scss";
import Header from "@/components/Header/Header";
import Item from "@/components/Item/Item";
import Cart from "@/components/Cart/Cart";


export default function Home() {
  const [isOpenCart, setIsOpenCart] = React.useState<Boolean>(false);
  const [items, setItems] = React.useState([{id: 1, label: "Kinetic T-shirt", price: 300}, {id: 2, label: "Kinetic T-shirt", price: 300}, {id: 3, label: "Kinetic T-shirt", price: 300}, {id: 4, label: "Kinetic T-shirt", price: 300}, {id: 5, label: "Kinetic T-shirt", price: 300}, {id: 6, label: "Kinetic T-shirt", price: 300}, {id: 7, label: "Kinetic T-shirt", price: 300}, {id: 8, label: "Kinetic T-shirt", price: 300}, {id: 9, label: "Kinetic T-shirt", price: 300}, {id: 10, label: "Kinetic T-shirt", price: 300}]);
  
  interface Item {
    id: Number,
    label: String,
    price: Number
  }

  return (
    <main className="main-page">
      <Header setIsOpenCart={setIsOpenCart}/>
      <div className="items-section">
        {
          items.map((item:Item) => {
            return (
              <Item id={item.id} key={item.id} label={item.label} price={item.price}/>
            )
          })
        }
      </div>
      <Cart isOpenCart={isOpenCart} setIsOpenCart={setIsOpenCart}/>
    </main>
  );
}
