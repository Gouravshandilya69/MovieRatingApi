'use client'
import React, { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Searchedcomponent from '@/components/Searchedcomponent'
function page() {
    const [SearchedApi, setSearchedApi] = useState([])


    async function findData() {
        const pathname = window.location.pathname
        const splited = pathname.split('/')
        const finalSplit = splited[splited.length - 1]

        const url = `https://api.themoviedb.org/3/search/multi?query=${finalSplit}`;
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZmExZDdlYmQ0ZjQ0MzcxZGZlYmE0NmM3MmY0MTUzYSIsInN1YiI6IjY0ZjAyNGM2ZGJiYjQyMDBmZWQ1OTU0MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FyvHgxovFQZhhGCs8OzZ8uW9DBXjAbRGToSyW61CygM'
            }
        };
        const fetched = await fetch(url, options)
        const final = await fetched.json()
        setSearchedApi(final)
    }
  useEffect(() => {
        findData()
    }, [])


    return (
        <>
        <Navbar></Navbar>
       { SearchedApi.total_results? <div className='w-[100%] min-h-[100%] bg-zinc-700'>
           <Searchedcomponent foundData={SearchedApi.results}></Searchedcomponent>
        </div> : <div>not found</div>}
        </>
        )
}


export default page
