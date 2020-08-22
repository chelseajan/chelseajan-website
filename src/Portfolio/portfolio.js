import React from 'react';
import Title from '../Title/title';
import Project from '../Portfolio/project'

const portfolio = (props) => {

    const experiences = [
        {
            name: "Animal Crossing New Horizons",
            type:"Game Development",
            href: ""
        },
        {
            src: "/media/hiddenfish.png",
            name: "Hidden Fish Website Re-Design",
            type:"Restaurant Website",
            href: ""
        },
        {
            name: "Test project name",
            type:"Test project type",
            href: ""
        },
        {
            name: "Test project name",
            type:"Test project type",
            href: ""
        },
        {
            name: "Test project name",
            type:"Test project type",
            href: ""
        },
        {
            name: "Test project name",
            type:"Test project type",
            href: ""
        },
    ];
    return (
        <div className="portfolio background-layer">
            <div className="container section">
                <Title id="Portfolio" title="Portfolio." />

                <div className="grid">
                    {
                        experiences.map( (project, index) => {
                            return (
                            <Project key={index} index={index} projectName={project.name} projectType={project.type} src={project.src} />
                            )
                        })
                    }
                </div>     
            </div>
        </div>
   )
}   


export default portfolio

