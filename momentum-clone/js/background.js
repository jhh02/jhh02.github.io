const body = document.querySelector("body");

const IMG_NUMBER = 21;

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `/images/${imgNumber + 1}.jpg`;
  image.classList.add("bgImage");
  body.appendChild(image);
}

function genRandom() {
  const number = Math.random() * IMG_NUMBER;
  const roundedNum = Math.floor(number);
  return roundedNum;
}

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();
