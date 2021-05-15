'use strict';

const img = document.querySelector('.starbucks');
const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');
const img3 = document.querySelector('.img3');
const circle = document.querySelector('.circle');
const mainMenu = document.querySelector('.mainMenu');
const header = document.querySelector('header');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');

function show2() {
  mainMenu.style.display = 'flex';
  mainMenu.style.top = '0';
}
function close() {
  mainMenu.style.top = '-110%';
}

openMenu.addEventListener('click', show2);
closeMenu.addEventListener('click', close);

const sliderOne = function () {
  img.src = '../img/img1.png';
  circle.style.background = '#017143';
};

img1.addEventListener('click', sliderOne);

const sliderTwo = function () {
  img.src = '../img/img2.png';
  circle.style.background = '#eb7495';
};

img2.addEventListener('click', sliderTwo);

const sliderThree = function () {
  img.src = '../img/img3.png';
  circle.style.background = '#d752b1';
};

img3.addEventListener('click', sliderThree);

const show = function () {
  ul.classList.add('show-sidebar');
  console.log(`hi`);
  close.classList.add('show-sidebar');
};

window.onload = function () {
  const mainBlock = document.createElement('div');
  const block = document.createElement('div');
  const p = document.createElement('p');
  const submit = document.createElement('button');
  submit.classList.add('btn');
  mainBlock.classList.add('mainBlock');
  block.classList.add('block');
  const text = document.createElement('input');
  block.appendChild(p);
  block.appendChild(text);
  block.appendChild(submit);

  header.appendChild(mainBlock);
  mainBlock.appendChild(block);

  submit.textContent = 'SUBMIT';
  p.innerHTML = `Enter your e-mail address so that we can notify you about the latest products and changes`;
  document.body.style.Filter = 'blur(7px)';
  text.id = 'myText';
  text.type = 'text';
  text.classList.add('text');
  text.placeholder = 'Type your e-mail here...';
  submit.style.cssText = `
  display: inline-block;
    border:none;
    padding-bottom: 8px 20px;
    background: #017143;
    color: #fff;
    border-radius: 40px;
    font-weight: 500;
    letter-spacing: 1px;
    text-decoration: none;
    padding: 15px;
    cursor:pointer;
  `;
  text.style.cssText = `
width:80%;
background:#fff;
border:none;
margin:20px;
padding:10px;
`;
  block.style.cssText = `
  width:500px;
  height:260px;
  background:red;
  position:fixed;
  z-index:10000;
  align-items: center;
    text-align: center;
    padding: 50px;
  `;
  mainBlock.style.cssText = `
width:100%;
height:100%;
display:flex;
justify-content:center;
align-items:center;
position:absolute;


`;

  const popUp = function () {
    block.style.display = 'none';
  };

  submit.addEventListener('click', popUp);
};
