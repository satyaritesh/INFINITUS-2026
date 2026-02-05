import FlareCursor from '@/components/main/Cursor'
import Events from '@/components/main/Event'
import Footer from '@/components/main/Footer'
import StarsCanvas from '@/components/main/StarCanvas'
import React from 'react'

function page() {
  return (
    <div className="flex flex-col bg-cover bg-fixed">
      <StarsCanvas/>
      <FlareCursor/>
      <Events/>
      <Footer/>
    </div>
  )
}

export default page
