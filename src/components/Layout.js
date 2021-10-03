import React from "react"
import Navbar from "./Navbar"

const Layout = ({ children }) => {
  return (
    <>
      <div className="container">
        <header>
          <Navbar />
          <main>{children}</main>
        </header>
      </div>
    </>
  )
}

export default Layout
