import React from 'react'
import StarsCanvas from '@/components/main/StarCanvas'
import Navbar from '@/components/main/Navbar'
import AboutPage from '@/components/main/AboutPage'
import FlareCursor from '@/components/main/Cursor'


function page() {
  return (
    <div className="flex flex-col h-[950px] gap-20 bg-cover bg-fixed">
      <FlareCursor />
      <Navbar />
      <StarsCanvas />
      <AboutPage />
    </div>
  )
}

export default page