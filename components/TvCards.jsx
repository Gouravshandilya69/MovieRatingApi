import React from 'react'
 import Tvcard from './Tvcard'
function TvCards({PopularData}) {
  return (
  
    <div className='flex flex-wrap gap-6 justify-center pt-8'>

    {PopularData.map((a)=>{
        return <Tvcard CardData={a}></Tvcard> 
    })}
    </div>
      
   
  )
}

export default TvCards
