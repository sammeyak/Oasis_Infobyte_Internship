
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

const activateSignUp = () => {
    container.classList.add('right-panel-active');
};

const activateSignIn = () => {
    container.classList.remove('right-panel-active');
};

signUpButton.addEventListener('click', activateSignUp);
signInButton.addEventListener('click', activateSignIn);
