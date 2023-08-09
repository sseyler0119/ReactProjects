import Book from "./Book";
import './booklist.css';

import { bookdata } from "../bookdata";


const BookList = () => {
  return (
    <>
      <section className='booklist'>
        {bookdata.map((book) => {
          return <Book {...book} key={book.id} />
        })}
      </section>
    </>
  )
}

export default BookList