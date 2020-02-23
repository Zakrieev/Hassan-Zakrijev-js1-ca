const form = document.querySelector("#contactForm");
form.addEventListener("submit", checkform);

function checkform(event) {
  event.preventDefault();

  const firstName = document.querySelector("#firstName");
  const firstNameError = document.querySelector("#firstNameError");
  const firstNameValue = firstName.value;

  if (checkInputLength(firstNameValue) === true) {
    firstNameError.style.display = "none";
  } else {
    firstNameError.style.display = "block";
  }
  
  const lastName = document.querySelector("#lastName");
  const lastNameError = document.querySelector("#lastNameError");
  const lastNameValue = lastName.value;

  if (checkInputLength(lastNameValue) === true) {
    lastNameError.style.display = "none";
  } else {
    lastNameError.style.display = "block";
  }
