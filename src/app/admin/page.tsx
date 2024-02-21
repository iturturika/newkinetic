import React from 'react'
import './page.scss'

const page = () => {
  return (
    <form className='admin-login-form'>
        <h2>Admin panel</h2>
        <input placeholder='Login' className='admin-login-form__input'></input>
        <input placeholder='Password' className='admin-login-form__input'></input>
        <button className='admin-login-form__button'>Authorize</button>
    </form>
  )
}

export default page
