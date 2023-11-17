
import { useState, useEffect } from "react";
import './App.css';
import './layout.css';
import './style.css';
import SearchBar from './SearchBar.js';
import BookListPage from './BookListPage.js';
import ReadPage from './ReadPage.js';

function App() {
    const [isSearchingPage, setIsSearchingPage] = useState(true);
    const [book, setBook] = useState(1);



    useEffect(() => {
    }, [book])

    const goToBook = (newBook) => {
        console.log("click")
        setBook(newBook);
        setIsSearchingPage(false)
    }

    const goBackToSearch = () => {
        setIsSearchingPage(true)
    }

    return (
        <div className="App">
            {
                isSearchingPage
                ? <BookListPage goToBook={goToBook} />
                : <ReadPage book={book} chapter={1} goBackToSearch={goBackToSearch} />
            }
        </div>
    );
}

export default App;
