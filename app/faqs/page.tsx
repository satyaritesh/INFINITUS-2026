import Questions from '@/components/main/FAQs'
import Footer from '@/components/main/Footer'
import StarsCanvas from '@/components/main/StarCanvas'
import React from 'react'

function page() {
  return (
    <div className='flex flex-col gap-20'>
      <Questions />
      <StarsCanvas />
      <Footer />
    </div>
  )
}

export default page