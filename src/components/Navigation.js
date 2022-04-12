import { Route, Routes } from "react-router-dom"

import React from "react"
import About from "../pages/About"
import Contact from "../pages/Contact"
import HomeContainer from "../containers/HomeContainer"

const Nav = () => {
    return (
        <>
          <Routes>
                <Route exact path="/" element={<HomeContainer />} />
                <Route  path="/about" element={<About />} />
                <Route  path="/contact" element={<Contact />} />
                
                
            </Routes>
        
        </>
        
          

    )
}
export default Nav
