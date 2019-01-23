import React from 'react';
// import { Link } from 'react-router-dom';
// import {Redirect} from 'react-router-dom';
import {Nav, NavItem, Navbar, NavLink} from 'reactstrap';


const MyNavBar = () => {
      
    return (
        <div>
        <Navbar color="light" light expand="md">
            <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink href = "/" >HOME</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href = "/test" >TEST</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href = "/jobs" >JOBS</NavLink>
                </NavItem>
            </Nav>
        </Navbar>
        </div>
        
    )
}
export default MyNavBar;