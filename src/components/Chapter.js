import Verse from "./Verse";

function Chapter(props) {

    return (
        <div className="Chapter">
            <h2 className="Chapter_title">{`CHAPTER ${props.id + 1}`}</h2>
            <div className="verseContainer">
                {
                    props.verses.length > 0 && props.verses.map((verse, i) => {
                        
                        return (
                        <Verse 
                            key={i} 
                            id={i} 
                            cv={`${verse.chapterId} : ${verse.verseId}`} 
                            verse={verse.verse}
                        />)
                    })
                }
            </div>
        </div>
    );
}

export default Chapter;
