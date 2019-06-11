import React from 'react';

var imagetemp = "https://robohash.org/";


const Card = (props) => {

    var idrandomizer = props.id;
    var url = imagetemp + idrandomizer + "?200x200";

    return (
        <div className = "tc bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5">
            <img  src = {url}/>
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    );
}

export default Card;