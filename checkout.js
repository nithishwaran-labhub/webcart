// Load cart from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateSummary() {
    let totalItems = cart.length;
    let totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

    document.getElementById("total-items").innerText = "Total Items: " + totalItems;
    document.getElementById("total-price").innerText = "Total Price: ₹" + totalPrice;
}

function placeOrder() {
    alert("Order Placed Successfully! 🎉");

    // Clear cart
    localStorage.removeItem("cart");

    // Redirect to home
    window.location.href = "home.html";
}

updateSummary();
