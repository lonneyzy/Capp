'use strict';


let slide_img = document.querySelectorAll('.slide_img')
let next = document.querySelector('.next')
let prev = document.querySelector('.prev')
let reservation = document.querySelector('.reservation')
let modal = document.querySelector('.modal');
let modal_close = document.querySelector('.modal_close');
let trip_slide = document.querySelectorAll('.trip_slide')
let next_t = document.querySelector('.next_t')
let prev_t = document.querySelector('.prev_t')
let i = 0
let x = 1



for (let i = 0; i < slide_img.length; i++) {
    slide_img[i].style.display = 'none'
}
slide_img[0].style.display = 'block'


next.addEventListener('click', () => {
    if (i < 2){
        slide_img[i].style.display = 'none';
        i++; x++;
        slide_img[i].style.display = 'block';
    }else{
        slide_img[i].style.display = 'none';
        i = 0; x = 1;
        slide_img[i].style.display = 'block';
    }
})

prev.addEventListener('click', () => {
    if (i > 0 ){
        slide_img[i].style.display = 'none';
        i--; x--;
        slide_img[i].style.display = 'block';
    }else{
        slide_img[i].style.display = 'none';
        i = 2; x = 4;
        slide_img[i].style.display = 'block';
    }
})

reservation.addEventListener('click', () => {
    modal.style.display = 'block';
})


modal_close.addEventListener('click', () => {
    modal.style.display = 'none';
})


for (let i = 0; i < trip_slide.length; i++) {
    trip_slide[i].style.display = 'none'
}
trip_slide[0].style.display = 'block'

next_t.addEventListener('click', () => {
    if (i < 2){
        trip_slide[i].style.display = 'none';
        i++; x++;
        trip_slide[i].style.display = 'block';
    }else{
        trip_slide[i].style.display = 'none';
        i = 0; x = 1;
        trip_slide[i].style.display = 'block';
    }
})

prev_t.addEventListener('click', () => {
    if (i > 0 ){
        trip_slide[i].style.display = 'none';
        i--; x--;
        trip_slide[i].style.display = 'block';
    }else{
        trip_slide[i].style.display = 'none';
        i = 2; x = 4;
        trip_slide[i].style.display = 'block';
    }
})


