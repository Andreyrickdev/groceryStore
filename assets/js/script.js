let searchForm = document.querySelector('.search-form');
let searchBtn = document.querySelector('#search-btn');

searchBtn.addEventListener('click', () => {
    searchForm.classList.toggle('active');
})

let shoppingCart = document.querySelector('.shopping-cart');
let cartBtn = document.querySelector('#cart-btn');

cartBtn.addEventListener('click', () => {
    shoppingCart.classList.toggle('active');
})

let loginForm = document.querySelector('.login-form');
let loginBtn = document.querySelector('#login-btn');

loginBtn.addEventListener('click', () => {
    loginForm.classList.toggle('active');
})

let navBar = document.querySelector('.navbar');
let menuBtn = document.querySelector('#menu-btn');