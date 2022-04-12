import React from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'
function Header(props) {
    // console.warn(props.data)
    return (
        <div>
            <div className="header">
                <a href="#default" className="logo">CompanyLogo</a>
                <div class="header-right">
                <NavLink exact activeclassname="active" to="/">Home </NavLink>
                <NavLink exact activeclassname="active" to="/contact">Contact </NavLink>
                <NavLink exact activeclassname="active" to="/about">About </NavLink>
                <NavLink exact activeclassname="active" to="/cart"><i className="fa fa-shopping-cart"></i> {props.data.length}</NavLink>
                    
                </div>
            </div>

        </div>


    )
}

export default Header