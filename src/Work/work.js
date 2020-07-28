import React from 'react';
import Pdf from '../Resume-ChelseaJan-072020.pdf';
import Title from '../Title/title';


const work = (props) => {
    const resume = [
        {   
            title: "Product Manager",
            company: "Illumina",
            dateStart: "10/2018",
            dateEnd: "Present", 
            
        },
        {   
            title: "Software Test Engineer",
            company: "Illumina",
            dateStart: "06/2018",
            dateEnd: "10/2018"
        },
        {   
            title: "Teaching Assistant",
            company: "UC San Diego Bioengineering",
            dateStart: "01/2018",
            dateEnd: "03/2018"
        }
    ];

    
    return (
        <div className="work background-layer">
            <div className="container section">
                <Title id="Work" title="Work Experience."/>
                <div className="grid">
                    <div className="work-column">
                        <a href = {Pdf} target = "_blank">Get my resume as pdf.</a>
                    </div>
                    {
                        resume.map(position => { return (
                            <div className="work-experience">
                                <h4>{position.title} @ {position.company}</h4>
                                <div className="work-dates">{position.dateStart} - {position.dateEnd}</div>
                            </div>
                        )})
                    }
                </div>
            </div>
        </div>
        
    )
}

export default work

