import React from 'react';
import { useGlobalContext } from './Context';
import logo from './image/logo.svg';
import {FaBars} from 'react-icons/fa';


const Navbar = () => {
  const {openSidebar,openSubmenu,closeSubmenu} =useGlobalContext();
  const displaySubmenu =(e) =>{
    const page = e.target.textContent;
    const tempbtn = e.target.getBoundingClientRect();
    const center =(tempbtn.left + tempbtn.right)/2;
    const bottom =tempbtn.bottom -3;
    openSubmenu(page,{center,bottom});
  }
  const handelSubmenu =(e)=>{
    if(!e.target.classList.contains('link-btn')){
      closeSubmenu();
    }
  }
  return (
   <nav className="nav" onMouseOver={handelSubmenu}>
    <div className="nav-center">
      <div className="nav-header">
        <img src={logo} className='nav-logo' alt="stripe" />
        <button className="btn toggle-btn" onClick={openSidebar}> <FaBars/> </button>
      </div>
      <ul className="nav-links">
        <li>
          <button className="link-btn" onMouseOver={displaySubmenu}>products</button>
        </li>
        <li>
          <button className="link-btn" onMouseOver={displaySubmenu}>developers</button>
        </li>
        <li>
          <button className="link-btn" onMouseOver={displaySubmenu}>company</button>
        </li>      
      </ul>
      <button className="btn signin-btn">Sign in</button>
    </div>
   </nav>
  )
}

export default Navbar;