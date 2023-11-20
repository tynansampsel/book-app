import { useState, useEffect } from "react";

function Navbar(props) {
    return (
        <div className="Navbar">
            {
                props.isReadingBook && props.book.name
                    ? <>
                        <div className="Navbar_goBackToBookList" onClick={props.goBackToSearch}>&#8249;</div>
                        <h1 className="Navbar_title">
                            {
                                props.book.name ? props.book.name : "Bible App"
                            }
                        </h1>
                        <div className="Navbar_set">
                            {
                                props.book.genre ? props.book.genre.name : ". . ."
                            }
                        </div>

                    </>
                    : <h1 className="Navbar_title">Bible App</h1>
            }
        </div>
    );
}

export default Navbar;
