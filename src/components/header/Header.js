import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className='header bg-teal-400 text-white'>
        <div className="container">
          <div className="row">
            <nav className='nav'>
                <ul>
                    <NavLink to='/' className="nav-link">Add new ad</NavLink>
                    <NavLink to='/add-new-contact' className="nav-link">Add new contact</NavLink>
                </ul>
            </nav>
            </div>
        </div>
    </header>
  )
}

export default Header;