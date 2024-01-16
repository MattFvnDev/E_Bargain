import React from 'react'
import { Outlet } from 'react-router-dom'
import {Header, Footer} from "./index"

// Basic layout
const AppLayout = () => {
  return (
    <div>
      <Header/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}

export default AppLayout