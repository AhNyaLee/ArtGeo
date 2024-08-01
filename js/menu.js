let button = document.querySelector('.header__button');
let menu = document.querySelector('.header__nuv');
let active=document.querySelector('.active')
let flag=0;

button.addEventListener('click', () => {
  if(flag==0){
    menu.classList.add('active');
    flag=1;
  }
  else{
    menu.classList.remove('active');
    flag=0;
  }
});
