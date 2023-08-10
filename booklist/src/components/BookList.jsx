import Book from "./Book";
import './booklist.css';

import { bookdata } from "../bookdata";


const BookList = () => {
  return (
    <>
      <h1>amazon best sellers</h1>
      <section className='booklist'>
        {bookdata.map((book, index) => {
          return <Book {...book} key={book.id} number={index} />
        })}
      </section>
    </>
  )
}

export default BookList