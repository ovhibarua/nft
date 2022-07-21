// header dropDown
let headerList = document.querySelector('#headerList');
let hdrop = document.querySelector('#hdrop');
let fBody = document.querySelector('body');

headerList.addEventListener('click', ()=>{
    hdrop.classList.toggle('show');
});

// nav menu
 let navBtn = document.querySelector('#navBtn');
 let navMenu = document.querySelector('#navMenu');
 let navClose = document.querySelector('#navClose');
 
 
 navBtn.addEventListener('click', ()=>{
     navMenu.classList.add('navDown');
 });

 navClose.addEventListener('click', ()=>{
     navMenu.classList.remove('navDown');
 });

