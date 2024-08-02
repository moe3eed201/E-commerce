// open & close cart

var cart = document.querySelector('.cart');

function openCart() {
    cart.classList.add("active")
}
function closeCart() {
    cart.classList.remove("active")
}

// open & close menu

var menu = document.querySelector('#menu');

function openMenu() {
    menu.classList.add("active")
}
function closeMenu() {
    menu.classList.remove("active")
}


// add items in cart

var all_products_json;
var items_in_cart = document.querySelector('.items_in_cart');
let product_cart = [];

function addToCart(id ,btn) {
    product_cart.push(all_products_json[id])
    btn.classList.add("active")
    getCartItems()
}

let count_item = document.querySelector(".count_item");
let price_cart_Head = document.querySelector(".price_cart_Head");
let cartItemsNo = document.querySelector(".cartItemsNo");
let price_cart_total = document.querySelector(".price_cart_total");

function getCartItems() {
    let totalPrice = 0;
    let items_c = "";
    for (let i = 0; i < product_cart.length; i++) {
        items_c += `
        <div class="item_cart">
            <img src="${product_cart[i].img}" alt="">
            <div class="content">
                <h4>${product_cart[i].name}</h4>
                <p class="price_item">$${product_cart[i].price}</p>
            </div>
            <button onclick="removeCartItem()" class="delete_item"><i class="fa-solid fa-trash"></i></button>
        </div>
        `
        totalPrice += product_cart[i].price;
    }
    items_in_cart.innerHTML = items_c
    count_item.innerHTML = product_cart.length
    cartItemsNo.innerHTML = `(${product_cart.length} Items in cart)`
    price_cart_Head.innerHTML = "$" + totalPrice
    price_cart_total.innerHTML = "$" + totalPrice
} 

function removeCartItem(index) {
    product_cart.splice(index,1)
    getCartItems()
}

let back_to_top = document.querySelector('.back_to_top');
back_to_top.addEventListener("click", function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})
