import React from 'react';
import Card from './Card';

const CardList = (props) => {

    let CurrentCard = props.directory.map(user=>{
        return(<Card key = {user.id} name = {user.name} email = {user.email} id = {user.id}/>); 
    })

    return <div>{CurrentCard}</div>;
 
    }
    
    export default CardList;
