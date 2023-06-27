let big = document.querySelector('.big');
let small = document.querySelector('.small');
let img = document.querySelector('.desc_img');
let text = document.querySelector('.desc_text');
const audio = new Audio();

big.addEventListener('click', function() {
    img.style.backgroundImage = 'url(img/big.png)';
    text.innerHTML = 'big';
    audio.src = 'sounds/big.mp3';
    audio.play();
})

small.addEventListener('click', function() {
    img.style.backgroundImage = 'url(img/small.png)';
    text.innerHTML = 'small';
    audio.src = 'sounds/small.mp3';
    audio.play();
})


let micro = document.querySelector('.micro');
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = "en-US";
recognition.interimResults = false;

micro.addEventListener('click', function() {
    recognition.start();
})

recognition.addEventListener('result', function(e) {

    const transcript = e.results[0][0].transcript;
    //console.log(e.results);
    //console.log(e.results[0][0]);
    //console.log(e.results[0][0].transcript);

    text.textContent = transcript;

    if (transcript.includes('big')) {
        big.style.background = 'green';
    }

    if (transcript.includes('small')) {
        small.style.background = 'green';
    }
})

//recognition.addEventListener('end', recognition.start);

// создать массив для кнопок и перебирать кнопки в цикле
// использовать апи