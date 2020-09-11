import React from 'react';
import '../css/navbar.css';
// import { NavLink, Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import CarContent from '../Car-components/CarContent'

import Content from './Content'



function Navbar() {
    return (
        <div className='navbar'>
            <ul>
                {/* <li> <NavLink to = "/users" > მომხმარებლები </NavLink></li>
                <li> <NavLink to = "/cars" > ავტომობილები </NavLink> </li> */}
            </ul>
        </div>
    )
}
export default Navbar