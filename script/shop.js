//npm run db

const BASE_URL = "https://food-e-commerce-api.vercel.app";

const categories_items = document.querySelector('.categories_items');
const categories_cards = document.querySelector('.categories_cards')

let activeProducts = "vegetarian"

async function getAllCategories() {
    const res = await fetch(`${BASE_URL}/categories`);
    const finalRes = await res.json()
    displayCategories(finalRes);
    return finalRes
}

async function getAllProducts(activeProducts) {
    const res = await fetch(`${BASE_URL}/products?categorySlug=${activeProducts}`);
    const finalRes = await res.json()
    // console.log(finalRes);
    displayProducts(finalRes)
}

getAllCategories()
getAllProducts(activeProducts)


function displayCategories(data) {
    data.forEach( (categ)=>{
        ( categories_items.innerHTML += `
                <div class=" items ">
                    <div class="${categ.slug == activeProducts ? 'selected':'hidden'}">
                        <i class="fas fa-check"></i>
                    </div>
                    <div class="image ${categ.slug == activeProducts ? 'active':''} ">
                        <img src="${categ.image}" alt="${categ.slug}">
                    </div>
                    <p>${categ.title}</p>
                </div> `)
    })
    
}

function displayProducts(data) {
    data.forEach( (prod)=>{
        ( categories_cards.innerHTML += `
                <div class="cart ">
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
                </div>`)
    })
}



