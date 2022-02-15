import React from "react";
import {ReactComponent as TransactionsIcon} from '../../images/transaction_icon.svg'
import{ReactComponent as DashboardIcon} from '../../images/dashboard_icon.svg'
import  {ReactComponent as SettingsIcon} from '../../images/setting_icon.svg'
import {ReactComponent as ScheduleIcon} from '../../images/schedule_icon.svg'
import {ReactComponent as UsersIcon} from '../../images/user_icon.svg'
import './Navbar.scss'


const navigationItems = [
    { name: "Dashboard", path: "/Dashboard", Icon: DashboardIcon },
    { name: "Transactions", Icon: TransactionsIcon },
    { name: "Schedules", Icon: ScheduleIcon },
    { name: "Users", path: "/Users", Icon: UsersIcon },
    { name: "Settings", Icon: SettingsIcon },
]


const NavigationItem = ({ Icon, name, path }) => {

    return (
        <div className="navigation-item">
            <Icon className='navigation-item__icon' />
            {name}
        </div>
    )
}


const Navbar = () => {
    return (
        <div className="navbar">
            <span className="navbar-title">Dash.</span>
            <div className="navbar-items">
                {navigationItems.map(({ name, path, Icon }, index) => {
                    return <NavigationItem key={index} name={name} path={path} Icon={Icon} />
                })}
            </div>
            <div className="navbar-footer">
                <span>Help</span>
                <span>Contact us</span>
            </div>
        </div>
    )
}


export default Navbar