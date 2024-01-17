import React from 'react'
import { Outlet } from 'react-router-dom'
import {Header, Footer} from "./index"

// Basic layout
const AppLayout = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <Header/>
      <main className='flex-grow bg-[#f5f5f5]'>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}

export default AppLayout