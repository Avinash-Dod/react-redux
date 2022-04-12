import { Route, Routes } from "react-router-dom"
import About from "../Pages/About"
import Contact from "../Pages/Contact"
import Home from "../Pages/Home"
const Nav = () => {
    return (
        <>
            <Routes>
                <Route exact path="/home" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route  path="/about" element={<About />} />
            </Routes>
        </>

    )
}
export default Nav