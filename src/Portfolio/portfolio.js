import React from 'react';
import Title from '../Title/title';
import Project from '../Portfolio/project'

const portfolio = (props) => {

    const experiences = [
        {
            imgSrc: "",
            projectName: "Animal Crossing",
            projectType:"Game Development",
            href: ""
        },
        {
            imgSrc: "",
            projectName: "Hidden Fish Website Re-Design",
            projectType:"Restaurant Website",
            href: ""
        },
        {
            imgSrc: "",
            projectName: "Test project name",
            projectType:"Test project type",
            href: ""
        },
        {
            imgSrc: "",
            projectName: "Test project name",
            projectType:"Test project type",
            href: ""
        },
        {
            imgSrc: "",
            projectName: "Test project name",
            projectType:"Test project type",
            href: ""
        },
        {
            imgSrc: "",
            projectName: "Test project name",
            projectType:"Test project type",
            href: ""
        },
    ];
    return (
        <div className="about background-layer">
            <div className="container section">
                <Title id="Portfolio" title="Portfolio." />

                <div className="grid">
                    
                    {
                        experiences.map( obj => {
                            return (<Project projectName={obj.projectName} projectType={obj.projectType} src={obj.imgSrc}/>)
                        })
                    }

                </div>     
            </div>
        </div>
   )
}   


export default portfolio

