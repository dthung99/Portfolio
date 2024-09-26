import React, { useContext, useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Layers3, House, BriefcaseBusiness, AtSign } from 'lucide-react';
import { CurrentPageContext } from '../../ContextProvider';

import { CSSVariable } from '../../color_variables/CSSVariable';
import './NavBar.scss';

// Function for icon on small screen
const IconButton = ({ IconComponent, path, label, color = 'inherit', icon_size = '2.5rem', ...props }) => {
  return (
    <Link to={path} className='nav-bar-small-item' style={{ padding: '0.5rem 0.5rem', backgroundColor: color }} {...props}>
      <IconComponent size={icon_size} color={CSSVariable.light} strokeWidth={2} className='my_hover_target' />
      <div className='my_hover_text' style={{ right: '0%' }}> {label} </div>
    </Link>
  );
};

// Navbar
const NavBar = () => {
  const { currentPage, setCurrentPage } = useContext(CurrentPageContext);

  const location = useLocation();

  // Hook the current path to currentPage => currentPage update when route change => Update button background
  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location]);

  // Check if the current page is the expectPage to change the background of the item
  // If yes, return the color code for the background. Else, make it 'inherit'
  const ColorForPage = (expectPage) => {
    return currentPage === expectPage ? CSSVariable.brand_2 : 'inherit';
  }

  return (
    <>
      <div className="nav-bar">
        <div className="web_name">Dang The Hung</div>
        <div className="nav-bar-big">
          <Link to='/' className="nav-bar-big-item" style={{ background: ColorForPage('/') }}>Home</Link>
          <Link to='/Projects' className="nav-bar-big-item" style={{ background: ColorForPage('/Projects') }} >Projects</Link>
          <Link to='/About' className="nav-bar-big-item" style={{ background: ColorForPage('/About') }}>About</Link>
          <Link to='/Connect' className="nav-bar-big-item" style={{ background: ColorForPage('/Connect') }}>Connect</Link>
        </div>
        <div className="nav-bar-small">
          <IconButton IconComponent={House} path='/' label='Home' color={ColorForPage('/')} />
          <IconButton IconComponent={Layers3} path='/Projects' label='Projects' color={ColorForPage('/Projects')} />
          <IconButton IconComponent={BriefcaseBusiness} path='/About' label='About' color={ColorForPage('/About')} />
          <IconButton IconComponent={AtSign} path='/Connect' label='Connect' color={ColorForPage('/Connect')} />
        </div>
      </div>
    </>
  );
}

export default NavBar