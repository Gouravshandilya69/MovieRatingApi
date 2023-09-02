'use client'

import Moviescard from './Moviescard'

function Moviescards({PopularData}) {
 
  return (

    
    <div className='flex flex-wrap gap-6 justify-center pt-8'>

    {PopularData.map((a)=>{
        return <Moviescard CardData={a}></Moviescard> 
    })}
    </div>
      
  )
}

export default Moviescards
