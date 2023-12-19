//Get all inputs
let form = document.querySelector("#sign-up-form")
let fname = document.querySelector("#fname");
let lname = document.querySelector("#lname");
let email = document.querySelector("#email");
let tel = document.querySelector("#phone");
let password = document.querySelector("#password");
let password2 = document.querySelector("#password-2")
//run event listener an all input on input to check for errors
fname.addEventListener("input", () => {
  checkName(fname);
});

lname.addEventListener("input", ()=>{
  checkName(lname);
})
email.addEventListener("input", ()=>{
  checkEmail(email);
})

password.addEventListener("input", ()=>{
  checkPassword(password);
})

password2.addEventListener("input", ()=>{
  checkPassword(password2);
})


//check names
function checkName(nameInput) {
  let msgLabel = document.querySelector("#" + nameInput.id + "+ span");
  if (nameInput.validity.valueMissing) {
    nameInput.classList.add("error");
    if (nameInput.id === "fname") {
      msgLabel.innerHTML = "*Enter First Name"
    }
    if (nameInput.id === "lname")
      msgLabel.innerHTML = "Enter Last Name";
  }
  else {
    nameInput.classList.remove("error");
    msgLabel.innerHTML = "";
  }
}

//check input for telephone
function checkTel(inputPhone) {
  if (!inputPhone.value.length) {
    document.querySelector("#" + inputPhone.id + "+ span").innerHTML = "";
    inputPhone.classList.remove("error")
    return;
  }

  let regEx = /^[0-9]{10}$/;
  if (!regEx.test(inputPhone.value)) {
    console.log("Value " + inputPhone.value + "is invalid");
    document.querySelector("#" + inputPhone.id + "+ span").innerHTML = "Must be numbers and 10 digits";
    inputPhone.classList.add("error")
  }
  else {
    inputPhone.classList.remove("error")

  }
}

//check input for email
function checkEmail(inputEmail) {
  let emailReg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (inputEmail.validity.valueMissing) {
    document.querySelector("#" + inputEmail.id + "+ span").innerHTML = "Email must be filled";
    inputEmail.classList.add("error")
  }
  else if (!emailReg.test(inputEmail.value)) {
    document.querySelector("#" + inputEmail.id + "+ span").innerHTML = "Wrong Email Format";
    inputEmail.classList.add("error")

  }
  else {
    document.querySelector("#" + inputEmail.id + "+ span").innerHTML = "";
    inputEmail.classList.remove("error")
  }
}
//check input for password
function checkPassword(passwordInput) {
  if (passwordInput.validity.valueMissing) {
    document.querySelector("#" + passwordInput.id + "+ span").innerHTML = "Enter Password";
    passwordInput.classList.add("error");
  }
  else {
    document.querySelector("#" + passwordInput.id + "+ span").innerHTML = "";
    passwordInput.classList.remove("error")
  }
}
//check if passwords match
function checkPasswordMatch(pass1, pass2) {
  if (pass1 !== pass2) {
    password2.classList.add("error")
    document.querySelector("#" + password2.id + "+ span").innerHTML = "Passwords must match";
  }
  else {
    password2.classList.remove("error");
    document.querySelector("#" + password2.id + "+ span").innerHTML = "";
  }
}
//check for errors on all inputs calling all the checkInput functions
//and password match
form.addEventListener("submit", (event) => {
  event.preventDefault();
  checkName(fname);
  checkName(lname);
  checkTel(tel);
  checkEmail(email);
  checkPassword(password);
  checkPassword(password2);
  if (password.value && password2.value)
    checkPasswordMatch(password.value, password2.value);
})