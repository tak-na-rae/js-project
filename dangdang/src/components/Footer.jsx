import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="layout-fix">
          <div className="info">
            <div className="customer">
              <p>고객센터 0123-1234</p>
              <span>운영시간 평일 10:00 ~ 19:00<br/>(점심시간 12:00 ~ 13:30 제외)</span>
              <Link>FAQ</Link>
              <Link>1:1문의</Link>
            </div>
            <ul className="sns">
              <li><Link>facebook</Link></li>
              <li><Link>twitter</Link></li>
              <li><Link>instagram</Link></li>
            </ul>
          </div>
          <ul className="link">
            <li><Link to="#"><b>개인정보처리방침</b></Link></li>
            <li><Link to="#">이용약관</Link></li>
            <li><Link to="#">분쟁해결기준</Link></li>
            <li><Link to="#">안전거래센터</Link></li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;