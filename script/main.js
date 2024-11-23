const BASE_URL = "http://localhost:3000";

const cartProducts = document.querySelector('.selling_cards .swiper-wrapper')


async function getAllProducts() {
    const res = await fetch(`${BASE_URL}/products`);
    const finalRes = await res.json()

    displayProducts(finalRes)

    initializeSwiper()
}

getAllProducts()

function displayProducts(data) {
    data.forEach( (prod)=>{
        ( cartProducts.innerHTML += `
            <div class="swiper-slide">
                <div class="cart  ">
                    <div class="img_container">
                        <span>new</span>
                        <div class="cart_img">
                            <img src="${prod.image}" alt="">
                            <div class="react_love">
                                <i class="fas fa-heart"></i>
                            </div>
                        </div>
                    </div>
                    <div class="price_rate">
                        <h6>${prod.price} EG</h6>
                        <div class="rate">
                            <i class="fas fa-star"></i>
                            <p>${prod.rate}</p>
                        </div>
                    </div>
                    <div class="proberty">
                        <p class="product_name">${prod.name}</p>
                        <div class="details">
                            <div class="info">
                                <i class="fas fa-circle-check"></i>
                                <p>${prod.pieces}</p>
                            </div>
                            <div class="info">
                                <i class="fas fa-circle-check"></i>
                                <p>${prod.statu}</p>
                            </div>
                        </div>
                        <button>Add To Cart</button>
                    </div>
                </div>
            </div> `)
    })
}


function initializeSwiper() {
    new Swiper('.selling_cards', {
        slidesPerView: 4, 
        spaceBetween: 10, 
        navigation: {
            nextEl: '.button-next',
            prevEl: '.button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        loop:true ,
        speed:1000,
        autoplay: {
            delay:2000
        },
        breakpoints: {
            640: { slidesPerView: 1, spaceBetween: 10 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
        },
    });
}


