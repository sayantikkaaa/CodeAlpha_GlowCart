
const products = [
  { id: 1, name: "Vitamin C Serum", price: 499 },
  { id: 2, name: "Matte Lipstick", price: 299 },
  { id: 3, name: "Glow Moisturizer", price: 399 }
];

let cart = JSON.parse(localStorage.getItem("glowcart")) || [];

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  saveCart();
  alert(product.name + " added to cart!");
}

function removeFromCart(index) {
  cart.splice(index, 1);
  saveCart();
}

function saveCart() {
  localStorage.setItem("glowcart", JSON.stringify(cart));
  displayCart();
}

function displayCart() {
  const cartItems = document.getElementById("cart-items");
  const cartCount = document.getElementById("cart-count");
  const totalElement = document.getElementById("total");

  cartCount.textContent = cart.length;

  if (cart.length === 0) {
    cartItems.innerHTML = "<p>Your cart is empty.</p>";
    totalElement.textContent = "0";
    return;
  }

  cartItems.innerHTML = "";

  let total = 0;

  cart.forEach((product, index) => {
    total += product.price;

    const item = document.createElement("div");
    item.className = "cart-item";

    const details = document.createElement("span");
    details.textContent = `${product.name} - ₹${product.price}`;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.onclick = () => removeFromCart(index);

    item.append(details, removeButton);
    cartItems.appendChild(item);
  });

  totalElement.textContent = total;
}

function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  alert("This is a demo store. Online payment is not available.");
}

displayCart();