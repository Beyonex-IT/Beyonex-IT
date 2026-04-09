import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import FloatingButtons from '../FloatingButtons/FloatingButtons'

import SEOManager from '../SEOManager/SEOManager'

export default function Layout() {
  return (
    <>
      <SEOManager />

      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  )
}
