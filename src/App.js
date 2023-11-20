
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


    useEffect(() => {
        
    }, [bookId])

    const goToBook = (newBook) => {
        console.log("click")
        setBook({});
        setBookId(newBook);
        setIsSearchingPage(false);

        fetch(`https://bible-go-api.rkeplin.com/v1/books/${newBook}`)
        .then(res => res.json())
        .then(data => {
            setBook(data)
        })
        .catch(err => console.error("error: ", err))
    }

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
// special thanks to https://www.rkeplin.com/the-holy-bible-open-source-rest-api/
