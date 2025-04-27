document.addEventListener('DOMContentLoaded', function () {
  const checkoutForm = document.getElementById('checkout-form');

  checkoutForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // اطلاعات فرم رو میگیریم
    const name = document.getElementById('fullname').value;
    const address = document.getElementById('address').value;
    const card = document.getElementById('card').value;

    if (name && address && card) {
      alert('Order placed successfully!');
      localStorage.removeItem('cart');
      window.location.href = 'index.html'; 
    } else {
      alert('Please fill out all fields!');
    }
  });
});
