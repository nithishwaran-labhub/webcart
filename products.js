let products = [
  {id:1, name:"T-Shirt", price:799, image:"images/tshirt.jpg"},
  {id:2, name:"Shoes", price:1499, image:"images/shoes.jpg"},
  {id:3, name:"Watch", price:2999, image:"images/watch.jpg"},
  {id:4, name:"Bag", price:999, image:"images/bag.jpg"}
];

let cart = [];
let wishlist = [];

if(document.getElementById("product-list")){
    const list = document.getElementById("product-list");
    products.forEach(p=>{
        list.innerHTML += `
        <div class='product'>
            <img src='${p.image}'>
            <h3>${p.name}</h3>
            <p>₹${p.price}</p>
            <button onclick="addToCart(${p.id})">Add to Cart</button>
            <button onclick="addToWishlist(${p.id})">Wishlist</button>
        </div>`;
    });
}

function addToCart(id){
    cart.push(products.find(p=>p.id===id));
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to Cart");
}

function addToWishlist(id){
    wishlist.push(products.find(p=>p.id===id));
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    alert("Added to Wishlist");
}

if(window.location.pathname.includes("cart.html")){
    cart = JSON.parse(localStorage.getItem("cart")) || [];
    let box = document.getElementById("cart-items");
    let total = 0;
    cart.forEach(item=>{
        box.innerHTML += `<p>${item.name} — ₹${item.price}</p>`;
        total += item.price;
    });
    document.getElementById("total").innerText = "Total: ₹" + total;
}

if(window.location.pathname.includes("wishlist.html")){
    wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    let box = document.getElementById("wishlist-items");
    wishlist.forEach(item=>{
        box.innerHTML += `<p>${item.name} — ₹${item.price}</p>`;
    });
}
