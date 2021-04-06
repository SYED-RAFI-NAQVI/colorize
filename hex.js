const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const container = document.getElementById("color_hex");
const title = document.getElementById("title");

btn.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[randomColor()];
  }
  container.textContent = hexColor;
  //   container.style.color = hexColor;
  title.style.color = "#ffffff";
  document.body.style.backgroundColor = hexColor;
});

function randomColor() {
  return Math.floor(Math.random() * hex.length);
}
