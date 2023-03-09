// 동영상 강의에 나온 코드를 그대로 실습하세요
// TODO : DOM으로부터 필요한 엘리먼트를 불러오세요.
let elInputUsername = document.querySelector("#username");
let elFailureMessage = document.querySelector(".failure-message");
let elSuccessMessage = document.querySelector(".success-message");

let elInputPassword = document.querySelector("#password");
let elInputPasswordRetype = document.querySelector("#password-retype");
let elMismatchMessage = document.querySelector(".mismatch-message");

elInputUsername.onkeyup = function () {
  if (isMoreThan4Length(elInputUsername.value)) {
    elSuccessMessage.classList.remove("hide"); // 성공키 삭제
    elFailureMessage.classList.add("hide"); // 실패키 추가
  } else {
    elSuccessMessage.classList.add("hide"); // 성공키 추가
    elFailureMessage.classList.remove("hide"); // 실패키 삭제
  }
};

function isMoreThan4Length(value) {
  return value.length >= 4;
}

/*아래부터 비밀번호*/

elInputPasswordRetype.onkeyup = function () {
  //미리 작성한 match함수 사용
  //패스워드 입력, 확인창에 입력값이 일치하는가 확인>> .value 사용
  if (isMatch(elInputPassword.value, elInputPasswordRetype.value)) {
    elMismatchMessage.classList.add("hide"); // mismatch 메세지 추가
  } else {
    elMismatchMessage.classList.remove("hide"); // mismatch 메세지 삭제
  }
};

function isMatch(password1, password2) {
  return password1 === password2;
}
