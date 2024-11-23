let nav = document.createElement('nav')
nav.classList.add('inlineMrg')

nav.innerHTML = `
        <div class="logo">
            <img src="./assets/images/Logo.png" alt="">
        </div>

        <ul>
            <li><a href="index.html" class="active">home</a></li>
            <li><a href="">about</a></li>
            <li><a href="shop.html">shop</a></li>
            <li><a href="contact.html">contact</a></li>
        </ul>
        <div class="menu">
            <i class="fas fa-bars menu-icon"></i>
        </div>
        <div class="icons">
            <div class="notify">
                <div class="counter">0</div>
                <i class="fas fa-heart"></i>
            </div>
            <div class="cart">
                <div class="counter">0</div>
                <i class="fas fa-cart-shopping"></i>
            </div>
        </div>
`
document.body.prepend(nav);

const cartIcon = document.querySelector('nav .cart');

cartIcon.addEventListener('click', ()=> {
    location.href = "../cart.html"
});

const notifyIcon = document.querySelector('nav .notify')

notifyIcon.addEventListener('click',()=>{
    location.href = '../wishlist.html'
})


const menuUl =document.querySelector('nav ul');
const menuIcon = document.querySelector('nav .menu-icon')

console.log(menuIcon);


menuIcon.addEventListener('click', () => {
    menuUl.classList.add('display_menu')
    });
    

const links = document.querySelectorAll('nav ul li a')

    links.forEach((ele) => {
        ele.addEventListener('click' , ()=> {
            links.forEach((e) => {
                e.classList.remove('active')
            })
            ele.classList.add('active')
        })
    })
    
