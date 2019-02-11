import React from 'react';
import {Menu} from 'antd';
import { Link } from 'react-router-dom';



const MyNavBar = () => {
      
    return (
        <Menu mode="horizontal" theme="dark">
            <Menu.Item key="home">
                <Link to ="/" exact="true">HOME</Link>
            </Menu.Item>
            <Menu.Item key = "test">
                <Link to ="/test" exact="true">TEST</Link>
            </Menu.Item>
            <Menu.Item key ="jobs">
                <Link to ="/jobs" exact="true">JOBS</Link>
            </Menu.Item>
            <Menu.Item key ="companies">
                <Link to ="/companies" exact="true">COMPANIES</Link>
            </Menu.Item>
        </Menu> 
    )
}
export default MyNavBar;