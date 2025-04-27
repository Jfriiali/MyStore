document.addEventListener('DOMContentLoaded', function () {
  const productDetailContainer = document.getElementById('product-detail');
  

  const productId = 1; //  تست  محصول خاص
  
  const product = products.find(p => p.id === productId);

  if (productDetailContainer && product) {
    productDetailContainer.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h2>${product.name}</h2>
      <p>$${product.price}</p>
      <p>${product.description}</p>
      <button class="btn-primary" onclick="addToCart(${product.id})">Add to Cart</button>
    `;
  }
});
