import { useState, useEffect } from "react";
import Book from "./Book";


function BookListPage(props) {
    const [books, setBooks] = useState([]);

    //gets all the books of the bible and lists them.
    useEffect(() => {
        fetch(`https://bible-go-api.rkeplin.com/v1/books`)
        .then(res => res.json())
        .then(data => {
          setBooks(data);
        })
        .catch(error => {
            console.error("error trying to fetch books: ", error.message)
            throw error
        })
    }, [])


    return (
        <div className="BookListPage">
            <div className="bookContainer">
            {
                books.length > 0 && books.map((book, i) => {
                    return (
                    <Book 
                        key={i} 
                        bookId={book.id} 
                        title={book.name} 
                        set={book.genre.name} 
                        goToBook={props.goToBook}
                    />)
                })
            }
            </div>
        </div>
    );
}

export default BookListPage;
