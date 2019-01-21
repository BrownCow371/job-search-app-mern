import React from 'react';
// import { Link } from 'react-router-dom';
// import {Redirect} from 'react-router-dom';
import {Nav, NavItem, Navbar, NavLink} from 'reactstrap';


const MyNavBar = () => {
    // return (
    //     <div>
    //         <Link to = "/test" exact>Test</Link>
    //         <Link to = "/" exact>Home</Link>
    //     </div>
    // )
   
    return (
        <div>
        <Navbar color="light" light expand="md">
            <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink href = "/" exact>HOME</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href = "/test" exact>TEST</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href = "/jobs" exact>JOBS</NavLink>
                </NavItem>
            </Nav>
        </Navbar>
        </div>
        
    )
}
export default MyNavBar;