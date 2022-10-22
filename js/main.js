"use strict";

window.addEventListener('keydown', function (e) {
  const AUDIO = document.querySelector(`.drums__audio[data-code=${e.code}]`);
  const KEY = document.querySelector(`.drums__key[data-code=${e.code}]`);

  if (!AUDIO) return; // Stop th function from runing all together

  AUDIO.currentTime = 0; // Rewind to the start
  AUDIO.play();

  KEY.classList.add('drums__key--pressed');
});

let removeTransition = (e) => {
  if (e.propertyName !== 'transform') return;
  e.currentTarget.classList.remove('drums__key--pressed');
}

const KEYS = document.querySelectorAll('.drums__key');
KEYS.forEach(key => key.addEventListener('transitionend', removeTransition));