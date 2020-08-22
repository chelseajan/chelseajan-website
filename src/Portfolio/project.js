import React from 'react';
import { Link } from "react-router-dom";
import { Button } from 'semantic-ui-react'



const portfolio = (props) => {

    return (
    <Link to="/">
        <Button className="project">
            <img className="project-img" src={props.src} />

            <div className="project-description">
                <h4 className="project-name">{props.projectName}</h4>
                <p className="project-type">{props.projectType}</p>
            </div>
        </Button>
    </Link>

   )
}   

export default portfolio

