import React from 'react';
//import Contacts from './Contacts';

const SearchBox = ({SearchChanger}) => {
    return(
    <div className =" tc pa2">
        <input className = 
        "tc pa3 b b--greeen bg-lightest-blue" type ="search" placeholder = "search directory" 
         onChange = {SearchChanger}></input> 
    </div>
    )
}

export default SearchBox;