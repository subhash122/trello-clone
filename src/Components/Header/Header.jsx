import React from 'react'
import './Header.css'
function Header() {
    return (
        <div className="app-nav">
            <h1 className='text-3xl font-bold'>Trello - clone</h1>
            <p className="user-email">Hello {localStorage.getItem("email")}</p>

        </div>
    )
}

export default Header
