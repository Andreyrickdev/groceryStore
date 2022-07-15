let searchForm = document.querySelector('.search-form');
let searchBtn = document.querySelector('#search-btn');

searchBtn.addEventListener('click', () => {
    searchForm.classList.toggle('active');
})

let shoppingCart = document.querySelector('.shopping-cart');
let cartBtn = document.querySelector('#cart-btn');

cartBtn.addEventListener('click', () => {
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navBar.classList.remove('active');
})

let loginForm = document.querySelector('.login-form');
let loginBtn = document.querySelector('#login-btn');

loginBtn.addEventListener('click', () => {
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navBar.classList.remove('active');
})

let navBar = document.querySelector('.navbar');
let menuBtn = document.querySelector('#menu-btn');

menuBtn.addEventListener('click', () => {
    navBar.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
})

window.addEventListener('scroll', () => {
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navBar.classList.remove('active');
})