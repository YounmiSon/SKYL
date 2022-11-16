import React from "react";
import { footer_logo, footer_img01, footer_img02, footer_img03, footer_img04 } from "../../img";

import "../../css/footer.css";

export const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-link-wrap">
        <div className="footer-link">
          <ul>
            <li>관련사이트</li>
            <div className="footer-link-bar"></div>
            <li>패밀리사이트</li>
            <div className="footer-link-bar"></div>
            <li>협력기관</li>
            <div className="footer-link-bar"></div>
            <li>통합신고센터</li>
            <div className="footer-link-bar"></div>
            <li>부서안내</li>
            <div className="footer-link-bar"></div>
            <li>사업소개</li>
            <div className="footer-link-bar"></div>
            <li>입주안내</li>
          </ul>
        </div>
      </div>
      <div className="footer-wrap">
        <div className="footer">
          <div className="footer-logo">
            <img src={footer_logo} alt="footer 로고" />
          </div>
          <div className="footer-middle">
            <div className="footer-middle-list">
              <ul>
                <li>개인정보보호정책</li>
                <div className="footer-link-bar"></div>
                <li>이메일무단수집거부</li>
                <div className="footer-link-bar"></div>
                <li>인트라넷</li>
              </ul>
            </div>
            <div className="footer-middle-info">
              <address>(28116) 충청북도 청주시 청원구 오창읍 연구단지로 76 TEL. 043-270-2000</address>
              <span>FAX. 043-270-2099</span>
              <p>COPYRIGHT(c) 2020 CHUNGBUK TECHNOPARK All rights reserved.</p>
            </div>
          </div>
          <div className="footer-right">
            <img src={footer_img01} alt="푸터이미지1" />
            <img src={footer_img02} alt="푸터이미지2" />
            <img src={footer_img03} alt="푸터이미지3" />
            <img src={footer_img04} alt="푸터이미지4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
