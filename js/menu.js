let button = document.querySelector('.header__button');
let menu = document.querySelector('.header__nav');
let active = document.querySelector('.active');
let img = document.querySelector('.hero__block-img');
let flag = 0;

button.addEventListener('click', () => {
  if (flag == 0) {
    menu.classList.add('active');
    img.style.zIndex = 1;
    flag = 1;
    let img1 = document.querySelector('.hero__block-img');
    img1.style.zIndex = 1;
  }
  else {
    menu.classList.remove('active');
    img.style.zIndex = 10;
    flag = 0;
    let img1 = document.querySelector('.hero__block-img');
    img1.style.zIndex = 11;
  }
});

function checkScreenSize() {
  let width = window.innerWidth;
  console.log('Ширина:', width);
  if (width > 1023) {
    menu.classList.remove('active');
    img.style.zIndex = 10;
    flag = 0;
  }
  return width;
}

window.addEventListener('resize', checkScreenSize);
checkScreenSize();


