import { useState, useEffect } from "react";
import Verse from "./Verse";


function Chapter(props) {

    return (
        <div className="Chapter">
            <div className="verseContainer">
            {
                props.verses.length > 0 ? props.verses.map((verse, i) => {
                    return <Verse key={i} id={i} cv={`${verse.chapterId} : ${verse.verseId}`} verse={verse.verse}/>
                }) : <></>
            }
            </div>
            <Verse/>
        </div>
    );
}

export default Chapter;
