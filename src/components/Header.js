import React from 'react'

//Create header component for logo
export default function Header() {
  return (
    <nav className="navbar navbar-expand-sm bg-light" data-test="navbar navbar-expand-sm bg-light">
        <ul className="navbar-nav">
            <li className="nav-item header">
            Earthquake
            </li>            
        </ul>
        </nav>       
  )
}
