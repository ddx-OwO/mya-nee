'use strict';
var hinataEl = document.getElementById('hinata');
var hinata = document.getElementById('hinata_n');
var hinataMyanee = document.getElementById('hinata_myanee');

var audioMyanee = [
    'assets/sounds/mya-nee_1.mp3',
    'assets/sounds/mya-nee_2.mp3',
    'assets/sounds/mya-nee_3.mp3',
    'assets/sounds/mya-nee_4.mp3',
    'assets/sounds/mya-nee_5.mp3',
    'assets/sounds/mya-nee_6.mp3',
    'assets/sounds/mya-nee_7.mp3',
    'assets/sounds/mya-nee_8.mp3',
    'assets/sounds/mya-nee_9.mp3',
];

var audio = createAudio(audioMyanee);
var clicks = 0;

function createAudio(source) {
    let audioElement = document.createElement('audio');
    let sourceElement = document.createElement('source');
    let sourceRand = Math.floor(Math.random() * source.length);
    sourceElement.type = 'audio/mpeg';
    sourceElement.src = source[sourceRand];
    audioElement.appendChild(sourceElement);
    return audioElement;
}

function toggleImage(down) {
    hinata.style.display = down ? 'none' : 'block';
    hinataMyanee.style.display = down ? 'block' : 'none';
}

function tap() {
    let tapCountElement = document.getElementById('tap-count');

    ++clicks;
    audio = createAudio(audioMyanee).play();
    hinataEl.classList.add('bounce');
    tapCountElement.innerHTML = clicks + ' Mya-nee !';

    toggleImage(true);
}

function release() {
    toggleImage(false);
}

toggleImage(false);

hinataEl.addEventListener('mousedown', function(e) { 
    if(e.button !== 0) return; 
    tap();
});
hinataEl.addEventListener('animationend', function(e) {
    hinataEl.classList.remove('bounce');
    release();
});
