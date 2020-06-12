"use strict";

let dictionary = [];
const btn = document.querySelector("#button");

btn.addEventListener("click", () => {
  const word = document.querySelector("#word").textContent;
  const userInput = document.querySelector("#input").value;
  const error = document.querySelector("#error");
  const usedWord = document.querySelector("#usedWord");
  const lastIndexNum = word.length - 1;
  const lastWord = word[lastIndexNum];
  const firstInput = userInput[0];

  if (firstInput === lastWord) {
    document.querySelector("#word").textContent = userInput;
    document.querySelector("#error").textContent = "";
    document.querySelector("#input").value = "";
    usedWord.textContent = "";
    document.querySelector("#input").focus();
    if (dictionary.includes(userInput)) {
      document.querySelector("#word").textContent =
        dictionary[dictionary.length - 1];
      let uniqueSet = new Set(dictionary);
      let newArray = [...uniqueSet];
      dictionary = newArray;
      usedWord.textContent = userInput;
      error.textContent = "Yov've used that word already";
    } else {
      dictionary.push(userInput);
    }
  } else if (userInput === "") {
    document.querySelector("#error").textContent = "Please type a word";
    usedWord.textContent = "";
  } else {
    document.querySelector("#error").textContent = "wrong👎";
    document.querySelector("#input").value = "";
    usedWord.textContent = "";
  }
});
