import React from 'react'
import './page.scss'
import CartItem from '@/components/CartItem/CartItem'

const page = () => {
  return (
    <div className='admin-panel-section fade-in'>
      <h2>Admin panel</h2>
      <h2>Add item</h2>
      <form className='add-item-form'>
        <input type='file' placeholder='Login' className='add-item-form__input'></input>
        <input placeholder='Label' className='add-item-form__input'></input>
        <input placeholder='Price' className='add-item-form__input'></input>
        <select className='add-item-form__select'>
            <option>Select</option>
          </select>
        <button className='add-item-form__button'>Add</button>
      </form>
      <h2>Items</h2>
      <div className='admin-panel-items-section'>
        <CartItem />
      </div>
    </div>
  )
}

export default page
