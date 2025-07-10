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
        images: [
            "Images/iphone.jpeg",
            "Images/iphone1.jpg",
            "Images/iphone2.jpg"
        ],
        style: 'width: 500px; height: 500px; object-fit: contain; border-radius: 8px;',
        colors: ['Natural Titanium', 'Blue Titanium', 'White Titanium']
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
        images: ["Images/Samsung Galaxy S24 Ultra, AI Android Smartphone….jpeg", "Images/sumsung s24.jpeg"],
        style: 'width: 500px; height: 500px; object-fit: contain; border-radius: 8px;',
        colors: ['Titanium Black', 'Titanium Gray', 'Titanium Violet']
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
        images: ['Product_images/81K6BMvos0L._AC_SY879_.jpg', "Product_images/81XaPpkCjzL._AC_UL640_QL65_.jpg", "Product_images/91zfg5fY8vL._AC_SY879_.jpg"],
        style: 'width: 500px; height: 500px; object-fit: contain; border-radius: 8px;',
        colors: ['Blue Checkered', 'White', 'Navy']
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
        images: ["Product_images/61eZhpySLwL._AC_SY879_.jpg", "Product_images/71mRTJzQFxL._AC_SY879_.jpg", "Product_images/818XA8N2WIL._AC_SY879_.jpg"],
        style: 'width: 500px; height: 500px; object-fit: contain; border-radius: 8px;',
        colors: ['Navy Blue', 'Maroon', 'Black']
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
        images: ['Product_images/71umyc3IQvL.__AC_SX300_SY300_QL70_ML2_.jpg', "Product_images/81HmSCs-8GL._AC_SL1500_.jpg", "Product_images/81R-LVv8oDL._AC_SL1500_.jpg"],
        style: 'width: 500px; height: 500px; object-fit: contain; border-radius: 8px;',
        colors: ['Black', 'Red', 'Blue']
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
        images: ['Images/book.jpeg'],
        style: 'width: 500px; height: 500px; object-fit: contain; border-radius: 8px;',
        colors: ['Paperback']
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
        images: ['Product_images/61EL2AKKcBL._AC_SL1500_.jpg', "Product_images/61gYzMtc5GL._AC_SL1500_.jpg", "Product_images/51hrTx-nCdL._AC_SL1250_.jpg"],
        style: 'width: 500px; height: 500px; object-fit: contain; border-radius: 8px;',
        colors: ['Black', 'White', 'Blue']
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
        images: ['Images/yoga mat.jpeg', "Product_images/71f5lGUaxfL._AC_UL640_QL65_.jpg", "Product_images/71ZMx5xPTWL._AC_UL640_QL65_.jpg"],
        style: 'width: 500px; height: 500px; object-fit: contain; border-radius: 8px;',
        colors: ['Purple', 'Pink', 'Blue']
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
        images: ['Images/eye kajal.jpeg', "Product_images/61sYGAatamL._AC_UL640_QL65_.jpg", "Product_images/51XM2LWhd7L._AC_UL640_QL65_.jpg"],
        style: 'width: 500px; height: 500px; object-fit: contain; border-radius: 8px;',
        colors: ['Deep Black', 'Brown', 'Navy']
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
        images: ["Product_images/81EHBhjC-+L._AC_UY436_QL65_.jpg", 'Images/mac m2.jpeg', "Product_images/712npnzkpUL._AC_SL1500_.jpg"],
        style: 'width: 500px; height: 500px; object-fit: contain; border-radius: 8px;',
        colors: ['Midnight', 'Silver', 'Space Gray']
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
        images: ["Product_images/61d-XumbpkL._AC_UL640_QL65_.jpg", "Product_images/613wTu5YLOL._AC_UL640_QL65_.jpg", 'Product_images/51uy19arHwL._AC_UL640_QL65_.jpg'],
        style: 'width: 500px; height: 500px; object-fit: contain; border-radius: 8px;',
        colors: ['White/Blue', 'Black/Red', 'Gray/Orange']
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
        images: ['Images/air fryer.jpeg'],
        style: 'width: 500px; height: 500px; object-fit: contain; border-radius: 8px;',
        colors: ['Black', 'White', 'Silver']
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
        images: ["Product_images/81BuGdKCEzL._AC_UL640_QL65_.png.jpeg", "Product_images/71cTqYFokQL._AC_UL640_QL65_.jpg", "Images/football.jpeg"],
        style: 'width: 500px; height: 500px; object-fit: contain; border-radius: 8px;',
        colors: ['White/Black', 'Red/White', 'Blue/White']
    }
];

// Global variables
let cart = [];
window.currentProduct = null;

document.addEventListener('DOMContentLoaded', () => {
    const cartBtn = document.getElementById('cartBtn');
    if (cartBtn) {
      cartBtn.addEventListener('click', function (e) {
        e.preventDefault(); // prevent anchor default behavior
        toggleCart(); // function to toggle cart sidebar
      });
    }
  });
  
// Chatbot functionality
  document.addEventListener("DOMContentLoaded", () => {
    const chatbotToggle = document.getElementById("chatbotToggle");
    const chatbotWindow = document.getElementById("chatbotWindow");
    const chatInput = document.getElementById("chatInput");
    const chatbotMessages = document.getElementById("chatbotMessages");

    if (chatbotToggle && chatbotWindow) {
        chatbotToggle.addEventListener("click", () => {
            chatbotWindow.classList.toggle("hidden");
        });

        chatInput.addEventListener("keypress", (e) => {
            if (e.key === "Enter" && chatInput.value.trim() !== "") {
                const userMsg = chatInput.value.trim();
                addMessage("You", userMsg);
                chatInput.value = "";

                // Simulated reply — replace with RAG/AI backend call later
                setTimeout(() => {
                    addMessage("Wally", `📦 Working on your query about this product: "${userMsg}"`);
                }, 1000);
            }
        });

        function addMessage(sender, message) {
            const msgDiv = document.createElement("div");
            msgDiv.classList.add("chat-message");
            msgDiv.innerHTML = `<strong>${sender}:</strong> ${message}`;
            chatbotMessages.appendChild(msgDiv);
            chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
        }
    }
});

// cart
function updateActionButtons(productId) {
    const addToCartBtn = document.querySelector('.action-buttons .btn-cart');
    const buyNowBtn = document.querySelector('.action-buttons .btn-buy');
  
    if (addToCartBtn) {
      addToCartBtn.setAttribute('onclick', `addToCart(${productId})`);
    }
    if (buyNowBtn) {
      buyNowBtn.setAttribute('onclick', `buyNow(${productId})`);
    }
  }
  
  function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) {
        console.warn('Product not found for ID:', productId);
        return;
    }

    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
        console.log(`Increased quantity of ${product.title} to ${existingItem.quantity}`);
    } else {
        cart.push({ ...product, quantity: 1 });
        console.log(`Added new product to cart: ${product.title}`);
    }

    updateCartUI();
    saveCartToStorage?.();
}
function saveCartToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
  }

function loadCartFromStorage() {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      cart = JSON.parse(storedCart);
      updateCartUI();
    }
  }

window.onload = function () {
    loadCartFromStorage();
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    if (productId) {
        loadProduct(productId);
    } else {
        console.warn("No product ID found in URL.");
    }
  };
  

  
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
                    <div class="cart-item-image">${item.icon}</div>
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
  

function buyNow() {
    if (!window.currentProduct) return;
    alert(`Proceeding to buy "${window.currentProduct.title}" for ₹${window.currentProduct.price.toLocaleString()}`);
    // Here you would integrate with your checkout system
}

// Product page functionality
function updateImages(images = [], style = '') {
    const mainImage = document.getElementById('mainImage');
    const thumbnailList = document.getElementById('thumbnailList');
    
    if (!mainImage || !images.length) return;
    
    // Apply style to main image
    if (style) {
        mainImage.style.cssText = style;
    }
    
    // Set first image as main image
    mainImage.src = images[0];
    mainImage.alt = "Product Image";
    
    if (thumbnailList) {
        thumbnailList.innerHTML = '';
        images.forEach((src, index) => {
            const thumb = document.createElement('img');
            thumb.src = src;
            thumb.className = 'thumbnail';
            thumb.alt = `Product image ${index + 1}`;
            thumb.onclick = () => {
                mainImage.src = src;
            };
            thumbnailList.appendChild(thumb);
        });
    }
}

function loadProduct(productId) {
    const product = products.find(p => p.id == productId);
    if (!product) {
        console.error('Product not found:', productId);
        return;
    }
    
    window.currentProduct = product;
    
    // Update page elements safely
    const updateElement = (id, content, isHTML = false) => {
        const element = document.getElementById(id);
        if (element) {
            if (isHTML) {
                element.innerHTML = content;
            } else {
                element.textContent = content;
            }
        }
    };
    
    updateElement('pageTitle', `${product.title.substring(0, 50)}... - WALMART`);
    updateElement('breadcrumb', `<a href="index.html">Home</a> › ${product.category}`, true);
    updateElement('productTitle', product.title);
    updateElement('rating', `${product.rating.toFixed(1)} ⭐`);
    updateElement('ratingText', `${product.reviews} reviews`);
    updateElement('currentPrice', `₹${product.price.toLocaleString()}`);
    updateElement('originalPrice', `₹${product.originalPrice.toLocaleString()}`);
    updateElement('discount', `${product.discount}% off`);
    updateElement('protectFee', '+ ₹9 Protect Promise Fee');
    updateElement('deliveryText', 'Free delivery by tomorrow');
    updateElement('urgencyText', 'Hurry, only a few left in stock!');
    
    // Update offers
    updateElement('offersList', `
        <div>✔ 10% off with Bank Cards</div>
        <div>✔ ₹2000 cashback on e-Wallet</div>
        <div>✔ Free shipping for you</div>
    `, true);
    
    updateElement('warrantyText', '<strong>1 Year Manufacturer Warranty</strong>', true);
    
    // Update color options
    if (product.colors && product.colors.length > 0) {
        const colorOptionsHTML = product.colors
            .map(color => `<div class="color-box">${color}</div>`)
            .join('');
        updateElement('colorOptions', colorOptionsHTML, true);
    }
    
    // Update images
    updateImages(product.images, product.style);
    
    function updateActionButtons(productId) {
        const addToCartBtn = document.querySelector('.action-buttons .btn-cart');
        const buyNowBtn = document.querySelector('.action-buttons .btn-buy');
      
        if (addToCartBtn) {
          addToCartBtn.setAttribute('onclick', `addToCart(${productId})`);
        }
        if (buyNowBtn) {
          buyNowBtn.setAttribute('onclick', `buyNow(${productId})`);
        }
      }
      
      // At the end of loadProduct, call this:
      updateActionButtons(product.id);
}

function getProductIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

// Initialize the page
function initializePage() {
    // Set up cart button event listener
    const cartBtn = document.getElementById('cartBtn');
    const cartOverlay = document.getElementById('cartOverlay');
    
    if (cartBtn) {
        cartBtn.addEventListener('click', toggleCart);
    }
    
    if (cartOverlay) {
        cartOverlay.addEventListener('click', toggleCart);
    }
    
    // Load product from URL or default to first product
    const productId = getProductIdFromUrl() || products[0].id;
    loadProduct(productId);
    
    // Initialize cart UI
    updateCartUI();
}

// Event listeners
document.addEventListener('DOMContentLoaded', initializePage);

// Handle browser back/forward buttons
window.addEventListener('popstate', function() {
    const productId = getProductIdFromUrl() || products[0].id;
    loadProduct(productId);
});

// Utility function to change product (for external use)
function changeProduct(productId) {
    // Update URL without page reload
    const newUrl = new URL(window.location);
    newUrl.searchParams.set('id', productId);
    window.history.pushState({}, '', newUrl);
    
    // Load the new product
    loadProduct(productId);
}

// Export functions for external use
window.ProductPage = {
    changeProduct,
    loadProduct,
    addToCart,
    buyNow,
    products,
    cart,
    updateCartUI
};