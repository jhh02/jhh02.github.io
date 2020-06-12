const startingWord = document.querySelector("#startingWord");
const showingWord = document.querySelector("#word");
const inputForm = document.querySelector("form");
const inputDiv = document.querySelector("#inputDiv");

function init() {
  startingWord.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      event.preventDefault();
      showingWord.textContent = startingWord.value;
      inputForm.classList.add("notShowing");
      inputDiv.classList.remove("notShowing");
    }
  });
}

init();
