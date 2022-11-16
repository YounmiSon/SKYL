import React from "react";

const Step_one = () => {
  return (
    <div>
      <div>
        <div>
          <div>약관동의</div>
          <div>가입/실명확인</div>
          <div>정보입력</div>
          <div>가입완료</div>
        </div>
        <div>
          <div>
            <h3>회원약관</h3>
            가입을 원하실 경우 아래의 "약관"을 반드시 읽으신 후 <b>'동의'</b>
            버튼을 선택해 주세요.
          </div>
          <div id="">
            <div>제1장 총칙 어쩌구</div>
            <div>
              <input type="radio" name="agree" value="y" />
              동의
              <input type="radio" name="agree" value="n" />
              비동의
            </div>
          </div>
          <div>
            <button
              onClick={() => {
                // join(1);
              }}
            >
              가입
            </button>
            <button
              onClick={() => {
                // join(99);
              }}
            >
              취소
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step_one;
