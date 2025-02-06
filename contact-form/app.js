const form = document.querySelector("form");
const generalEnquiry = document.getElementById("general-enquiry");
const supportRequest = document.getElementById("support-request");
const errorMessage = document.getElementById("input-error");
const radioBox = document.querySelectorAll(".radio-box");

// Function to handle form submission
function handleSubmit(e) {
  e.preventDefault();

  const notification = document.querySelector(".notification");

  // Show notification
  notification.classList.add("show");

  // Reset form inputs
  form.reset();

  // Hide notification after 4 seconds
  setTimeout(() => notification.classList.remove("show"), 4000);
}

// Attach submit event listener to form
form.addEventListener("submit", handleSubmit);
