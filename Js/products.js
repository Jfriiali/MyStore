const products = [
  {
    id: 1,
    name: 'Headphones',
    price: 99.99,
    image: 'assets/images/headphones.jpg',
    description: 'High-quality wireless headphones with noise cancellation.'
  },
  {
    id: 2,
    name: 'Smartwatch',
    price: 149.99,
    image: 'assets/images/smartwatch.jpg',
    description: 'Smartwatch with fitness tracking and notifications.'
  },
  {
    id: 3,
    name: 'Gaming Mouse',
    price: 59.99,
    image: 'assets/images/mouse.jpg',
    description: 'Ergonomic gaming mouse with customizable buttons.'
  },
  {
    id: 4,
    name: 'Action Camera',
    price: 199.99,
    image: 'assets/images/action-camera.jpg',
    description: 'Waterproof action camera with 4K video recording.'
  },
  {
    id: 5,
    name: 'Bluetooth Speaker',
    price: 89.99,
    image: 'assets/images/speaker.jpg',
    description: 'Portable Bluetooth speaker with deep bass and long battery life.'
  }
];

document.addEventListener('DOMContentLoaded', function () {
  const productsContainer = document.getElementById('products-container');
  
  if (productsContainer) {
    products.forEach(product => {
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');

      productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>$${product.price}</p>
        <p>${product.description}</p>
        <button class="btn-primary add-to-cart-btn" data-id="${product.id}">Add to Cart</button>
      `;

      productsContainer.appendChild(productCard);
    });

    const addToCartBtns = document.querySelectorAll('.add-to-cart-btn');
    addToCartBtns.forEach(btn => {
      btn.addEventListener('click', function () {
        const productId = parseInt(this.getAttribute('data-id'));
        addToCart(productId);
      });
    });
  }
});

function addToCart(productId) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const existingItem = cart.find(item => item.id === productId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ id: productId, quantity: 1 });
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  alert('Product added to cart!');
}
