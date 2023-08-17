import React from 'react';
import HouseCard from '../Cards';

const CardContainer = ({houses})=>{
    return(
        <>
        
        {houses.length && houses.map((house)=><HouseCard house={house}/>)}
       
           
            
          
        </>
    );
}
export default CardContainer;