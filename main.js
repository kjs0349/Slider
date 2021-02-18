const slider1 = document.querySelector('.slide1');
const slider2 = document.querySelector('.slide2');
const slider3 = document.querySelector('.slide3');


const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');

btn1.addEventListener('click', function() {
    console.log(slider1);
    slider1.style.width = '100vw';
    slider2.style.width = '0';
    slider3.style.width = '0';
});
btn2.addEventListener('click', function() {
    console.log(slider1);
    slider1.style.width = '0';
    slider2.style.width = '100vw';
    slider3.style.width = '0';
});
btn3.addEventListener('click', function() {
    console.log(slider1);
    slider1.style.width = '0';
    slider2.style.width = '0';
    slider3.style.width = '100vw';
});