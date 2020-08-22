import React from 'react';
import Title from '../Title/title';


const aboutMe = (props) => {
 return (
   <div className="portfolio background-layer">
   <div className="container section">
      <Title id="aboutme" title="About me." />
      <div className="grid">
         <div className="bio">
            <p class="larger">Hey there! My name is Chelsea Jan, and I've been in the biotech industry designing solutions for personalized healthcare for the past 2 years.
            </p>
            

            <p>
               Based in sunny San Diego, CA, I am front-end developer with relentless dedication to perfecting the details. My passion in UI design and development all started about 1.5 years ago when I found myself often asking, "How can I improve the experience of using [some product] better?" I'm drawn the challenges of front-end development because I love problem solving, delivering a product that is fresh and fun to use, and completely immersing myself in projects.
            </p>

            <p>
               When I'm not coding, you can find me finding balance (mostly falling) at the yoga studio, solving new routes (again, mostly falling) at the climbing gym, or exploring the world around me on my road/mountain bikes.
            </p>
            <p>
               A few years ago, I completed my B.S. in Bioengineering from the University of California, San Diego, where I consumed too many cups of coffee to count, published my first publication in cardiovascular imaging, and raced competitively (lots of falling) in collegiate road cycling.
            </p>
         
         </div>
      </div>
          
   </div>
</div>

   )
}   

export default aboutMe

