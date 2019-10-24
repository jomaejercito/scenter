import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div style={{ background: '#2f3752', paddingTop: '12px', paddingBottom: '12px' }}>

      <NavLink to="/" className="navbar-logo" style={{padding: '12px', margin: '0 8px 8px', color: 'white'}}>
        Scenter
      </NavLink>

      <NavLink to="/" style={link} className="navbar-link">
        Home
      </NavLink>

      <NavLink to="/perfumes" style={link} className="navbar-link">
        Perfumes
      </NavLink>
      </div>
  )
}

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  textDecoration: 'none',
  color: 'white',
}

export default NavBar;