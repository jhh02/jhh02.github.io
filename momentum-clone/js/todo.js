const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = document.querySelector(".js-toDoForm__input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";
let toDos = [];
const USER = "currentUser";
const NOT_SHOWING = "not-showing";

function deleteToDo(event) {
  const path = event.target;
  const svg = path.parentNode;
  const btn = svg.parentNode;
  const li = btn.parentNode;
  console.log(li);
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter(function(toDo) {
    return toDo.id !== parseInt(li.id);
  });
  toDos = cleanToDos;
  saveToDos();
}

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  console.dir(delBtn);
  const span = document.createElement("span");
  const newId = toDos.length + 1;
  delBtn.innerHTML = `<i class="fas fa-trash fa-3x"></i>`;
  delBtn.addEventListener("click", deleteToDo);
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.classList.add("tracking-in-contract-bck-top");
  li.id = newId;
  toDoList.appendChild(li);
  const toDoObj = {
    text: text,
    id: toDos.length + 1
  };
  toDos.push(toDoObj);
  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  const currentUser = localStorage.getItem(USER_LS);
  if (loadedToDos !== null) {
    toDoForm.classList.remove(NOT_SHOWING);
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function(toDo) {
      paintToDo(toDo.text);
    });
  } else if (currentUser !== null) {
    toDoForm.classList.remove(NOT_SHOWING);
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
