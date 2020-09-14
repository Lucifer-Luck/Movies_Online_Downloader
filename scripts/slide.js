let logMe = document.querySelector('.login');
let regMe = document.querySelector('.register');

function register() {
    logMe.style.left = "-100rem";
    regMe.style.right = "0rem";
}

function login() {
    logMe.style.left = "0rem";
    regMe.style.right = "-100rem";
}