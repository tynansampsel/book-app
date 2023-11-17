import { useState, useEffect } from "react";
import SearchResult from "./SearchResult";


function BookListPage(props) {
    const [books, setBooks] = useState([]);

    useEffect(() => {

        let search = "a"

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
            {
             hasSearchResults() ? books.map((book, i) => {
                return <SearchResult 
                key={i} 
                bookId={book.id} 
                title={book.name} 
                set={book.genre.name} 
                goToBook={props.goToBook}
                />
            }) : <></>
        }
        </div>
    );
}

export default BookListPage;
