/* validation variables */
const form = document.getElementById('myForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');
const signupBtn = document.getElementById('signupBtn');

/* form submission event listener */
form.addEventListener('submit', (event) => {
  let errors = false;

  // check name field
  if (nameInput.value === '') {
    nameError.textContent = 'Please enter your name.';
    errors = true;
  } else {
    nameError.textContent = '';
  }

  // check email field
  if (emailInput.value === '') {
    emailError.textContent = 'Please enter your email address.';
    errors = true;
  } else if (!isValidEmail(emailInput.value)) {
    emailError.textContent = 'Please enter a valid email address.';
    errors = true;
  } else {
    emailError.textContent = '';
  }

  // check password field
  if (passwordInput.value === '') {
    passwordError.textContent = 'Please enter your password.';
    errors = true;
  } else if (!isValidPassword(passwordInput.value)) {
    passwordError.textContent = 'Password must be as shown';
    errors = true;
  } else {
    passwordError.textContent = '';
  }

  // prevent form submission if there are any errors
  if (errors) {
    event.preventDefault();
  }
});

/* email validation function */
function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

/* password validation function */
function isValidPassword(password) {
  const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;
  return regex.test(password);
}

/* disable sign up button until all fields are valid */
nameInput.addEventListener('input', toggleSignupBtn);
emailInput.addEventListener('input', toggleSignupBtn);
passwordInput.addEventListener('input', toggleSignupBtn);

function toggleSignupBtn() {
  if (nameInput.validity.valid && emailInput.validity.valid && passwordInput.validity.valid) {
    signupBtn.removeAttribute('disabled');
  } else {
    signupBtn.setAttribute('disabled', 'disabled');
  }
}





let lowerCase = document.getElementById('lower');
let upperCase = document.getElementById('upper');
let digit = document.getElementById('number');
let specialChar = document.getElementById('special');
let minLength = document.getElementById('length');
let toggleBtn =document.getElementById("toggle");

//hide and show password
toggleBtn.onclick = function(){
  if(passwordInput.type==='password'){
    passwordInput.setAttribute('type','text');
    toggleBtn.classList.add('hide');
  }
  else{
    passwordInput.setAttribute('type','password');
    toggleBtn.classList.remove('hide');
  }
}





function checkPassword(data){

  //regular expression pattern
  const lower = new RegExp('(?=.*[a-z])');
  const upper = new RegExp('(?=.*[A-Z])');
  const number = new RegExp('(?=.*[0-9])');
  const special = new RegExp('(?=.*[!@#$%^&*])');
  const length = new RegExp('(?=.{8,})');
  

  //lower case validation cheeck
  if(lower.test(data)){
    lowerCase.classList.add('valid');
  }
  else{
    lowerCase.classList.remove('valid'); 
  }
  //upper case validation cheeck
  if(upper.test(data)){
   upperCase.classList.add('valid');
  }
  else{
    upperCase.classList.remove('valid');
  }
  //number case validation cheeck
  if(number.test(data)){
    digit.classList.add('valid');
  }
  else{
    digit.classList.remove('valid');
  }
  //special case validation cheeck
  if(special.test(data)){
    specialChar.classList.add('valid');
  }
  else{
    specialChar.classList.remove('valid');
  }
  //minimum length case validation cheeck
  if(length.test(data)){
    minLength.classList.add('valid');
  }
  else{
    minLength.classList.remove('valid');
  }
}