import React from "react";
import './Header.scss'
import { ReactComponent as NotificationIcon } from '../../images/Notification.svg'
import Usericon from '../../images/Usericon.svg'
import { ReactComponent as MenuIcon } from '../../images/menuIcon.svg'
import { ReactComponent as SearchIcon } from '../../images/Search icon.svg'
const Header = ({ toggelNavbar }) => {
    return (
        <div className="header">
            <MenuIcon onClick={toggelNavbar} className='header-menuicon' />
            <h1>Users</h1>

            <div className="header__items">
                <div className="header__items-searchinput">
                    <input type="text" placeholder="Search..." />
                    <SearchIcon className="searchicon"/>
                </div>
                <NotificationIcon />
                <img src={Usericon} alt="userimage" />
            </div>
        </div>
    )
}

export default Header