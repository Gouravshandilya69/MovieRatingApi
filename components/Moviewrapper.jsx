"use client"
import React, { useEffect, useState,useContext } from 'react'
import Link from 'next/link'
import axios from "axios"
import Card from './Card'

function Moviewrapper({btn1,btn2}) {
  const [buttonActive, setButtonActive] = useState(true)
  const [buttonActive2, setButtonActive2] = useState(false)
  const [todayApi,setTodayApi]=useState(false)
  const [thisWeekApi,setThisWeekApi]=useState(false)

  const [apiData,setApiData]=useState([])
  // const [newTrendTodayData,setTrendTodayData] = useState([])
  // const [newTrendweekData,setTrendweekData] = useState([])

  function handleClick() {

    setButtonActive(!buttonActive)
    setButtonActive2(false)
    setTodayApi(true)
  }
  function handleClick2() {
    setButtonActive2(!buttonActive2)
    setButtonActive(false)
    setThisWeekApi(true)
  }
 async  function  trendtodayFatch(){
   const apiData = await axios.get("https://api.themoviedb.org/3/trending/all/day?api_key=8fa1d7ebd4f44371dfeba46c72f4153a&page=1")
   setApiData(apiData.data.results)
   setTodayApi(false)
  }
  useEffect(()=>{
   trendtodayFatch()
  },[todayApi])
  async  function  trendweekFatch(){
    setApiData([])
    const apiData = await axios.get("https://api.themoviedb.org/3/trending/all/week?api_key=8fa1d7ebd4f44371dfeba46c72f4153a&page=1")
    setApiData(apiData.data.results)
    setThisWeekApi(false)
   }
   useEffect(()=>{
    trendweekFatch()
   },[thisWeekApi])
  return (
    <div className='mt-[4vw] wrapper'>
      <div className='flex gap-4 items-center ml-4 md:ml-0'>
        <h1 className='font-semibold text-xl'>Trending</h1>
        <div className='  border border-black  rounded-[100px]  space-x-4'>
          <button onClick={()=>handleClick()} className={`btn-text ${buttonActive ? "bg-[#032541] text-white" : " bg-transparent"} py-1 px-4 rounded-[100px]`}>{btn1}</button>
          <button onClick={()=>handleClick2()} className={` btn-text py-1 px-4 ${buttonActive2 ? "bg-[#032541] text-white" : " bg-transparent"}  rounded-[100px] `}>{btn2}</button>
        </div>
      </div>
      <div className='moviewrapper mt-4   w-full flex gap-6 min-h-[300px] overflow-x-auto'>

      
        { apiData.map((data)=>{
         
          return <Link  href={`/movie/${data.id}`} key={data.id} > <Card key={data.id} {...data}/> </Link>
        })
       }
     



       
   
     

       
      


      </div>
    </div>
  )
}

export default Moviewrapper