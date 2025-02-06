const generalEnquiry = document.getElementById("general-enquiry");
const supportRequest = document.getElementById("support-request");
const errorMassage = document.getElementById("input-error");

generalEnquiry.addEventListener("change", () => {
  if (!generalEnquiry.checked && !supportRequest.checked) {
    errorMassage.style.display = "block";
    errorMassage.style.color = "hsl(0, 66%, 54%)";
  } else {
    errorMassage.style.display = "none";
  }
});
supportRequest.addEventListener("change", () => {
  if (!supportRequest.checked && generalEnquiry.checked) {
    errorMassage.style.display = "block";
    errorMassage.style.color = "hsl(0, 66%, 54%)";
  } else {
    errorMassage.style.display = "none";
  }
});
