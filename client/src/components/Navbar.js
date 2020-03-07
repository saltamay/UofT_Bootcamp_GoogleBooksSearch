import React from 'react';

function NavBar() {
  return (
    <nav>
      <div className='nav-wrapper'>
        <a href='#' class='brand-logo right'>
          Scripted
        </a>
        <ul id='nav-mobile' className='left hide-on-med-and-down'>
          <li>
            <a href='#'>Search</a>
          </li>
          <li>
            <a href='#'>Saved</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
