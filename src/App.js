
import { useState, useEffect } from "react";
import './styles/App.css';
import './styles/layout.css';
import './styles/style.css';
import BookListPage from './components/BookListPage.js';
import ReadPage from './components/ReadPage.js';
import Navbar from './components/Navbar.js';

function App() {
    const [isSearchingPage, setIsSearchingPage] = useState(true);
    const [bookId, setBookId] = useState(1);
    const [book, setBook] = useState({});

    //called by a Book in BookListPage 
    //sets the current book to the one clicked on the BookListPage and changes to ReadPage.
    const goToBook = (newBookId) => {
        setBook({});
        setBookId(newBookId);
        setIsSearchingPage(false);

        fetch(`https://bible-go-api.rkeplin.com/v1/books/${newBookId}`)
        .then(res => res.json())
        .then(data => {
            setBook(data)
        })
        .catch(error => {
            console.error("error trying to fetch book data: ", error.message)
            throw error
        })
    }

    //called by the navbar back button on the ReadPage
    //goes back to the BookListPage
    const goBackToSearch = () => {
        setIsSearchingPage(true)
    }


    return (
        <div className="App">
            <Navbar isReadingBook={!isSearchingPage} book={book} goBackToSearch={goBackToSearch}/>
            <div className="navbarSpacer"/>
            {
                isSearchingPage
                ? <BookListPage goToBook={goToBook} />
                : <ReadPage bookId={bookId} chapterId={1} />
            }
        </div>
    );
}

export default App;