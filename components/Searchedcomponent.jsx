import React from 'react'
import Searchcard from './Searchcard'
function Searchedcomponent({ foundData }) {
    <div className='min-w-[15%] min-h-[100%] '> 
         
        </div>


    return (
        <div className='flex w-[100%] h-[100%]'>
      
        <div className='w-[100%] h-[100%] bg-[#FFFFFF] overflow-scroll flex flex-wrap  gap-5 pt-[15px] justify-center'>
       { foundData.map((g)=>{
     return <Searchcard g={g}></Searchcard>
    })}
       
        </div>
        </div>
    )
}

export default Searchedcomponent
