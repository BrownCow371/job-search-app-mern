import React from 'react';
import {Menu} from 'antd';
import { Link } from 'react-router-dom';



const MyNavBar = () => {

    const SubMenu = Menu.SubMenu;
      
    return (
        <Menu mode="horizontal" theme="dark">
            <Menu.Item key="home">
                <Link to ="/" exact="true">HOME</Link>
            </Menu.Item>
            <Menu.Item key = "test">
                <Link to ="/test" exact="true">TEST</Link>
            </Menu.Item>
            <SubMenu title ="JOBS">
                <Menu.Item key ="jobs">
                    <Link to ="/jobs" exact="true">Jobs List</Link>
                </Menu.Item>
                <Menu.Item key ="jobs-new">
                    <Link to ="/jobs/new" exact="true">New Job Form</Link>
                </Menu.Item>
            </SubMenu >
            <SubMenu title ="COMPANIES">
                <Menu.Item key="companies">
                    <Link to ="/companies" exact="true">Companies List</Link>
                </Menu.Item>
                <Menu.Item key ="companies-new">
                    <Link to ="/companies/new" exact="true">New Company Form</Link>
                </Menu.Item>
            </SubMenu >
            
        </Menu> 
    )
}
export default MyNavBar;