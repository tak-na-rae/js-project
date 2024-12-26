import React, {useState} from 'react';
import {NavLink, Link} from 'react-router-dom';
import { RiMenu3Fill } from "react-icons/ri";
import { MdOutlineClose } from "react-icons/md";
import $ from 'jquery';

const Nav = () => {
  const [menuOpen, setMenuOpen]=useState(true);
  const activeStyle={
    color:'cadetblue'
  }
  const toggleMenu = () =>{
    setMenuOpen(prevMenuOpen => !prevMenuOpen);
    $('.mobile-header-drop').slideToggle(500);
  }
  return (
    <div className='header'>
        <div className="layout-fix">
          <div className="logo">
            <Link to="/"><img src={process.env.PUBLIC_URL + "/img/logo.png"} alt="" /></Link>
          </div>
          <div className="nav">
            <ul className='loginAndsignup'>
              <li><Link to="#">로그인</Link></li>
              <li><Link to="#">회원가입</Link></li>
            </ul>
            <ul className="menu">
              <li><Link to="">Home</Link></li>
              <li><Link to="">About</Link></li>
            </ul>
          </div>
          <div className="movieNav">
            <span>
              {
                menuOpen ? (<RiMenu3Fill onClick={toggleMenu} />) : (<MdOutlineClose onClick={toggleMenu} />)
              }
              

            </span>
            <div className={`mobile-header-drop ${menuOpen ? '':'open'}`}>
              <div>
                <div className="mobile-header-nav">
                  <div className="mobile-header-menu">
                    <ul>
                      <li>
                        <NavLink to="/" style={({isActive})=>(isActive? activeStyle:undefined)}>Home</NavLink>
                      </li>
                      <li>
                        <NavLink to="/about" style={({isActive})=>(isActive? activeStyle:undefined)}>About</NavLink>
                      </li>
                    </ul>
                  </div>
                  <div className="mobile-header-loginJoin">
                    <ul>
                      <li>
                        <Link to="/login">로그인</Link>
                      </li>
                      <li>
                        <Link to="/singup">회원가입</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Nav;