import { useState, useEffect } from "react";

function Verse(props) {

    return (
        <div className="Verse">
            <p>{`${props.cv} ${props.verse}`}</p>
        </div>
    );
}

export default Verse;
