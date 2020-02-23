const form = document.querySelector("#contactForm");
form.addEventListener("submit", checkform);

function Validateform(event) {
  event.preventDefault();

  const firstName = document.querySelector("#firstName");
  const firstNameError = document.querySelector("#firstNameError");
  const firstNameValue = firstName.value;

  if (checkInput(firstNameValue) === true) {
    firstNameError.style.display = "none";
  } else {
    firstNameError.style.display = "block";
  }
  
  const lastName = document.querySelector("#lastName");
  const lastNameError = document.querySelector("#lastNameError");
  const lastNameValue = lastName.value;

  if (checkInput(lastNameValue) === true) {
    lastNameError.style.display = "none";
  } else {
    lastNameError.style.display = "block";
  }

  const email = document.querySelector("#email");
  const emailError = document.querySelector("#emailError");
  const invalidEmailError = document.querySelector("#invalidEmailError");

  const emailValue = email.value;

  function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  return regEx.test(email);
}

  if (checkInput(emailValue) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  if (validateEmail(emailValue) === true) {
    invalidEmailError.style.display = "none";
  } else {
    invalidEmailError.style.display = "block";
  }

  function checkInput(value) {
    const trimmedValue = value.trim();

    if (trimmedValue.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  const message = document.querySelector("#message");
  const messageError = document.querySelector("#messageError");
  const messageValue = message.value;

  if (checkInput(messageValue) === true) {
    messageError.style.display = "none";
  } else {
    messageError.style.display = "block";
  }
  function checkInput(value) {
    const trimmedValue = value.trim();

    if (trimmedValue.length > 9) {
      return true;
    } else {
      return false;
    }
  }
}
