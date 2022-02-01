document.addEventListener("DOMContentLoaded", function(event) {
  // Your code to run since DOM is loaded and ready
  glitcher();
});

const glitchWords = [
  'coding',
  'not coding',
  '#blm',
  'resist',
  'fight',
  'coerce',
  'freedom',
  'evade',
  'occupy',
  'liberate',
  'balance'
]

//adjust glitches
const glitcher = () => {
  const glitchers = [].slice.call(document.getElementsByClassName('glitcher'));
  glitchers.map((target) => { addGlitch(target); })
}

const addGlitch = (target) => {
  if (Math.random() > 0.8) {
    target.classList.add('glitch');
    window.setTimeout(clearGlitch, getRandomNumberInclusive(1000, 30000), target);
    let random = getRandomNumberInclusive(0, glitchWords.length - 1);
    // console.log('glitchWords[', random, '] = ', glitchWords[random]);
    target.dataset.text = glitchWords[random].toUpperCase();
  } else {
    window.setTimeout(addGlitch, getRandomNumberInclusive(1000, 30000), target);
  }
}

const clearGlitch = (target) => {
  target.classList.remove('glitch');
  window.setTimeout(addGlitch, getRandomNumberInclusive(1000, 30000), target);
}

const getRandomNumberInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  //The maximum is inclusive and the minimum is inclusive
  return Math.floor(Math.random() * (max - min + 1) + min);
}
