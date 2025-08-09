import React from 'react'
import { CiTrash } from "react-icons/ci";


const Card = ({book, handleDelete}) => {
    console.log(book)
  return (
    <div className='d-flex justify-content-between p-4 border mt-4 rounded align-items-center shadow'>
        <div>
            <h3>{book.bookName}</h3>
            <p className='lead'>{book.date}</p>
        </div>

        <button onClick={()=>{
            handleDelete(book.id)
        }} className='btn btn-danger'>
        <CiTrash className='fs-3' />
        </button>
      
    </div>
  )
}

export default Card
