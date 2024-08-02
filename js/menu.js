let button = document.querySelector('.header__button');
let menu = document.querySelector('.header__nuv');
let active = document.querySelector('.active');
let img = document.querySelector('.hero__block-img');
let flag = 0;

button.addEventListener('click', () => {
  if (flag == 0) {
    menu.classList.add('active');
    img.style.zIndex = 1;
    let svgElement = document.getElementById("svg");
    svgElement.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 1L17 17" stroke="white" stroke-width="2"/>
    <path d="M17 1L1 17" stroke="white" stroke-width="2"/>
    </svg>`;
    flag = 1;
  }
  else {
    menu.classList.remove('active');
    img.style.zIndex = 10;
    let svgElement = document.getElementById("svg");
    svgElement.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="14" height="2" fill="white"/>
      <rect y="7" width="16" height="2" fill="white"/>
      <rect y="14" width="12" height="2" fill="white"/>
      </svg>`;
    flag = 0;
  }
});

function checkScreenSize() {
  let width = window.innerWidth;
  console.log('Ширина:', width);
  if (width > 1023) {
    menu.classList.remove('active');
    img.style.zIndex = 10;
    let svgElement = document.getElementById("svg");
    svgElement.innerHTML = `
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="14" height="2" fill="white"/>
  <rect y="7" width="16" height="2" fill="white"/>
  <rect y="14" width="12" height="2" fill="white"/>
  </svg>`;
    flag = 0;
  }
  return width;
}

window.addEventListener('resize', checkScreenSize);
checkScreenSize();


