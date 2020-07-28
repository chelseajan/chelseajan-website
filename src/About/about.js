import React from 'react';
import Title from '../Title/title';

const about = (props) => {
 return (
    <div className="about background-layer">
        <div className="container section">
        <Title id="About" title="About Me." />

        <div className="grid">
            <h3 className="about-pitch">Product Manager turned Web Developer with insatiable curisioty and an obsession for connecting the big picture to the finer details in software design.</h3>

            <ul className="fact-list">
                <li className="fact-item">Proven track record of translating and synthesizing business requirements and user needs into potential software solutions</li>
                <li className="fact-item">Passionate in bringing concepts on paper (mockups and wireframes) to life (using HTML/CSS and JavaScript)</li>
                <li className="fact-item">Experienced in leading cross-site and remotely located software development teams in a CI/CD pipeline (Github, TeamCity, Jira)</li>
                <li className="fact-item">Embraces ambiguity during ideation and conception</li>
                <li className="fact-item">Strong understanding in Agile Methodolody (writing user stories, managing product backlog, prioritizing defects) </li>
            </ul>
            <a href="#">A little bit more info please!</a>
        </div>     
    </div>
    </div>
    
   )
}   

export default about

