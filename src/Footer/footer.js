import React from 'react';
import '../App.css';

const footer = (props) => {
    const socialLinks = [
        {
            site: "LinkedIn",
            href: "https://www.linkedin.com/in/chelseajan/"
        },
        {
            site: "Github",
            href: "https://github.com/chelseajan"
        }
    ];

    
   
    return (
        <footer>
            <div className="container">
                <h4>Need a hand?</h4>
                {
                    socialLinks.map (data => {
                        return (
                        <a className="footer-link" href={data.href}>{data.site}</a>
                        )
                    })
                }
                        <p className="copyright">Designed &amp; Developed by Chelsea Jan 2020</p>   

            </div>
        </footer>

    )}

export default footer