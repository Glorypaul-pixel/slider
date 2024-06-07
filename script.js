const pictures = ["img1", "img2", "img3", "img4", "img5", "img6", "img7"];
const buttons = document.querySelectorAll(".btn");
const imgElement = document.getElementById("slider-image");

let counter = 0;

buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    if (button.classList.contains("btn-left")) {
      counter--;
      if (counter < 0) {
        counter = pictures.length - 1;
      }
      imgElement.src = `./images/${pictures[counter]}.jpg`;
    }
    if (button.classList.contains("btn-right")) {
      counter++;
      if (counter > pictures.length - 1) {
        counter = 0;
      }
      imgElement.src = `./images/${pictures[counter]}.jpg`;
    }
  });
});
