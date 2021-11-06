// 사용자로부터 이름을 받아 로컬 스토리지에 저장, 언제든지 사용자의 이름을 기억하고 화면에 띄울 수 있게 한다.
// 사용자로 부터 받은 이름을 출력하는 span을 클릭하여 값을 수정, 엔터 혹은 다른 곳에 포커스를 둠으로써 값을 저장 후 재 출력할 수 있게 한다.
// 항상 입력 할때에 값이 존재해야 하고 글자 수가 15자를 넘지 못하도록 해야한다.

const userForm = document.querySelector("#user-form");
const greeting = document.querySelector("#greeting");
const usernameInput = document.querySelector("#user-form input");
const changeUsernameLink = document.querySelector("#change-username-link");
const welcomeCol = document.querySelector(".welcome-username_col");
const welcomeTitle = document.querySelector("#welcome_title");

const savedUsername = localStorage.getItem("username");

const CLASSNAME_HIDDEN = "hidden";
const KEY_USERNAME = "username";

function getUsername(event) {
  event.preventDefault(); //새로고침 막기
  welcomeTitle.innerText = "Hello!!!";
  localStorage.removeItem(KEY_USERNAME); //로컬스토리지에 저장된 값 지우기
  const username = usernameInput.value; // 현재 인풋에 값 변수에 저장
  localStorage.setItem(KEY_USERNAME, username); //로컬스토리지에 인풋 값 변수 통해 저장
  userForm.classList.add(CLASSNAME_HIDDEN); // 입력 폼  없애기
  paintGreeting(username); // 현재 인풋의 값을 인자로 함수 실행
}
function paintGreeting(KEY_USERNAME) {
  usernameInput.classList.add("input_layout");
  welcomeCol.classList.add("flex_row");
  greeting.classList.remove(CLASSNAME_HIDDEN); //spam 보이게 하기
  greeting.innerText = KEY_USERNAME; //인자로 받아온 인풋 값을 span에 입력
}
function changeUsername() {
  removeLayoutCss();
  const savedUsername = localStorage.getItem("username"); //현재 로컬스토리지에 저장되어 있는 값 변수에 저장
  greeting.classList.add(CLASSNAME_HIDDEN); //span 감추기
  userForm.classList.remove(CLASSNAME_HIDDEN); //입력폼 보이게 하기
  usernameInput.focus(); // 인풋에 커서 옮기기
  usernameInput.value = savedUsername; //스토리지에 저장되있던 값을 변수 통해 인풋에 띄우기
  userForm.addEventListener("submit", getUsername); //인풋이 서브밋 되면 함수 실행
}
function focusOut() {
  welcomeTitle.innerText = "Hello!!!";
  if (usernameInput.value === "") {
    removeLayoutCss();
    //값이 없으면 그냥 나오기
    return;
  } else {
    //값이 있다면..
    const username = usernameInput.value; //현재 인풋의 값을 변수에 저장
    userForm.classList.add(CLASSNAME_HIDDEN); //입력폼 안보이게
    localStorage.setItem(KEY_USERNAME, username); //현재 인풋값 변수 통해 로컬스토리지에 저장
    paintGreeting(username);
  }
}

function removeLayoutCss() {
  welcomeTitle.innerText = "Hello!!! what is your name???";
  usernameInput.classList.remove("input_layout");
  welcomeCol.classList.remove("flex_row");
}

if (savedUsername === null) {
  welcomeTitle.innerText = "Hello!!! what is your name???";
  userForm.classList.remove(CLASSNAME_HIDDEN);
  userForm.addEventListener("submit", getUsername);
} else {
  paintGreeting(savedUsername);
}

greeting.addEventListener("click", changeUsername); //span을 클릭해 값을 수정할 수 있도록 하기 위한 이벤트
userForm.addEventListener("focusout", focusOut); //인풋에 값을 입력 후 포커스를 해제하면 값을 저장 입력할 수 있게 한 이벤트
