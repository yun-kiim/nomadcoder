const maxNumberForm = document.querySelector("#maxnumber");
const maxNumber = document.querySelector("#maxnumber input");
const guessNumberForm = document.querySelector("#guessnumber");
const guessNumber = document.querySelector("#guessnumber input");
const btn = document.querySelector("#guessnumber button");

function numberInput(event) {
  event.preventDefault();
  const number = maxNumber.value;
  localStorage.setItem("max", number);
  return number;
}

function playGame(event) {
  event.preventDefault();
  const guess = guessNumber.value;
  localStorage.setItem("guess", guess);
  const guessresult = localStorage.getItem("guess");
  const randomnumber = localStorage.getItem("max");
  const random = Math.floor(Math.random() * randomnumber);
  const hidden = document.querySelector(".hidden");
  const h2 = document.querySelector("h2");
  if (guessresult == random) {
    hidden.innerText = `you choose : ${guessresult}, machine choose :${random}`;
    h2.innerText = `you Win!`;
  } else {
    hidden.innerText = `you choose : ${guessresult}, machine choose :${random}`;
    h2.innerText = `you lose!`;
  }
}

maxNumberForm.addEventListener("submit", numberInput);
guessNumberForm.addEventListener("submit", playGame);
