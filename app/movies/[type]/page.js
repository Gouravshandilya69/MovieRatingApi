'use client'
import React, { useEffect, useState } from 'react'

import Navbar from '@/components/Navbar'
import Moviescards from '@/components/Moviescards'

function page() {


  const [newData, setNewData] = useState([])


  async function popularApi() {
    const pathname = window.location.pathname
    const splitedPath = pathname.split("/")
    const changeableName = splitedPath[splitedPath.length - 1]
    const fetchedData = await fetch(`https://api.themoviedb.org/3/movie/${changeableName.toString()}?api_key=8fa1d7ebd4f44371dfeba46c72f4153a&page=1`)
    const finalData = await fetchedData.json()

    setNewData(finalData.results)
  }

  useEffect(() => {
    popularApi()

  }, [])
  return (
    < >
      <Navbar></Navbar>
      <div className=' w-[100vw]  min-h-[100vh] flex justify-center  flex-wrap'>
        <Moviescards PopularData={newData}></Moviescards>
      </div>
    </>
  )
}

export default page
