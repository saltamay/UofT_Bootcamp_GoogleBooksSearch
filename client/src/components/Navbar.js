import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className='indigo darken-4'>
      <div className='nav-wrapper'>
        <Link to='/' className='brand-logo right'>
          Scripted
        </Link>
        <ul id='nav-mobile' className='left hide-on-med-and-down'>
          <li className='active'>
            <Link to='/'>Search</Link>
          </li>
          <li>
            <Link to='/books'>Saved</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
