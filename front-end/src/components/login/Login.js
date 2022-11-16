import React from "react";

const Login = () => {
  return (
    <div id="login">
      <div id="login_title">
        <a href="#">충북테크노파크</a>
      </div>
      <div id="login_menu">
        <ul>
          <li>
            <a href="#">로그인</a>
          </li>
          <li>
            <a href="#">회원가입</a>
          </li>
          <li>
            <a href="#">아이디/비밀번호 찾기</a>
          </li>
        </ul>
      </div>
      <div id="login_content">
        <div id="login_content_title">
          <div>충북테크노파크 로그인</div>
          <div>
            <b>충북테크노파크를 방문해 주신 여러분을 환영합니다.</b>
            <br />
            충북테크노파크는 회원님의 안전한 인터넷 사용을 위해서 회원님의
            개인정보가 보호받을 수 있도록 최선을 다하고 있습니다. 귀하의 정보는
            동의없이 공개되지 않으며 “개인정보보호정책”에 의해 보호받고
            있습니다.
          </div>
        </div>
        <div id="login_content_wrap">
          <div id="login_member">
            <h2>회원로그인</h2>
            <div>
              <h3>회원이신가요?</h3>
              <h4>아이디와 비밀번호를 입력하세요.</h4>
              <div>
                로그인하시면 웹사이트의 다양한 컨텐츠를 이요하실 수 있습니다.
              </div>
              <div id="">
                <div></div>
                <div></div>
              </div>
              <div id="">
                <div>
                  <h1>아이디</h1>
                  <input type="text"></input>
                </div>
                <div>
                  <h1>비밀번호</h1>
                  <input type="password"></input>
                </div>
              </div>
              <div>
                <button>로그인</button>
              </div>
            </div>
          </div>
          <div id="login_nonmember">
            <h2>비회원로그인</h2>
            <div>
              <div>
                <a>공인인증 로그인</a>
              </div>
              <div>
                <a>아이핀 로그인</a>
              </div>
            </div>
          </div>
        </div>
        <div id="login_content_footer">
          <div id="">충북테크노파크</div>
          <div id="">
            (28116) 충청북도 청주시 청원구 오창읍 연구단지로 76 TEL : 1877-8972
            FAX : 043-270-2099
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
