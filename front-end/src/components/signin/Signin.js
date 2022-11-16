import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Step_one, Step_two, Step_three, Step_four } from "./sign_step";

const Signin = () => {
  const [step, setStep] = useState(1);
  const [agree, setAgree] = useState();

  console.log(step);
  function Step_controll(num) {
    switch (num) {
      case 1:
        return <Step_one />;
      case 2:
        return <Step_two />;
      case 3:
        return <Step_three />;
      case 4:
        return <Step_four />;
      default:
        return;
    }
  }
  return (
    <div id="signin">
      <div id="sign_title">
        <a href="#">충북테크노파크</a>
      </div>
      <div id="sign_menu">
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
      <div id="sign_content">
        <div id="sign_content_title">
          <div>
            <b>CBTP 홈페이지 방문을 환영합니다.</b>
            <br />
            홈페이지에 회원가입을 하시면 더욱 편리하게 홈페이지 서비스를
            이용하실 수 있습니다.
          </div>
        </div>
        <div id="sign_content_wrap">
          <Routes>
            <Route path="/" element={<Step_controll step={step} />} />
            <Route path="/step_two" element={<Step_controll step={step} />} />
            <Route path="/step_three" element={<Step_controll step={step} />} />
            <Route path="/step_four" element={<Step_controll step={step} />} />
          </Routes>
        </div>
        <div id="sign_content_footer">
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

export default Signin;
