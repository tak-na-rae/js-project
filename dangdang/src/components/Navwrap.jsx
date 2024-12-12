import React from 'react';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

// import { Link, useNavigate } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom"; //함수형 훅

import styles from "./Navwrap.module.css";
import { GiClover } from "react-icons/gi";


const Navwrap = () => {
  let navigate = useNavigate();
  return (
    <>
      {/* <nav>
        <ul>
          <li className="logo"><span onClick={()=>{navigate("/")}}><GiClover/>logo</span></li>
          <li><span onClick={()=>{navigate("/")}}>Home</span></li>
          <li><span onClick={()=>{navigate("/best")}}>Best</span></li>
          <li>
            <span onClick={()=>{navigate("/new")}}>New</span>
            <ul>
              <li><Link to="/new/test1">아우터</Link></li>
              <li><Link to="/new/test2">상의</Link></li>
            </ul>
          </li>
        </ul>
      </nav> */}

      <nav>
        <div className="layout-fix">
          <ul>
            <li className={styles.logo}><Link to="/"><GiClover/> logo</Link></li>
            {/* <li className="logo"><Link to="/"><GiClover/>logo</Link></li> */}
            {/* <li><Link to="/">Home</Link></li> */}
            <li><Link to="/best">Best</Link></li>
            <li>
              <Link to="/new">New</Link>
              <ul>
                <li><Link to="/new/test1">아우터</Link></li>
                <li><Link to="/new/test2">상의</Link></li>
              </ul>
            </li>
            {/* <li><Link to="/detail">상세</Link></li> */}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navwrap;