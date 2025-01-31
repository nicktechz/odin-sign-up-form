const passwordInput = document.getElementById("password");
const seePasswordBtn = document.getElementById("seePassword");
const seePasswordIcon = document.getElementById("seePasswordIcon");
const emailInput = document.getElementById("email");

seePasswordBtn.addEventListener("click", () => {
  if (passwordInput.type == "password") {
    passwordInput.type = "text";
    seePasswordIcon.src = "./assets/img/eye-off.svg";
  } else {
    passwordInput.type = "password";
    seePasswordIcon.src = "./assets/img/eye.svg";
  }
});

passwordInput.addEventListener("keypress", (e) => {
  if (e.code === "Space") {
    e.preventDefault();
  }
  const updatedInput = passwordInput.value.replace(/\s/g, "");
  passwordInput.value = updatedInput;
});

emailInput.addEventListener("keypress", (e) => {
  if (e.code === "Space") {
    e.preventDefault();
  }
  const updatedInput = emailInput.value.replace(/\s/g, "");
  emailInput.value = updatedInput;
});
