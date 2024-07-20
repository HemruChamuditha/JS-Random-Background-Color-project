const button = document.querySelector(".btn");
const heading = document.querySelector("h1");

button.addEventListener("click", function () {
  let randOne = Math.floor(Math.random() * 254 + 1);
  let randTwo = Math.floor(Math.random() * 254 + 1);
  let randThree = Math.floor(Math.random() * 254 + 1);

  const newColor = `rgb(${randOne},${randTwo},${randThree})`;

  heading.innerText = `Your new Color is : ${newColor}`;
  heading.style.color = "white";
  document.body.style.backgroundColor = newColor;
});
