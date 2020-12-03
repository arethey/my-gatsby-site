import React, { useEffect } from "react"
import Header from "./Header"
import Footer from "./Footer"

import AOS from "aos"
import "aos/dist/aos.css"

const Layout = ({ children }) => {
  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])
  return (
    <>
      <div className="bg-light">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
