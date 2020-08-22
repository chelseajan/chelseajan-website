import React from 'react';
import Title from '../Title/title';


const work = (props) => {
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
    <div className="contact background-layer">
        <div className="container section">
            <Title id="Contact" title="Contact."/>
            <div className="grid">
              <div className="work-column">
              </div>

              <div className="work-column">
              </div>

                <div className="work-column">
                  <h4>Write me an email. </h4>
                  <a href = "mailto: chelsealjan@gmail.com">chelsealjan@gmail.com</a>

                </div>

                <div className="work-column">
                  <h4>Or Social Media, if that's your thing.</h4>
                  <ul>
                  {
                    socialLinks.map (data => {
                        return (
                        <li><a className="social-link" href={data.href}>{data.site}</a></li>
                        )
                    })
                  }
                  </ul>

                </div>
            </div>
        </div>
    </div>
        
    )
}

export default work

