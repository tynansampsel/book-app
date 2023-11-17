import { useState, useEffect } from "react";
import Chapter from "./Chapter";
import ReadOptions from "./ReadOptions";


function ReadPage(props) {
    const [chapters, setChapters] = useState([]);
    const [book, setBook] = useState({});
    const [chaptersWithVerses, setChaptersWithVerses] = useState([]);
    const [currentChapter, setCurrentChapter] = useState(1);
    const [verses, setVerses] = useState([]);


    useEffect(() => {
        fetch(`https://bible-go-api.rkeplin.com/v1/books/${props.book}/chapters`)
            .then(res => res.json())
            .then(data => {
                setChapters(data)
            })
            .catch(err => console.error("error: ", err))

        fetch(`https://bible-go-api.rkeplin.com/v1/books/${props.book}`)
            .then(res => res.json())
            .then(data => {
                setBook(data)
            })
            .catch(err => console.error("error: ", err))
            
    }, [])

    const getVersesFromChapter = (chapter) => {
        return fetch(`https://bible-go-api.rkeplin.com/v1/books/${props.book}/chapters/${chapter}`)
                .then(res => res.json())
                .then(data => {
                    return data
                })
                .catch(err => console.error("error: ", err));
    }

    const getPromiseForEachChapter = () => {
        //return 
    }

    useEffect(() => {
        Promise.all(chapters.map(c => getVersesFromChapter(c.id)))
        .then((values) => {
            console.log(values);
            setChaptersWithVerses(values);
        });
    }, [chapters])

    const getChapterName = () => {}

    return (
        <div className="ReadPage">
            <div className="ReadOptions">
                <div className="ReadOptions_goBackToBookList" onClick={props.goBackToSearch}>&#8249;</div>
                <h1 className="ReadOptions_title">
                    {
                        book.name ? book.name : ". . ."
                    }
                </h1>

                <div className="ReadOptions_set">
                    {
                        book.genre ? book.genre.name : ". . ."
                    }
                </div>
            </div>
            <div className="chapterContainer">
            {
                chaptersWithVerses.length > 0 ? chaptersWithVerses.map((chapterVerses, i) => {
                    
                    return <Chapter key={i} id={i} verses={chapterVerses}/>
                }) : <></>
            }
            </div>
        </div>
    );
}

export default ReadPage;
