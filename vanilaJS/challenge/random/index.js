const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34",
];

const bodyColor = document.querySelector("body");
const btn = document.querySelector("button");

function changeRandom(event) {
  let random = Math.floor(Math.random() * colors.length);
  let randomTwo = Math.floor(Math.random() * colors.length);
  event.preventDefault();
  if (random == randomTwo) {
    randomTwo = Math.floor(Math.random() * colors.length);
  } else {
    bodyColor.style.background =
      "linear-gradient(to right," +
      colors[random] +
      "," +
      colors[randomTwo] +
      ")";
  }
}

btn.addEventListener("click", changeRandom);
