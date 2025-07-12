let email = document.getElementById("email");
let error = document.querySelector(".error");
let button = document.querySelector(".button");
let icon_error = document.getElementById("error-icon");

button.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent form reload

  if (email.value.trim() === "") {
    error.textContent = "Please enter an email address";
    icon_error.src = "./images/icon-error.svg";
    icon_error.style.display = "inline"; // Show the icon
  } else {
    error.textContent = "";
    icon_error.style.display = "none"; // Hide icon if valid
    alert("Email Address submitted");
  }
});
