"use strict";

window.addEventListener('keydown', function (e) {
  const AUDIO = document.querySelector(`.drums__audio[data-code=${e.code}]`);
  const KEY = document.querySelector(`.drums__key[data-code=${e.code}]`);

  if (!AUDIO) return; // Stop th function from runing all together

  AUDIO.currentTime = 0; // Rewind to the start
  AUDIO.play();

  KEY.classList.add('drums__key--pressed');
});

function removeTransition(e) {
  console.log(e);
}

const KEYS = document.querySelector('.drums__key');
KEYS.forEach(key => key.addEventListener('transitionend', removeTransition));