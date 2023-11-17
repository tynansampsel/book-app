import { useState, useEffect } from "react";
import Chapter from "./Chapter";


function ReadPage(props) {
    const [chapters, setChapters] = useState([]);
    const [chaptersWithVerses, setChaptersWithVerses] = useState([]);
    const [currentChapter, setCurrentChapter] = useState(1);
    const [verses, setVerses] = useState([]);


    useEffect(() => {
        fetch(`https://bible-go-api.rkeplin.com/v1/books/${props.book}/chapters`) //(`https://bible-go-api.rkeplin.com/v1/books/${props.book}/chapters/${props.chapter}`
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setChapters(data)
            })
            .catch(err => console.error("error: ", err))
    }, [])

    const getVersesFromChapter = (chapter) => {
        return fetch(`https://bible-go-api.rkeplin.com/v1/books/${props.book}/chapters/${chapter}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
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

    return (
        <div className="ReadPage">
            <div className="chapterContainer">
            {
                chaptersWithVerses.length > 0 ? chaptersWithVerses.map((chapter, i) => {
                    return <Chapter key={i} id={i} verses={chapter}/>
                }) : <></>
            }
            </div>
        </div>
    );
}

export default ReadPage;
