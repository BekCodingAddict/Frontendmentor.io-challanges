let leftBox = document.querySelector(".radio");
let radioButton = document.querySelector("input[type=radio]");
let secondRadio = document.querySelectorAll(".radio");
let rightBox = document.querySelector(".left_box2");

radioButton.addEventListener("click", function () {
  if (radioButton.checked === true && secondRadio[1].checked === false) {
    leftBox.style.backgroundColor = "hsl(148, 38%, 91%)";
    rightBox.style.backgroundColor = "";
  }
});

const submited = () => {
  alert("Submited");
};

console.log(secondRadio[1]);
