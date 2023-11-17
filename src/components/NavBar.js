import { useState, useEffect } from "react";
import Book from "./Book";


function NavBar(props) {


    return (
        <div className="NavBar">

            {
                props.canGoBack 
                    ? <div className="NavBar_goBackToBookList" onClick={props.goBackToSearch}>&#8249;</div>
                    : <></>
            }
            <h1 className="NavBar_title">
                {
                    props.name && props.isReadingBook ? props.name : "Bible App"
                }
            </h1>
            {
                props.isReadingBook
                    ? <div className="NavBar_set">
                        {
                            props.set ? props.set : ". . ."
                        }
                    </div>
                    : <></>
            }
        </div>
    );
}

export default NavBar;
