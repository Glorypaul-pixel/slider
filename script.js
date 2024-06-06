const pictures = ["img1", "img2", "img3", "img4", "img5", "img6", "img7"];
const buttons = document.querySelectorAll(".btn");
const imgDiv = document.querySelector(".slider-icon");

let counter = 0;

buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    if (button.classList.contains("fa-arrow-right")) {
      counter--;
      if (counter < 0) {
        counter = pictures.length - 1;
      }
      imgDiv.style.background = `url("./images/${pictures[counter]}.jpg")`;
    }
    if (button.classList.contains("fa-arrow-left")) {
      counter++;
      if (counter > pictures.length - 1) {
        counter = 0;
      }
      imgDiv.style.background = `url("./images/${pictures[counter]}.jpg")`;
      //   imgDiv.style.width = "80%";
    }
  });
});
