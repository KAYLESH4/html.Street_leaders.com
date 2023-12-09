// Sample product data
const products = [
    { id: 1, name: 'Product 1', price: 249.99, image: 'pictures/IMG-20230309-WA0057.jpg', description: 'Product description goes here.' },
    { id: 2, name: 'Product 2', price: 249.99, image: 'pictures/IMG-20230309-WA0058.jpg', description: 'Product description goes here.' },
    { id: 3, name: 'Product 3', price: 249.99, image: 'pictures/IMG-20230309-WA0060.jpg', description: 'Product description goes here.' },
    { id: 4, name: 'Product 4', price: 249.99, image: 'pictures/IMG-20230309-WA0061.jpg', description: 'Product description goes here.' },
    { id: 5, name: 'Product 5', price: 249.99, image: 'pictures/IMG-20230309-WA0062.jpg', description: 'Product description goes here.' },
    { id: 6, name: 'Product 6', price: 249.99, image: 'pictures/IMG-20230309-WA0072.jpg', description: 'Product description goes here.' },
    { id: 7, name: 'Product 7', price: 249.99, image: 'pictures/IMG-20230309-WA0073.jpg', description: 'Product description goes here.' },
    { id: 8, name: 'Product 8', price: 249.99, image: 'pictures/IMG-20230309-WA0074.jpg', description: 'Product description goes here.' },
    { id: 9, name: 'Product 9', price: 249.99, image: 'pictures/IMG-20230309-WA0075.jpg', description: 'Product description goes here.' },
    { id: 10, name: 'Product 10', price: 249.99, image: 'pictures/IMG-20230309-WA0076.jpg', description: 'Product description goes here.' },
    { id: 11, name: 'Product 11', price: 249.99, image: 'pictures/IMG-20230309-WA0077.jpg', description: 'Product description goes here.' },
    { id: 12, name: 'Product 12', price: 249.99, image: 'pictures/IMG-20230309-WA0079.jpg', description: 'Product description goes here.' },
    { id: 13, name: 'Product 13', price: 249.99, image: 'pictures/IMG-20230309-WA0080.jpg', description: 'Product description goes here.' },
    { id: 14, name: 'Product 14', price: 249.99, image: 'pictures/IMG-20230309-WA0081.jpg', description: 'Product description goes here.' },
    { id: 15, name: 'Product 15', price: 249.99, image: 'pictures/IMG-20230309-WA0084.jpg', description: 'Product description goes here.' },
    { id: 16, name: 'Product 16', price: 249.99, image: 'pictures/IMG-20230309-WA0090.jpg', description: 'Product description goes here.' },
    { id: 17, name: 'Product 17', price: 249.99, image: 'pictures/IMG-20230309-WA0091.jpg', description: 'Product description goes here.' },
    { id: 18, name: 'Product 18', price: 249.99, image: 'pictures/IMG-20230309-WA0092.jpg', description: 'Product description goes here.' },
    { id: 19, name: 'Product 19', price: 249.99, image: 'pictures/IMG-20230309-WA0094.jpg', description: 'Product description goes here.' },
    { id: 20, name: 'Product 20', price: 249.99, image: 'pictures/IMG-20230309-WA0098.jpg', description: 'Product description goes here.' },
    { id: 21, name: 'Product 21', price: 249.99, image: 'pictures/IMG-20230309-WA0099.jpg', description: 'Product description goes here.' },
    { id: 22, name: 'Product 22', price: 249.99, image: 'pictures/IMG-20230309-WA0100.jpg', description: 'Product description goes here.' },
    { id: 23, name: 'Product 23', price: 249.99, image: 'pictures/IMG-20230309-WA0101.jpg', description: 'Product description goes here.' },
    { id: 24, name: 'Product 24', price: 249.99, image: 'pictures/IMG-20230309-WA0103.jpg', description: 'Product description goes here.' },
    { id: 25, name: 'Product 25', price: 249.99, image: 'pictures/IMG-20230309-WA0109.jpg', description: 'Product description goes here.' },
    { id: 26, name: 'Product 26', price: 249.99, image: 'pictures/IMG-20230309-WA0110.jpg', description: 'Product description goes here.' },
    { id: 28, name: 'Product 28', price: 249.99, image: 'pictures/IMG-20230309-WA0112.jpg', description: 'Product description goes here.' },
    { id: 29, name: 'Product 29', price: 249.99, image: 'pictures/IMG-20230309-WA0113.jpg', description: 'Product description goes here.' },
    { id: 30, name: 'Product 30', price: 249.99, image: 'pictures/IMG-20230309-WA0114.jpg', description: 'Product description goes here.' },
    { id: 31, name: 'Product 31', price: 249.99, image: 'pictures/IMG-20230309-WA0115.jpg', description: 'Product description goes here.' },
    { id: 32, name: 'Product 32', price: 249.99, image: 'pictures/IMG-20230309-WA0063.jpg', description: 'Product description goes here.' },
    { id: 33, name: 'Product 33', price: 249.99, image: 'pictures/IMG-20231127-WA0020.jpg', description: 'Product description goes here.' },
    { id: 35, name: 'Product 35', price: 249.99, image: 'pictures/IMG-20231127-WA0022.jpg', description: 'Product description goes here.' },
    { id: 36, name: 'Product 36', price: 249.99, image: 'pictures/IMG-20231127-WA0024.jpg', description: 'Product description goes here.' },
    { id: 38, name: 'Product 38', price: 249.99, image: 'pictures/IMG-20231127-WA0026.jpg', description: 'Product description goes here.' },
    { id: 39, name: 'Product 39', price: 249.99, image: 'pictures/IMG-20231127-WA0027.jpg', description: 'Product description goes here.' },
    { id: 40, name: 'Product 40', price: 249.99, image: 'pictures/IMG-20231127-WA0031.jpg', description: 'Product description goes here.' },
    { id: 41, name: 'Product 41', price: 249.99, image: 'pictures/IMG-20231127-WA0032.jpg', description: 'Product description goes here.' },
    { id: 42, name: 'Product 42', price: 249.99, image: 'pictures/IMG-20231127-WA0033.jpg', description: 'Product description goes here.' },
    { id: 43, name: 'Product 43', price: 249.99, image: 'pictures/IMG-20231127-WA0034.jpg', description: 'Product description goes here.' },
    { id: 44, name: 'Product 44', price: 249.99, image: 'pictures/IMG-20231127-WA0035.jpg', description: 'Product description goes here.' },
    { id: 45, name: 'Product 45', price: 249.99, image: 'pictures/IMG-20231127-WA0037.jpg', description: 'Product description goes here.' },
    { id: 46, name: 'Product 46', price: 249.99, image: 'pictures/IMG-20231127-WA0038.jpg', description: 'Product description goes here.' },
    { id: 47, name: 'Product 47', price: 249.99, image: 'pictures/IMG-20231127-WA0039.jpg', description: 'Product description goes here.' },
    { id: 48, name: 'Product 48', price: 249.99, image: 'pictures/IMG-20231127-WA0040.jpg', description: 'Product description goes here.' },
    { id: 49, name: 'Product 49', price: 249.99, image: 'pictures/IMG-20231127-WA0041.jpg', description: 'Product description goes here.' },
    { id: 50, name: 'Product 50', price: 249.99, image: 'pictures/IMG-20231127-WA0042.jpg', description: 'Product description goes here.' },
    { id: 52, name: 'Product 52', price: 249.99, image: 'pictures/IMG-20231127-WA0044.jpg', description: 'Product description goes here.' },
    { id: 53, name: 'Product 53', price: 249.99, image: 'pictures/IMG-20231127-WA0045.jpg', description: 'Product description goes here.' },
    { id: 57, name: 'Product 57', price: 249.99, image: 'pictures/IMG-20231127-WA0049.jpg', description: 'Product description goes here.' },
    { id: 58, name: 'Product 58', price: 249.99, image: 'pictures/IMG-20231127-WA0050.jpg', description: 'Product description goes here.' },
    { id: 59, name: 'Product 59', price: 249.99, image: 'pictures/IMG-20231127-WA0051.jpg', description: 'Product description goes here.' },
    { id: 60, name: 'Product 60', price: 249.99, image: 'pictures/IMG-20231127-WA0052.jpg', description: 'Product description goes here.' },
    { id: 62, name: 'Product 62', price: 249.99, image: 'pictures/IMG-20231127-WA0054.jpg', description: 'Product description goes here.' },
    { id: 63, name: 'Product 63', price: 249.99, image: 'pictures/IMG-20231127-WA0055.jpg', description: 'Product description goes here.' },
    { id: 65, name: 'Product 65', price: 249.99, image: 'pictures/IMG-20230309-WA0064.jpg', description: 'Product description goes here.' },
    { id: 66, name: 'Product 66', price: 249.99, image: 'pictures/IMG-20230309-WA0065.jpg', description: 'Product description goes here.' },
    { id: 67, name: 'Product 67', price: 249.99, image: 'pictures/IMG-20230309-WA0066.jpg', description: 'Product description goes here.' },
    { id: 68, name: 'Product 68', price: 249.99, image: 'pictures/IMG-20230309-WA0067.jpg', description: 'Product description goes here.' },
    { id: 69, name: 'Product 69', price: 249.99, image: 'pictures/IMG-20230309-WA0070.jpg', description: 'Product description goes here.' },
    { id: 70, name: 'Product 70', price: 249.99, image: 'pictures/IMG-20230309-WA0071.jpg', description: 'Product description goes here.' },
    { id: 71, name: 'Product 71', price: 249.99, image: 'pictures/IMG-20230309-WA0089.jpg', description: 'Product description goes here.' },
    { id: 72, name: 'Product 72', price: 249.99, image: 'pictures/IMG-20230309-WA0093.jpg', description: 'Product description goes here.' },
    { id: 73, name: 'Product 73', price: 249.99, image: 'pictures/IMG-20230309-WA0102.jpg', description: 'Product description goes here.' },
    { id: 74, name: 'Product 74', price: 249.99, image: 'pictures/IMG-20230309-WA0095.jpg', description: 'Product description goes here.' },
    { id: 75, name: 'Product 75', price: 249.99, image: 'pictures/IMG-20230309-WA0068.jpg', description: 'Product description goes here.' },
    { id: 76, name: 'Product 76', price: 249.99, image: 'pictures/IMG-20230309-WA0087.jpg', description: 'Product description goes here.' },
    { id: 77, name: 'Product 77', price: 249.99, image: 'pictures/IMG-20230309-WA0088.jpg', description: 'Product description goes here.' },
    { id: 78, name: 'Product 78', price: 249.99, image: 'pictures/IMG-20230309-WA0096.jpg', description: 'Product description goes here.' },
    { id: 79, name: 'Product 79', price: 249.99, image: 'pictures/IMG-20230309-WA0097.jpg', description: 'Product description goes here.' },
    { id: 80, name: 'Product 80', price: 249.99, image: 'pictures/IMG-20230309-WA0106.jpg', description: 'Product description goes here.' },
    { id: 81, name: 'Product 81', price: 249.99, image: 'pictures/IMG-20230309-WA0107.jpg', description: 'Product description goes here.' },
    { id: 82, name: 'Product 82', price: 249.99, image: 'pictures/IMG-20230309-WA0108.jpg', description: 'Product description goes here.' },
    { id: 83, name: 'Product 83', price: 249.99, image: 'pictures/IMG-20230309-WA0069.jpg', description: 'Product description goes here.' },
    { id: 84, name: 'Product 84', price: 249.99, image: 'pictures/IMG-20230309-WA0086.jpg', description: 'Product description goes here.' },
    { id: 85, name: 'Product 85', price: 249.99, image: 'pictures/IMG-20230309-WA0078.jpg', description: 'Product description goes here.' },
    { id: 86, name: 'Product 86', price: 249.99, image: 'pictures/IMG-20230309-WA0104.jpg', description: 'Product description goes here.' },
    { id: 87, name: 'Product 87', price: 249.99, image: 'pictures/IMG-20231127-WA0028.jpg', description: 'Product description goes here.' },
    { id: 88, name: 'Product 88', price: 249.99, image: 'pictures/IMG-20230309-WA0059.jpg', description: 'Product description goes here.' },
     // Add more products as needed
  ];
  
  // Function to display products
  function displayProducts() {
    const container = document.getElementById('product-container');
  
    products.forEach(product => {
      const productElement = document.createElement('div');
      productElement.classList.add('product');
      productElement.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <div class="product-info">
          <h3>${product.name}</h3>
          <p>${product.description}</p>
          <div class="add-to-cart" onclick="addToCart('${product.name}', ${product.price})">Add to Cart</div>
        </div>
      `;
  
      container.appendChild(productElement);
    });
  }
  
  // Function to add a product to the cart
  function addToCart(productName, productPrice) {
    const cartItems = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');
  
    const cartItem = document.createElement('li');
    cartItem.textContent = `${productName} - $${productPrice.toFixed(2)}`;
    cartItems.appendChild(cartItem);
  
    // Calculate and display the total
    const currentTotal = parseFloat(totalElement.textContent.replace('Total: $', ''));
    const newTotal = currentTotal + productPrice;
    totalElement.textContent = `Total: $${newTotal.toFixed(2)}`;
  }
  
  // Call the displayProducts function when the page loads
  document.addEventListener('DOMContentLoaded', displayProducts);
  
  // ... (your existing JavaScript code) ...

  function sendOrder() {
    const cartItems = document.getElementById('cart-items');
    const items = [];
    
    // Gather selected items from the cart
    cartItems.childNodes.forEach(item => {
      items.push(item.textContent);
    });
  
    // Create a message with the selected items
    const message = encodeURIComponent(`Order:\n${items.join('\n')}`);
  
    // Construct the WhatsApp URL
    const whatsappURL = `https://wa.me/+27 766865355?text=${message}`;
  
    // Open WhatsApp in a new tab
    window.open(whatsappURL, '_blank');
  }
  
function clearCart() {
  const cartItems = document.getElementById('cart-items');
  const totalElement = document.getElementById('total');

  // Clear items from the cart
  cartItems.innerHTML = '';

  // Reset the total
  totalElement.textContent = 'Total: $0.00';
}

function clearCart() {
  // Add logic to clear the cart
  document.getElementById('cart-items').innerHTML = '';
  document.getElementById('total').innerText = 'Total: $0.00';
  alert('Cart cleared!');
}

// Example function to dynamically add items to the cart
function addItemToCart(itemName, price) {
  const cartItems = document.getElementById('cart-items');
  const totalElement = document.getElementById('total');

  const li = document.createElement('li');
  li.innerHTML = `${itemName} - $${price.toFixed(2)}`;

  cartItems.appendChild(li);

  // Update the total
  const currentTotal = parseFloat(totalElement.innerText.split('$')[1]);
  const newTotal = currentTotal + price;
  totalElement.innerText = `Total: $${newTotal.toFixed(2)}`;
}

