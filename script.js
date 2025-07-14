let currentSlideIndex = 0;
const totalSlides = 5;
const slidesContainer = document.getElementById('carouselSlides');
const dots = document.querySelectorAll('.dot');

  window.addEventListener('load', () => {
    setTimeout(() => {
      const loader = document.getElementById('loader');
      if (loader) loader.classList.add('fade-out');
    }, 2000); // adjust delay as needed
  });


window.addEventListener('load', function() {
    const loader = document.getElementById('loader');
    loader.classList.add('hidden');
  });

function updateSlidePosition() {
  const translateX = -currentSlideIndex * (100 / totalSlides);
  slidesContainer.style.transform = `translateX(${translateX}%)`;
    
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlideIndex);
    });
}
function changeSlide(direction) {
    currentSlideIndex += direction;
    
    if (currentSlideIndex >= totalSlides) {
        currentSlideIndex = 0;
    } else if (currentSlideIndex < 0) {
        currentSlideIndex = totalSlides - 1;
    }

    updateSlidePosition();
}

function currentSlide(slideIndex) {
    currentSlideIndex = slideIndex - 1;
    updateSlidePosition();
}

// Auto-slide functionality
function autoSlide() {
    changeSlide(1);
}

let autoSlideInterval = setInterval(autoSlide, 4000);

// Pause auto-slide on hover
const carouselContainer = document.querySelector('.carousel-container');
carouselContainer.addEventListener('mouseenter', () => {
    clearInterval(autoSlideInterval);
});

carouselContainer.addEventListener('mouseleave', () => {
    autoSlideInterval = setInterval(autoSlide, 4000);
});

// Touch/swipe support for mobile
let startX = 0;
let endX = 0;

carouselContainer.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

carouselContainer.addEventListener('touchmove', (e) => {
    endX = e.touches[0].clientX;
});

carouselContainer.addEventListener('touchend', () => {
    const swipeThreshold = 50;
    const swipeDistance = startX - endX;

    if (Math.abs(swipeDistance) > swipeThreshold) {
        if (swipeDistance > 0) {
            changeSlide(1); // Swipe left - next slide
        } else {
            changeSlide(-1); // Swipe right - previous slide
        }
    }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        changeSlide(-1);
    } else if (e.key === 'ArrowRight') {
        changeSlide(1);
    }
});

function toggleCart() {
    const cart = document.getElementById("cartSidebar");
    const overlay = document.getElementById("cartOverlay");
    cart.classList.toggle("active");
    overlay.classList.toggle("active");
}

function performSearch() {
    const query = document.getElementById("searchInput").value;
    alert("Searching for: " + query); // Replace with actual logic
}


const products = [
  {
      id: 1,
      title: "iPhone 15 Pro Max (256GB) - Natural Titanium",
      price: 159900,
      originalPrice: 179900,
      discount: 11,
      rating: 4.5,
      reviews: 1250,
      category: 'Mobiles',
      image: "Images/iphone.jpeg",
      style: 'width: 200px; height: 140px; object-fit: contain; border-radius: 8px;'

  },
  {
      id: 2,
      title: "Samsung Galaxy S24 Ultra (512GB) - Titanium Black",
      price: 139999,
      originalPrice: 154999,
      discount: 10,
      rating: 4.4,
      reviews: 980,
      category: 'Mobiles',
      image: "Images/sumsung s24.jpeg",
      style: 'width: 140px; height: 140px; object-fit: contain; border-radius: 8px;'
      
  },
  {
      id: 3,
      title: "Men's Cotton Casual Shirt - Blue Checkered",
      price: 899,
      originalPrice: 1499,
      discount: 40,
      rating: 4.2,
      reviews: 2341,
      category: 'fashion',
      image: 'Product_images/81K6BMvos0L._AC_SY879_.jpg'
  },
  {
      id: 4,
      title: "Women's Ethnic Kurta Set - Navy Blue",
      price: 1299,
      originalPrice: 2199,
      discount: 41,
      rating: 4.3,
      reviews: 1876,
      category: 'fashion',
      image: "Product_images/61eZhpySLwL._AC_SY879_.jpg",
  },
  {
      id: 5,
      title: "Non-Stick Cookware Set (7 Pieces) - Black",
      price: 2499,
      originalPrice: 4999,
      discount: 50,
      rating: 4.1,
      reviews: 567,
      category: 'Home and Furniture',
      image: 'Images/cookeware set.jpeg'
  },
  {
      id: 6,
      title: "The Psychology of Money - Paperback",
      price: 299,
      originalPrice: 399,
      discount: 25,
      rating: 4.6,
      reviews: 3421,
      category: 'Home and Furniture',
      image: 'Images/book.jpeg'
  },
  {
      id: 7,
      title: "Wireless Bluetooth Headphones - Black",
      price: 1999,
      originalPrice: 3999,
      discount: 50,
      rating: 4.2,
      reviews: 1234,
      category: 'electronics',
      image: 'Images/headphones.jpeg'
  },
  {
      id: 8,
      title: "Yoga Mat (6mm) - Purple with Carrying Strap",
      price: 699,
      originalPrice: 1199,
      discount: 42,
      rating: 4.4,
      reviews: 876,
      category: 'sports',
      image: 'Images/yoga mat.jpeg'
  },
  {
      id: 9,
      title: "Lakme Eyeconic Kajal - Deep Black",
      price: 199,
      originalPrice: 275,
      discount: 28,
      rating: 4.3,
      reviews: 2156,
      category: 'beauty',
      image: 'Images/eye kajal.jpeg'
  },
  {
      id: 10,
      title: "MacBook Air M2 (256GB) - Midnight",
      price: 114900,
      originalPrice: 119900,
      discount: 4,
      rating: 4.7,
      reviews: 456,
      category: 'electronics',
      image: 'Images/mac m2.jpeg'
  },
  {
      id: 11,
      title: "Adidas Running Shoes - White/Blue",
      price: 3499,
      originalPrice: 5999,
      discount: 42,
      rating: 4.5,
      reviews: 1789,
      category: 'sports',
      image: 'Images/shoe2.jpeg'
  },
  {
    id: 12,
    title: "Air Fryer (4L) - Digital Display - Black",
    price: 4999,
    originalPrice: 8999,
    discount: 44,
    rating: 4.2,
    reviews: 2341,
    category: 'Home and Furniture',
    image: 'Images/air fryer.jpeg',
    style: 'width: 140px; height: 140px; object-fit: contain; border-radius: 8px;'  // <- custom style
  },
  {
    id: 13,
    title: "FootBall -13inch",
    price: 1299,
    originalPrice: 2199,
    discount: 41,
    rating: 4.3,
    reviews: 1876,
    category: 'sports',
    image: "Images/football.jpeg"
}
];

function goToSearchPage() {
    const query = document.getElementById("searchInput").value.trim();
    if (query !== "") {
      window.location.href = `searched_page.html?q=${encodeURIComponent(query)}`;
    }
  }
  
// Global variables
let cart = [];
let currentProducts = [...products];
let wishlist = [];

// Initialize the application
function init() {
  renderProducts(currentProducts);
  updateCartUI();
  loadCartFromStorage();
  setupEventListeners();
  updateSlidePosition(); // <-- Add this!
}

// Setup event listeners
function setupEventListeners() {
  // Search functionality
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
      searchInput.addEventListener('keypress', function(e) {
          if (e.key === 'Enter') {
              performSearch();
          }
      });
  }

  // Close cart when clicking outside
  document.addEventListener('click', function(e) {
      const cartSidebar = document.getElementById('cartSidebar');
      const cartButton = e.target.closest('.nav-btn');
      
      if (cartSidebar && cartSidebar.classList.contains('open') && !cartSidebar.contains(e.target) && !cartButton) {
          toggleCart();
      }
  });
}

// Render products to the grid
function renderProducts(productsToRender) {
  const productGrid = document.getElementById('productGrid');
  if (!productGrid) return;
  
  productGrid.innerHTML = '';

  if (productsToRender.length === 0) {
    productGrid.innerHTML = '<p style="text-align: center; color: #666; grid-column: 1/-1; padding: 40px;">No products found</p>';
    return;
  }

  productsToRender.forEach(product => {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';

    productCard.innerHTML = `
      <div class="product-image">
        <a href="product.html?id=${product.id}" style="text-decoration: none; color: inherit;">
          <img src="${product.image}" alt="${product.title}" style="${product.style || 'width: 100%; height: 180px; object-fit: contain; border-radius: 8px;'}" />
        </a>
      </div>
      <div class="product-info">
        <a href="product.html?id=${product.id}" style="text-decoration: none; color: inherit;">
          <div class="product-title">${product.title}</div>
        </a>
        <div class="product-price">
          <span class="current-price">₹${product.price.toLocaleString()}</span>
          <span class="original-price">₹${product.originalPrice.toLocaleString()}</span>
          <span class="discount">${product.discount}% off</span>
        </div>
        <div class="product-rating">
          <div class="rating-badge">
            ${product.rating} ⭐
          </div>
          <span>(${product.reviews.toLocaleString()})</span>
        </div>
        <div style="display: flex; gap: 8px; margin-top: 12px;">
          <button class="add-to-cart" onclick="event.stopPropagation(); addToCart(${product.id})" style="flex: 1;">
            Add to Cart
          </button>
          <button class="wishlist-btn" onclick="event.stopPropagation(); toggleWishlist(${product.id})" style="background: none; border: 1px solid #ddd; width: 40px; border-radius: 4px; cursor: pointer;">
            ${wishlist.includes(product.id) ? '❤️' : '🤍'}
          </button>
        </div>
      </div>
    `;

    productGrid.appendChild(productCard);
  });
}
//  Show auto-suggestions as user types
searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase().trim();
  suggestionsBox.innerHTML = '';
  suggestionsBox.style.display = 'none';

  if (query === '') return;

  const matches = products.filter(product => product.title.toLowerCase().includes(query));

  if (matches.length > 0) {
    suggestionsBox.style.display = 'block';

    matches.slice(0, 5).forEach(product => {
      const div = document.createElement('div');
      div.textContent = product.title;
      div.onclick = () => {
        searchInput.value = product.title;
        suggestionsBox.innerHTML = '';
        suggestionsBox.style.display = 'none';
        performSearch();  // Trigger filtered product rendering
      };
      suggestionsBox.appendChild(div);
    });
  }
});

// Hide suggestions when user clicks outside
document.addEventListener('click', (e) => {
  if (!suggestionsBox.contains(e.target) && e.target !== searchInput) {
    suggestionsBox.style.display = 'none';
  }
});


// Add product to cart
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const existingItem = cart.find(item => item.id === productId);

  if (existingItem) {
      existingItem.quantity += 1;
  } else {
      cart.push({ ...product, quantity: 1 });
  }

  updateCartUI();
  saveCartToStorage();
  showNotification('Product added to cart!', 'success');
}

// Update cart UI
function updateCartUI() {
    const cartBadge = document.getElementById('cartBadge');
    const cartItems = document.getElementById('cartItems');
    const subtotal = document.getElementById('subtotal');
    const total = document.getElementById('total');
  
    if (!cartBadge) return;
  
    // Update cart badge
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartBadge.textContent = totalItems;
  
    // Update cart items
    if (cartItems) {
      cartItems.innerHTML = '';
      if (cart.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center; color: #666; padding: 40px;">Your cart is empty</p>';
      } else {
        cart.forEach(item => {
          const cartItem = document.createElement('div');
          cartItem.className = 'cart-item';
          cartItem.innerHTML = `
            <div class="cart-item-image">
              <img src="${item.image}" alt="${item.title}" style="width: 60px; height: auto; border-radius: 8px;">
            </div>
            <div class="cart-item-info">
              <div class="cart-item-title">${item.title.substring(0, 50)}...</div>
              <div class="cart-item-price">₹${item.price.toLocaleString()}</div>
              <div class="quantity-controls">
                <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                <span style="margin: 0 8px;">${item.quantity}</span>
                <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                <button class="qty-btn" onclick="removeFromCart(${item.id})" style="margin-left: 8px; color: red;">🗑</button>
              </div>
            </div>
          `;
          cartItems.appendChild(cartItem);
        });
      }
    }
  
    // Update totals
    const subtotalAmount = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    if (subtotal) subtotal.textContent = `₹${subtotalAmount.toLocaleString()}`;
    if (total) total.textContent = `₹${subtotalAmount.toLocaleString()}`;
  }
  

// Update item quantity in cart
function updateQuantity(productId, change) {
  const item = cart.find(item => item.id === productId);
  if (item) {
      item.quantity += change;
      if (item.quantity <= 0) {
          removeFromCart(productId);
      } else {
          updateCartUI();
          saveCartToStorage();
      }
  }
}

// Remove item from cart
function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  updateCartUI();
  saveCartToStorage();
  showNotification('Product removed from cart', 'info');
}

// Toggle cart sidebar
function toggleCart() {
  const cartSidebar = document.getElementById('cartSidebar');
  const cartOverlay = document.getElementById('cartOverlay');
  
  if (cartSidebar && cartOverlay) {
      cartSidebar.classList.toggle('open');
      cartOverlay.classList.toggle('open');
  }
}

// Search functionality
function performSearch() {
  const searchInput = document.getElementById('searchInput');
  if (!searchInput) return;

  const searchTerm = searchInput.value.toLowerCase().trim();
  if (searchTerm === '') return;

  // Redirect to search results page with query
  window.location.href = `searched_page.html?q=${encodeURIComponent(searchTerm)}`;
}


// Filter products by category
function filterByCategory(category) {
  currentProducts = products.filter(product => product.category === category);
  renderProducts(currentProducts);
  
  // Scroll to products section
  const productsSection = document.getElementById('products');
  if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
  }
  
  showNotification(`Showing ${category} products`, 'info');
}

// Toggle wishlist
function toggleWishlist(productId) {
  const index = wishlist.indexOf(productId);
  if (index > -1) {
      wishlist.splice(index, 1);
      showNotification('Removed from wishlist', 'info');
  } else {
      wishlist.push(productId);
      showNotification('Added to wishlist', 'success');
  }
  
  // Re-render products to update wishlist icons
  renderProducts(currentProducts);
  saveWishlistToStorage();
}

// Show notification
function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.style.cssText = `
      position: fixed;
      top: 80px;
      right: 20px;
      background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3'};
      color: white;
      padding: 12px 24px;
      border-radius: 4px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      z-index: 3000;
      font-size: 14px;
      font-weight: 500;
      opacity: 0;
      transform: translateX(100%);
      transition: all 0.3s ease;
  `;
  notification.textContent = message;
  document.body.appendChild(notification);
  
  // Animate in
  setTimeout(() => {
      notification.style.opacity = '1';
      notification.style.transform = 'translateX(0)';
  }, 10);
  
  // Remove after 3 seconds
  setTimeout(() => {
      notification.style.opacity = '0';
      notification.style.transform = 'translateX(100%)';
      setTimeout(() => {
          document.body.removeChild(notification);
      }, 300);
  }, 3000);
}

// Checkout functionality
function checkout() {
  if (cart.length === 0) {
      showNotification('Your cart is empty!', 'error');
      return;
  }
  
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  
  // Simple checkout simulation
  const confirmed = confirm(`Proceed to checkout?\n\nItems: ${itemCount}\nTotal: ₹${total.toLocaleString()}`);
  
  if (confirmed) {
      // Simulate order processing
      showNotification('Order placed successfully! 🎉', 'success');
      cart = [];
      updateCartUI();
      saveCartToStorage();
      toggleCart();
  }
}

// Sort products
function sortProducts(sortBy) {
  switch(sortBy) {
      case 'price-low':
          currentProducts.sort((a, b) => a.price - b.price);
          break;
      case 'price-high':
          currentProducts.sort((a, b) => b.price - a.price);
          break;
      case 'rating':
          currentProducts.sort((a, b) => b.rating - a.rating);
          break;
      case 'discount':
          currentProducts.sort((a, b) => b.discount - a.discount);
          break;
      case 'name':
          currentProducts.sort((a, b) => a.title.localeCompare(b.title));
          break;
      default:
          currentProducts = [...products];
  }
  renderProducts(currentProducts);
}

// Filter products by price range
function filterByPrice(minPrice, maxPrice) {
  currentProducts = products.filter(product => 
      product.price >= minPrice && product.price <= maxPrice
  );
  renderProducts(currentProducts);
}

// Save cart to memory (simulating localStorage)
function saveCartToStorage() {
  // In a real application, you would use localStorage
  // localStorage.setItem('flipmart_cart', JSON.stringify(cart));
  // For this demo, we'll just keep it in memory
}

// Load cart from memory (simulating localStorage)
function loadCartFromStorage() {
  // In a real application, you would use localStorage
  // const savedCart = localStorage.getItem('flipmart_cart');
  // if (savedCart) {
  //     cart = JSON.parse(savedCart);
  //     updateCartUI();
  // }
}

// Save wishlist to memory (simulating localStorage)
function saveWishlistToStorage() {
  // In a real application, you would use localStorage
  // localStorage.setItem('flipmart_wishlist', JSON.stringify(wishlist));
}

// Load wishlist from memory (simulating localStorage)
function loadWishlistFromStorage() {
  // In a real application, you would use localStorage
  // const savedWishlist = localStorage.getItem('flipmart_wishlist');
  // if (savedWishlist) {
  //     wishlist = JSON.parse(savedWishlist);
  // }
}

// Get recommended products based on cart
function getRecommendedProducts() {
  if (cart.length === 0) return [];
  
  const cartCategories = [...new Set(cart.map(item => item.category))];
  return products.filter(product => 
      cartCategories.includes(product.category) && 
      !cart.some(cartItem => cartItem.id === product.id)
  ).slice(0, 4);
}

// Quick view product
function quickView(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  
  const modal = document.createElement('div');
  modal.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.8);
      z-index: 4000;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
  `;
  
  modal.innerHTML = `
      <div style="background: white; border-radius: 8px; padding: 24px; max-width: 500px; width: 100%; position: relative;">
          <button onclick="this.parentElement.parentElement.remove()" style="position: absolute; top: 12px; right: 12px; background: none; border: none; font-size: 24px; cursor: pointer;">&times;</button>
          <div style="text-align: center; margin-bottom: 20px;">
              <div style="font-size: 64px; margin-bottom: 16px;">${product.icon}</div>
              <h3>${product.title}</h3>
          </div>
          <div style="margin-bottom: 16px;">
              <div style="font-size: 24px; font-weight: bold; color: #2874f0;">₹${product.price.toLocaleString()}</div>
              <div style="text-decoration: line-through; color: #878787;">₹${product.originalPrice.toLocaleString()}</div>
              <div style="color: #388e3c; font-weight: 500;">${product.discount}% off</div>
          </div>
          <div style="margin-bottom: 20px;">
              <div style="background: #388e3c; color: white; padding: 4px 8px; border-radius: 4px; display: inline-block;">
                  ${product.rating} ⭐ (${product.reviews.toLocaleString()} reviews)
              </div>
          </div>
          <button onclick="addToCart(${product.id}); this.parentElement.parentElement.remove();" style="width: 100%; background: #2874f0; color: white; border: none; padding: 12px; border-radius: 4px; font-size: 16px; cursor: pointer;">
              Add to Cart
          </button>
      </div>
  `;
  
  document.body.appendChild(modal);
  
  // Close on backdrop click
  modal.addEventListener('click', function(e) {
      if (e.target === modal) {
          modal.remove();
      }
  });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', init);

// Export functions for global access (if needed)
window.flipmart = {
  addToCart,
  removeFromCart,
  updateQuantity,
  toggleCart,
  performSearch,
  filterByCategory,
  sortProducts,
  filterByPrice,
  toggleWishlist,
  checkout,
  quickView
};