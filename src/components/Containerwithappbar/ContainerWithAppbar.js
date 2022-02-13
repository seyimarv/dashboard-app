import React, { useState } from 'react'
import Header from '../Appbar/Header'
import Navbar from '../Appbar/Navbar'
import './ContainerWithAppbar.scss'


const ContainerWithAppbar = ({ children }) => {
    const [showNavbar, setShowNavbar] = useState(false)

    const toggelNavbar = () => {
        setShowNavbar(!showNavbar)
    }
    return (
        <div className='containerwithappbar'>
            <div className={`containerwithappbar__sidebar ${showNavbar ? 'show__navbar' : ''}`}>
                <Navbar />
            </div>
            <div className='containerwithappbar__main'>
                <Header toggelNavbar={toggelNavbar}/>
                {children}
            </div>
        
        </div>
    )
}

export default ContainerWithAppbar