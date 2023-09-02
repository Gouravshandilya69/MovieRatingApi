import Navbar from '@/components/Navbar'
import Showhero from '@/components/Showhero'
import Cast from '@/components/cast'
import React from 'react'

function page() {
  return (
    <div>
        <Navbar/>
        <Showhero/>
        <Cast></Cast>
        </div>
  )
}

export default page