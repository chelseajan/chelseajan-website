import React from 'react';
import Title from '../Title/title';
import UsesComputer from './usesComputer'
import UsesPhotography from './usesPhotography';

const uses = (props) => {
 return (
   <div className="uses background-layer">
      <div className="container section">
         <Title id="Uses" title="Uses." />
            <h3 className = "quote">
            We shape our tools and afterwards our tools shape us" -Marshall McLuhan
            </h3>
            <UsesComputer />
            <UsesPhotography />

      </div>
   </div>
   )
}   

export default uses

