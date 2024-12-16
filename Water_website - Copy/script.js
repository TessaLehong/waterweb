// Smooth scrolling effect for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Basic form validation
const form = document.querySelector('.contact-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
    form.reset();
});

// Toggle mobile navbar
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});



function updateCart() {
    // Clear cart items
    cartItemsContainer.innerHTML = '';

    // Recalculate total
    let total = 0;
    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsContainer.appendChild(listItem);
        total += item.price;
    });

    totalElement.textContent = `Total: $${total.toFixed(2)}`;
}

// Checkout Button
document.querySelector('.checkout').addEventListener('click', () => {
    if (cart.length > 0) {
        alert('Thank you for your purchase!');
        cart.length = 0; // Clear cart
        updateCart();
    } else {
        alert('Your cart is empty!');
    }
});
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
