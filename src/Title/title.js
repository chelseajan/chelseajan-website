import React from 'react';

const title = (props) => {
 return (
    <section className="title" id={props.id}>
        <h1>{props.title}</h1>
    </section>
   )
}   

export default title

