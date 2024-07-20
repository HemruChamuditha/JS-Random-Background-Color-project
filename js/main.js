const button = document.querySelector(".btn");
const heading = document.querySelector("h1");

button.addEventListener("click", function () {
  const newColor = createRandomColor();

  heading.innerText = `Your new Color is : ${newColor}`;
  heading.style.color = "white";
  document.body.style.backgroundColor = newColor;
});

let createRandomColor = () => {
  let randOne = Math.floor(Math.random() * 254 + 1);
  let randTwo = Math.floor(Math.random() * 254 + 1);
  let randThree = Math.floor(Math.random() * 254 + 1);
  

  return (newColor = `rgb(${randOne},${randTwo},${randThree})`);
};

let sample = (randOne, randTwo, randThree) => {
  let name =  `${randOne}, ${randTwo}, ${randThree}`;
  return name;
};
