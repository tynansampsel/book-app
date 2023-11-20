import { useState, useEffect } from "react";
import Chapter from "./Chapter";

function ReadPage(props) {
    const [chapters, setChapters] = useState([]);
    const [chaptersWithVerses, setChaptersWithVerses] = useState([]);


    //gets the chapters of the current book.
    useEffect(() => {
        fetch(`https://bible-go-api.rkeplin.com/v1/books/${props.bookId}/chapters`)
            .then(res => res.json())
            .then(data => {
                setChapters(data)
            })
            .catch(error => {
                console.error("error trying to fetch chapters: ", error.message)
                throw error
            })
    }, [])


    //used the get the verses of a chapter in the below function
    const getVersesFromChapter = (chapter) => {
        return fetch(`https://bible-go-api.rkeplin.com/v1/books/${props.bookId}/chapters/${chapter}`)
                .then(res => res.json())
                .then(data => {
                    return data
                })
                .catch(error => {
                    console.error("error trying to fetch verses from chapter: ", error.message)
                    throw error
                })
    }

    //gets all the verses of all the chapters concurrently. 
    useEffect(() => {
        Promise.all(chapters.map(c => getVersesFromChapter(c.id)))
        .then((values) =>  setChaptersWithVerses(values) );
    }, [chapters])

    return (
        <div className="ReadPage">
            <div className="chapterContainer">
            {
                chaptersWithVerses.length > 0 && chaptersWithVerses.map((chapterVerses, i) => {
                    return (
                    <Chapter 
                        key={i} 
                        id={i} 
                        verses={chapterVerses}
                    />)
                })
            }
            </div>
        </div>
    );
}

export default ReadPage;
