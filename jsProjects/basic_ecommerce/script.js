document.addEventListener('DOMContentLoaded', () => {

    const productList = document.getElementById('product-list');
    const cartItems = document.getElementById('cart-items');
    const emptyCart = document.getElementById('empty-cart');
    const cartTotal = document.getElementById('cart-total');
    const totalPrice = document.getElementById('total-price');
    const checkoutButton = document.getElementById('checkout-btn');

    let cartProducts = JSON.parse(localStorage.getItem('products')) || [];

    console.log(cartProducts);
    

    const products = [
        {id: 1, name: "Product 1", price: 29.99},
        {id: 2, name: "Product 2", price: 59.99},
        {id: 3, name: "Product 3", price: 49.99},
    ];

    let cart = cartProducts.length ? cartProducts : [];

    // Load product list dynamically
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <span>
                ${product.name} - $${product.price}
            </span>
            <button data-id="${product.id}">Add to Cart</button>
        `;
        productList.appendChild(productDiv);
    });

    // Add event listener for adding items to the cart
    productList.addEventListener('click', (event) => {
        if (event.target.tagName !== 'BUTTON') return;
        const productId = parseInt(event.target.getAttribute('data-id'));
        const product = products.find(p => p.id === productId);
        cart.push(product);
        updateCart();
        storage();
    });

    // Save cart to localStorage
    function storage() {
        localStorage.setItem('products', JSON.stringify(cart));
    }

    // Update the cart UI
    function updateCart() {
        cartItems.textContent = "";
        let amount = 0;
        if (cart.length === 0) {
            emptyCart.classList.remove('hidden');
            cartTotal.classList.add('hidden');
        } else {
            cart.forEach((product, index) => {
                const cartProductDiv = document.createElement('div');
                cartProductDiv.classList.add('cart-product');
                cartProductDiv.innerHTML = `
                    ${product.name} - $${product.price}
                    <button class="remove-btn" data-index="${index}">Remove</button>
                `;
                amount += product.price;
                cartItems.appendChild(cartProductDiv);
            });
            amount = amount.toFixed(2);
            totalAmount(amount);
            cartTotal.classList.remove('hidden');
            emptyCart.classList.add('hidden');
        }

        // Add event listeners for remove buttons
        const removeButtons = document.querySelectorAll('.remove-btn');
        removeButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                const index = event.target.getAttribute('data-index');
                removeFromCart(index);
            });
        });
    }

    // Remove product from cart
    function removeFromCart(index) {
        cart.splice(index, 1); // Remove the product from the cart
        updateCart();
        storage();
    }

    // Update the total price display
    function totalAmount(amount) {
        totalPrice.innerHTML = `
            $${amount}
        `;
    }

    // Checkout functionality
    checkoutButton.addEventListener('click', () => {
        alert("Checkout Successful");
        cart.length = 0;
        updateCart();
        cartTotal.classList.add('hidden');
        emptyCart.classList.remove('hidden');
        storage();  // Update localStorage after checkout
    });

    // Initialize cart on page load (from localStorage)
    updateCart();
});
