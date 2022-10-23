"use strict";



let playSound = (e) => {
  const AUDIO = document.querySelector(`.drums__audio[data-code=${e.code}]`);
  const KEY = document.querySelector(`.drums__key[data-code=${e.code}]`);

  if (!AUDIO) return; // Stop th function from runing all together

  AUDIO.currentTime = 0; // Rewind to the start
  AUDIO.play();

  KEY.classList.add('drums__key--pressed');

  setTimeout(function () {
    KEY.classList.remove('drums__key--pressed');

    // >> Set cookie to visited here <<
  }, 100);
}

window.addEventListener('keydown', playSound);