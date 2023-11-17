import { useState, useEffect } from "react";
import Book from "./Book";


function BookListPage(props) {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch(`https://bible-go-api.rkeplin.com/v1/books`)
        .then(res => res.json())
        .then(data => {
          setBooks(data);
        })
        .catch(err => console.error("error: ", err))

    }, [])

    const hasSearchResults = () => { return books.length > 0}

    return (
        <div className="BookListPage">
             <div className="titleBar">
                <h1 className="titleBar_header">
                    Bible App
                </h1>
            </div>
            <div className="bookContainer">
            {
                hasSearchResults() ? books.map((book, i) => {
                    return <Book 
                    key={i} 
                    bookId={book.id} 
                    title={book.name} 
                    set={book.genre.name} 
                    goToBook={props.goToBook}
                    />
                }) : <></>
            }
            </div>
        </div>
    );
}

export default BookListPage;
