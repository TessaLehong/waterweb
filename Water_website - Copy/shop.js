let cart = [];
let totalPrice = 0;

function addToCart(item, price, quantityId) {
    const quantity = document.getElementById(quantityId).value;
    const existingItem = cart.find(cartItem => cartItem.name === item);
    if (existingItem) {
        existingItem.quantity += parseInt(quantity);
    } else {
        cart.push({ name: item, price, quantity: parseInt(quantity) });
    }
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalDisplay = document.getElementById('total-price');
    cartItems.innerHTML = '';
    totalPrice = 0;

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ${item.quantity} x $${item.price}`;
        cartItems.appendChild(li);
        totalPrice += item.price * item.quantity;
    });

    totalDisplay.textContent = totalPrice.toFixed(2);
}

function openCheckout() {
    document.getElementById('checkout').classList.remove('hidden');
}
// Add item to cart
function addToCart(productName, productPrice, quantityId) {
    const quantity = document.getElementById(quantityId).value;
    const cartItems = document.getElementById("cart-items");
    const totalPriceElement = document.getElementById("total-price");

    const listItem = document.createElement("li");
    listItem.textContent = `${productName} (x${quantity}) - R${productPrice * quantity}`;
    cartItems.appendChild(listItem);

    // Update total price
    const currentTotal = parseFloat(totalPriceElement.textContent);
    totalPriceElement.textContent = (currentTotal + productPrice * quantity).toFixed(2);

    // Show cart modal
    openModal('cart-modal');
}

// Open modal
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'flex';
}

// Close modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Complete purchase
function completePurchase(event) {
    event.preventDefault();
    alert("Purchase complete! Thank you for shopping.");
    closeModal('checkout-modal');
}
