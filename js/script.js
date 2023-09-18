const registrationCard = document.getElementById("registration-card");
const loginCard = document.getElementById("login-card");
const loginLink = document.getElementById("login-link");
const registerLink = document.getElementById("register-link");
const loginButton = document.getElementById("btn-login");
const formContainer = document.getElementById("form-container");
const loginForm = document.getElementById("login-form");
const registrationForm = document.getElementById("registration-form");
const closeBtn = document.getElementById("close-btn");

registerLink.addEventListener("click", (event) => {
    loginForm.reset();
    loginCard.classList.add("inactive");
    registrationCard.classList.remove("inactive");
});

loginLink.addEventListener("click", (event) => {
    registrationForm.reset();
    registrationCard.classList.add("inactive");
    loginCard.classList.remove("inactive");
});

loginButton.addEventListener("click", (event) => {
    registrationForm.reset();
    formContainer.classList.remove("inactive");
    loginCard.classList.remove("inactive");
    registrationCard.classList.add("inactive");
});

closeBtn.addEventListener("click", ()=>{
    loginForm.reset();
    registrationForm.reset();
    formContainer.classList.add("inactive");
})