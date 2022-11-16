import React from "react";
import "../../css/top_link.css";

const Toplink = () => {
  return (
    <div className="top-link-container">
      <div className="top-link-wrap">
        <div className="top-link-left">
          <ul>
            <li>홈으로</li>
            <div className="top-link-bar"></div>
            <li>컨텍센터</li>
            <div className="top-link-bar"></div>
            <li>충북 데이터기반 성과관리 시스템</li>
          </ul>
        </div>
        <div className="top-link-right">
          <ul>
            <li>로그인</li>
            <div className="top-link-bar"></div>
            <li>전체메뉴</li>
            <div className="top-link-bar"></div>
            <li>검색어를 입력해주세요</li>
            <div className="top-link-bar"></div>
            <li>글자크기</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Toplink;
