const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function checkHours() {
  const date = new Date();
  const hours = date.getHours();
  if (hours < 13) {
    return "Good morning";
  } else if (hours < 19) {
    return "Good afternoon";
  } else {
    return "Good evening";
  }
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `${checkHours()}, ${text}.`;
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
  toDoForm.classList.remove(NOT_SHOWING);
}

function greetingNewUser() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    greetingNewUser();
  } else {
    paintGreeting(currentUser);
  }
}

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function init() {
  loadName();
  setInterval(checkHours, 1000);
}

init();
