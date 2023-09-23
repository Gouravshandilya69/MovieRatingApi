import React from 'react'
import logo from "../components/imagenotfound.png"
function Searchcard({g}) {
   console.log(g)
  return (
   <>
    
    <div key={g.id} className='w-[28vh] bg-[#FFFFFF] h-[55vh] rounded-2xl overflow-hidden drop-shadow-lg'>
 
         {!g.poster_path && <div className=' min-h-[70%] w-[100%] '><img className='w-[100%] h-[100%] object-cover' src={logo} alt="" /></div>}
         {g.poster_path && <div className=' min-h-[70%] w-[100%] ' ><img className='w-[100%] h-[100%] object-cover' src={`https://image.tmdb.org/t/p/w440_and_h660_face${g.poster_path}`} alt="" /></div>}
 
 
         <div className='h-[20%] w-[100%] pl-[1vh] gap-2 '>
             {g.original_name && <h1 className='text-black text-[2vh]'>{g.original_title}</h1>}
             {!g.original_name && <h1 className='text-black text-[2vh]'>{g.title}</h1>}
             <h1 className='text-black text-[2vh]'>{g.name}</h1>
             <h3 className='text-black'>{g.release_date}</h3>
             {g.first_air_date&& <h3 className='text-black'>{g.first_air_date}</h3>}
         </div>
 
 
     </div>
   
    </>
  )
}

export default Searchcard
