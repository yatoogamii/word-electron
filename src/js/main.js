// variables
const main = document.querySelector('.main');
const textButton = document.querySelector('.text-button');
const pointerButton = document.querySelector('.pointer-button');
console.log('test');


// events
pointerButton.addEventListener('click', async () => {
  const { default: normalMode } = await import('./modules/normalMode.js')
  normalMode(main);
})

textButton.addEventListener('click', async () => {
  const { default: textMode } = await import('./modules/textMode.js')
  textMode(main);
})