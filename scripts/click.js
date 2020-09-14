function firstClick() {
    let firstImage = document.querySelector('.first');
        firstImage.classList.toggle('active')
}

function secondClick() {
    let secondImage = document.querySelector('.second');
        secondImage.classList.toggle('active')
}

function thirdClick() {
    let thirdImage = document.querySelector('.third');
        thirdImage.classList.toggle('active')
}

function videoClick() {
    let watchMe = document.querySelector('.watch');
    let videoMe = document.querySelector('video');
        watchMe.classList.toggle('active')
        videoMe.currentTime = 0;
        videoMe.pause();
}

function menuClick() {
    let myMenu = document.querySelector('.nav-list');
        myMenu.classList.toggle('active')
}