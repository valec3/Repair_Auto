"use strict";


const navbar=document.querySelector(".navbar");
const navToggler=document.querySelector(".nav_toggle_btn");

navToggler.addEventListener("click",()=>{
    navbar.classList.toggle("active");
    navToggler.classList.toggle("active");
})
window.addEventListener("scroll",()=>{
    navToggler.classList.remove("active");
    navbar.classList.remove("active");
})