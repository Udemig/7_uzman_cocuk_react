import React, { useState } from 'react'
import Card from './Card';
import { toast } from 'react-toastify';
import { v4 } from 'uuid';

const Form = () => {
    const [books, setBooks] = useState([]);

    const handleSubmit = (e) =>{
        e.preventDefault()
        
        const bookName = e.target[0].value

        if(!bookName){
            toast.info("Eklemek istediğiniz kitap adını giriniz!")
        }

        const newBook = {
            id: v4(),
            date: new Date().toLocaleDateString("tr", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
            })
            .replaceAll(".", "/"),
            bookName,
        };

        setBooks([...books, newBook]);

        e.target.reset();

        toast.success("Kitap Başarıyla Eklendi!")
    };

    const handleDelete = (delete_id) => {
       const filterBooks = books.filter((book) => book.id !== delete_id)

       setBooks(filterBooks);

       toast.error("Kitap Başarıyla Silindi!")
    }

    

  return (
    <>
    <form onSubmit={handleSubmit} className='d-flex justify-content-center mt-5 gap-4'>
        <input placeholder='Kitap Adı Giriniz...' className='form-control w-50 shadow' type="text" />
        <button className='btn btn-warning shadow'>Ekle</button>
      
    </form>

    <div className='container'>
        {
            books.map((book, key) => (
                <Card key={key} book={book} handleDelete={handleDelete} />
            ))
        }

    </div>

    
    
    </>
  )
}

export default Form
