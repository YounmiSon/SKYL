import React from "react";
import "../../css/header.css";
import { tec_park_logo } from "../../img";

const Header = () => {
  return (
    <div>
      <div className="header-container">
        <div className="header-wrap">
          <div className="header-logo">
            <img src={tec_park_logo} alt="충북테크노파크 로고" />
          </div>
          <div className="header-list">
            <ul>
              <li>알림마당</li>
              <li>사업소개</li>
              <li>열린마당</li>
              <li>입주안내</li>
              <li>홍보마당</li>
              <li>테크노파크 소개</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
