import { useState, useEffect } from "react";


function SearchResult(props) {



    return (
        <div className="SearchResult" onClick={() => props.goToBook(props.bookId)}>
            
           <h2 className="SearchResult_title">{props.title}</h2>

           <h2 className="SearchResult_author">{props.set}</h2>
        </div>
    );
}

export default SearchResult;
