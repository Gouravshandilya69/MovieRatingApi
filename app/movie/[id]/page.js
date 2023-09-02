"use client"
import Navbar from '@/components/Navbar'
import Showhero from '@/components/Showhero'
import Cast from '@/components/cast'
import React, {useState,useContext, useEffect} from 'react'
import axios from 'axios'

function  page({params}) {

  const[newApiData,setApiData]=useState([])
 
 async function api(){

   const ap = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=8fa1d7ebd4f44371dfeba46c72f4153a`)
   const gg = await ap.json()
   setApiData(gg)
    
  }
  useEffect(()=>{
    api()
  },[])
return (
    <div>
        <Navbar/>
         <Showhero showDetails = {newApiData} />
         <Cast showDetails = {newApiData} />
        </div>
  )
}

export default page