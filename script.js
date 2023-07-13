document.addEventListener('DOMContentLoaded', function() {
  const homeSection = document.getElementById('home');
  const shopSection = document.getElementById('shop');
  const aboutSection = document.getElementById('about');
  const contactSection = document.getElementById('contact');
  const cartSection = document.getElementById('cart');

  const homeLink = document.querySelector('nav ul li:nth-child(1) a');
  const shopLink = document.querySelector('nav ul li:nth-child(2) a');
  const aboutLink = document.querySelector('nav ul li:nth-child(3) a');
  const contactLink = document.querySelector('nav ul li:nth-child(4) a');
  const cartIcon = document.querySelector('.cart-icon');
  const cartItemsCount = document.querySelector('.cart-items-count');
  const buyButton = document.getElementById('buy-button');
  const cartItems = document.getElementById('cart-items');

  let cartItemCount = 0;

  homeLink.addEventListener('click', function(event) {
    event.preventDefault();
    showSection(homeSection);
  });

  shopLink.addEventListener('click', function(event) {
    event.preventDefault();
    showSection(shopSection);
  });

  aboutLink.addEventListener('click', function(event) {
    event.preventDefault();
    showSection(aboutSection);
  });

  contactLink.addEventListener('click', function(event) {
    event.preventDefault();
    showSection(contactSection);
  });

  cartIcon.addEventListener('click', function() {
    showSection(cartSection);
  });

  function showSection(section) {
    const sections = [homeSection, shopSection, aboutSection, contactSection, cartSection];
    sections.forEach(function(sec) {
      sec.style.display = 'none';
    });
    section.style.display = 'block';
  }

  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  addToCartButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      const productId = button.dataset.productId;
      const productName = button.dataset.productName;
      const productPrice = button.dataset.productPrice;

      const product = {
        id: productId,
        name: productName,
        price: productPrice
      };

      addToCart(product);
    });
  });

  function addToCart(product) {
    const cartItem = document.createElement('div');
    cartItem.innerHTML = `
      <p>${product.name} - $${product.price}</p>
    `;
    cartItems.appendChild(cartItem);

    cartItemCount++;
    cartItemsCount.innerText = cartItemCount;
  }

  buyButton.addEventListener('click', function() {
    const cartItemsList = document.querySelectorAll('#cart-items p');
    let message = 'Thank you for your purchase!\n\n';

    cartItemsList.forEach(function(item) {
      const itemText = item.innerText;
      message += itemText + '\n';
    });

    alert(message);

    // Clear the cart
    cartItems.innerHTML = '';
    cartItemCount = 0;
    cartItemsCount.innerText = cartItemCount;
  });

  // Show the home section by default
  showSection(homeSection);
});
