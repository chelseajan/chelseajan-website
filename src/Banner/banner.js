import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'

const banner = (props) => {
 return (
   
    <Jumbotron fluid className="banner">
        <div className="container">
            <h1>{props.greeting}</h1>
            <h1>My name is {props.name}.</h1>
            <div className="title">{props.title}</div>
        </div>
        
    </Jumbotron>

   )
}   

export default banner

