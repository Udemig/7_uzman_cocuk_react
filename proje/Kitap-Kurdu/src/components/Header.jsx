import React from 'react'
import { IoBook } from "react-icons/io5";

const Header = () => {
  return (
    <header className='d-flex align-items-center justify-content-center bg-dark text-white py-3'>
      <IoBook className='text-success'  style={{fontSize: "50px"}} />

      <h1 className='fw-bold ms-2'>Kitap Kurdu</h1>
    </header>
  )
}

export default Header
