import React, { useState, useEffect } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { RiMenu3Fill } from "react-icons/ri";
import { MdOutlineClose } from "react-icons/md";
import $ from 'jquery';

import { LuDog } from "react-icons/lu";

import { isActiveToken } from '../pages/AccessTokenContext';

const Nav = () => {
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(true);
  const [isScrolled, setIsScrolled] = useState(true);

  const [accessResult, setAccessResult] = useState(null);
  const [user_id, setUserId] = useState(null);
  function logout() {
    localStorage.removeItem('accessToken');
    setAccessResult(false);
    navigate("/")
  }
  const accessToken = localStorage.getItem('accessToken');


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true); //흰배경적용
      } else {
        setIsScrolled(false); //흰배경제거
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    }
  }, [])
  useEffect(() => {
    //accessToken사용할 코드
    const verifyToken = async () => {
      const result = await isActiveToken(accessToken);
      setAccessResult(result.accessResult)
      setUserId(result.user_id)
    }
    verifyToken();
  }, [accessToken, accessResult])


  const activeStyle = {
    color: '#31caae'
  }
  const toggleMenu = () => {
    setMenuOpen(prevMenuOpen => !prevMenuOpen);
    // $('.mobile-header-drop').slideToggle(500);
    $('.mobile-header-drop').toggleClass("open");
  }

  const pageTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  if (accessResult === true) { //로그인
    return (
      <>
        <div className={`header ${isScrolled ? "scrolled" : ""}`}>
          <div className="layout-fix">
            <div className="logo">
              {/* <Link to="/"><img src={process.env.PUBLIC_URL + "/img/logo.png"} alt="" /></Link> */}
              <Link to="/"><LuDog /></Link>
            </div>
            <div className="nav">
              <ul className='loginAndsignup'>
                <li>{user_id}님 반갑습니다</li>
                <li><div className="logout" onClick={() => logout()}>로그아웃</div></li>
              </ul>
              <ul className="menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
              </ul>
            </div>
            <div className="movieNav">
              <span className="icon">
                {menuOpen ? (<RiMenu3Fill onClick={toggleMenu} />) : (<MdOutlineClose onClick={toggleMenu} />)}
              </span>
              <div className={`mobile-header-drop ${menuOpen ? '' : 'open'}`}>
                <div>
                  <div className="mobile-header-nav">
                    <div className="mobile-header-menu">
                      <ul>
                        <li>
                          <NavLink to="/" style={({ isActive }) => (isActive ? activeStyle : undefined)}>Home</NavLink>
                        </li>
                        <li>
                          <NavLink to="/about" style={({ isActive }) => (isActive ? activeStyle : undefined)}>About</NavLink>
                        </li>
                      </ul>
                    </div>
                    <div className="mobile-header-loginJoin">
                      <ul>
                        <li>{user_id}님 반갑습니다</li>
                        <li>
                          <div className="logout" onClick={() => logout()}>로그아웃</div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="quick-top" onClick={pageTop}>top</div>
      </>
    );
  } else { //로그아웃
    return (
      <>
        <div className={`header ${isScrolled ? "scrolled" : ""}`}>
          <div className="layout-fix">
            <div className="logo">
              {/* <Link to="/"><img src={process.env.PUBLIC_URL + "/img/logo.png"} alt="" /></Link> */}
              <Link to="/"><LuDog /></Link>
            </div>
            <div className="nav">
              <ul className='loginAndsignup'>
                <li><Link to="/login">로그인</Link></li>
                <li><Link to="/signup">회원가입</Link></li>
              </ul>
              <ul className="menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
              </ul>
            </div>
            <div className="movieNav">
              <span className="icon">
                {menuOpen ? (<RiMenu3Fill onClick={toggleMenu} />) : (<MdOutlineClose onClick={toggleMenu} />)}
              </span>
              <div className={`mobile-header-drop ${menuOpen ? '' : 'open'}`}>
                <div>
                  <div className="mobile-header-nav">
                    <div className="mobile-header-menu">
                      <ul>
                        <li>
                          <NavLink to="/" style={({ isActive }) => (isActive ? activeStyle : undefined)}>Home</NavLink>
                        </li>
                        <li>
                          <NavLink to="/about" style={({ isActive }) => (isActive ? activeStyle : undefined)}>About</NavLink>
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
        <div className="quick-top" onClick={pageTop}>top</div>
      </>
    )
  }

}; //const nav

export default Nav;