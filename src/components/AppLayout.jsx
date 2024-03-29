import React from 'react'
import { Outlet } from 'react-router-dom'
import {Header, Footer, Newsletter} from "./index"

// Basic layout
const AppLayout = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <Header/>
      <main className='flex-grow bg-[#f5f5f5]'>
        <Outlet/>
      </main>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default AppLayout