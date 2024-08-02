fetch('js/items.json')
.then(response => response.json())
.then(data=> {
    console.log(data)
    const products = document.getElementById('products');
    const comp_desk = document.getElementById("comp_desk");
    const comp_desk2 = document.getElementById("comp_desk2");


    all_products_json = data;

    data.forEach(product => {
        if(product.old_price) {
            const salePercent = Math.floor((product.old_price - product.price) / product.old_price * 100);
            products.innerHTML +=`
                    <div class="product swiper-slide">
                        <div class="icons">
                            <span><i onclick = "addToCart(${product.id}, this)" class="fa-solid fa-cart-plus"></i></span>
                            <span><i class="fa-solid fa-heart"></i></span>
                            <span><i class="fa-solid fa-share-nodes"></i></span>
                        </div>
                        <span class="sale_percent">%${salePercent}</span>
                        <div class="img_product">
                            <img src="${product.img}" alt="">
                            <img class="img_hover" src="${product.img_hover}" alt="">
                        </div>
                        <h3 class="name_product"><a href="#">${product.name}</a></h3>
                        <div class="stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>

                        <div class="price">
                            <p><span>$${product.price}</span></p>
                            <p class="old_price">$${product.old_price}</p>
                        </div>
                    </div>
            `}
    })

    data.forEach(product => {
            
            comp_desk.innerHTML +=`
                    <div class="product swiper-slide">
                        <div class="icons">
                            <span><i onclick = "addToCart(${product.id}, this)" class="fa-solid fa-cart-plus"></i></span>
                            <span><i class="fa-solid fa-heart"></i></span>
                            <span><i class="fa-solid fa-share-nodes"></i></span>
                        </div>
                        <div class="img_product">
                            <img src="${product.img}" alt="">
                            <img class="img_hover" src="${product.img_hover}" alt="">
                        </div>
                        <h3 class="name_product"><a href="#">${product.name}</a></h3>
                        <div class="stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>

                        <div class="price">
                            <p><span>$${product.price}</span></p>
                        </div>
                    </div>
            `
        
    })

    data.forEach(product => {
            
        comp_desk2.innerHTML +=`
                <div class="product swiper-slide">
                    <div class="icons">
                        <span><i onclick = "addToCart(${product.id}, this)" class="fa-solid fa-cart-plus"></i></span>
                        <span><i class="fa-solid fa-heart"></i></span>
                        <span><i class="fa-solid fa-share-nodes"></i></span>
                    </div>
                    <div class="img_product">
                        <img src="${product.img}" alt="">
                        <img class="img_hover" src="${product.img_hover}" alt="">
                    </div>
                    <h3 class="name_product"><a href="#">${product.name}</a></h3>
                    <div class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>

                    <div class="price">
                        <p><span>$${product.price}</span></p>
                    </div>
                </div>
        `
    
})

})