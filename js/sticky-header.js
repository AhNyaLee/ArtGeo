let lastKnownScrollY = 0;
let ticking = false;

function headerChange() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  document.body.classList.add("header-sticky");
  if (scrollTop > 200) {
    let img = document.querySelector('.hero__block-img');
    img.style.zIndex = 1;
  }
  if (scrollTop > 125) {
    document.body.classList.add("header-sticky");


  } else {
    document.body.classList.remove("header-sticky");
    let img = document.querySelector('.hero__block-img');
    img.style.zIndex = 11;
  }

  ticking = false;
}

function onScroll() {
  lastKnownScrollY = window.scrollY;
  requestTick();
}

function requestTick() {
  if (!ticking) {
    requestAnimationFrame(headerChange);
  }

  ticking = true;
}


headerChange();
window.addEventListener("scroll", onScroll, { passive: true });
