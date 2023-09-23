'use client'
import React, { useEffect, useState } from 'react'

import Navbar from '@/components/Navbar'
import TvCards from '@/components/TvCards'

function page() {
const [newData, setNewData] = useState([])
   async function popularApi() {
    const pathname = window.location.pathname
    const splitedPath = pathname.split("/")
    const changeableName = splitedPath[splitedPath.length - 1]
    const fetchedData = await fetch(`https://api.themoviedb.org/3/tv/${changeableName.toString()}?api_key=8fa1d7ebd4f44371dfeba46c72f4153a&page=1`)
    const finalData = await fetchedData.json()
    setNewData(finalData.results)
  }

  useEffect(() => {
    popularApi()

  }, [])
  console.log(newData)
  return (
    < >
      <Navbar></Navbar>
      <div className=' w-[182.5vh] bg-gray-700 min-h-[100vh] flex justify-center  flex-wrap'>
        <TvCards PopularData={newData}></TvCards>
      </div>
    </>
  )
}

export default page
