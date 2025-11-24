document.getElementById("total").innerText = localStorage.getItem("totalAmount") || "₹0";

function completePayment() {
    alert("Payment Successful! ✔️");
    localStorage.removeItem("cartItems");
    localStorage.removeItem("totalAmount");
    window.location.href = "home.html";
}
