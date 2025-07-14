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
    brand: 'apple',
    image: "Images/iphone.jpeg",
    style: 'width: 200px; height: 140px; object-fit: contain; border-radius: 8px;',
    keywords: ['iphone', 'apple', 'mobile', 'smartphone', 'iOS', 'natural titanium', "phone"]
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
    brand: 'samsung',
    image: "Images/sumsung s24.jpeg",
    style: 'width: 140px; height: 140px; object-fit: contain; border-radius: 8px;',
    keywords: ['samsung', 'galaxy', 'android', 's24', 'ultra', 'smartphone', "phone"]
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
    brand: 'generic',
    image: 'Product_images/81K6BMvos0L._AC_SY879_.jpg',
    keywords: ['shirt', 'menswear', 'cotton', 'blue', 'checkered', 'casual']
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
    brand: 'generic',
    image: "Product_images/61eZhpySLwL._AC_SY879_.jpg",
    keywords: ['kurta', 'womenswear', 'ethnic', 'navy', 'blue', 'set', 'clothing']
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
    brand: 'generic',
    image: 'Images/cookeware set.jpeg',
    keywords: ['cookware', 'kitchen', 'non-stick', 'black', 'utensils']
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
    brand: 'generic',
    image: 'Images/book.jpeg',
    keywords: ['book', 'finance', 'investment', 'money', 'psychology', 'paperback']
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
    brand: 'generic',
    image: 'Images/headphones.jpeg',
    keywords: ['headphones', 'wireless', 'bluetooth', 'black', 'audio']
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
    brand: 'generic',
    image: 'Images/yoga mat.jpeg',
    keywords: ['yoga', 'mat', 'fitness', 'purple', 'exercise', 'strap']
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
    brand: 'lakme',
    image: 'Images/eye kajal.jpeg',
    keywords: ['lakme', 'kajal', 'eyeliner', 'eye', 'cosmetics', 'black']
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
    brand: 'apple',
    image: 'Images/mac m2.jpeg',
    keywords: ['macbook', 'apple', 'laptop', 'm2', 'midnight', 'air']
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
    brand: 'adidas',
    image: 'Images/shoe2.jpeg',
    keywords: ['adidas', 'shoes', 'running', 'white', 'blue', 'sportswear']
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
    brand: 'generic',
    image: 'Images/air fryer.jpeg',
    style: 'width: 140px; height: 140px; object-fit: contain; border-radius: 8px;',
    keywords: ['air fryer', 'kitchen', 'appliance', 'black', 'oil-free', 'cooking']
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
    brand: 'generic',
    image: "Images/football.jpeg",
    keywords: ['football', 'ball', 'soccer', 'sports', 'outdoor', '13inch']
  }
];

let currentSort = 'relevance';
let filteredProducts = [...products]; // Initialize with all products

// Read ?q= from URL
window.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const query = params.get("q");

  if (query) {
    document.getElementById("searchInput").value = query;
    performSearch();
  } else {
    filteredProducts = [...products];
    renderProducts();
  }
});

// Handle Enter key for search input
function handleSearch(event) {
    if (event.key === "Enter") performSearch();
}

// Perform keyword-based search
function performSearch() {
    const query = document.getElementById("searchInput").value.toLowerCase().trim();
    console.log("🔍 Search Query:", query);

    if (query === "") {
        filteredProducts = [...products];
    } else {
        filteredProducts = products.filter(product => {
            // Search in title
            const titleMatch = product.title.toLowerCase().includes(query);
            
            // Search in keywords
            const keywordMatch = Array.isArray(product.keywords) &&
                product.keywords.some(keyword => keyword.toLowerCase().includes(query));
            
            // Search in category
            const categoryMatch = product.category.toLowerCase().includes(query);
            
            // Search in brand
            const brandMatch = product.brand && product.brand.toLowerCase().includes(query);
            
            return titleMatch || keywordMatch || categoryMatch || brandMatch;
        });
    }

    console.log("✅ Filtered Products:", filteredProducts);
    renderProducts();
}

// Render filtered products to the page
function renderProducts() {
    const productGrid = document.getElementById('productGrid');
    const resultsCount = document.getElementById('resultsCount');
    const searchTerm = document.getElementById('searchInput').value || 'your search';

    if (filteredProducts.length === 0) {
        resultsCount.textContent = `No results found for "${searchTerm}"`;
        productGrid.innerHTML = `<p style="padding: 40px; color: #666;">No products matched your search.</p>`;
        return;
    }

    resultsCount.textContent = `Showing 1 - ${filteredProducts.length} of ${filteredProducts.length} results for "${searchTerm}"`;

    productGrid.innerHTML = filteredProducts.map(product => `
        <div class="product-card" onclick="viewProduct(${product.id})">
            <img src="${product.image}" alt="${product.title}" class="product-image" style="${product.style || 'width: 160px; height: 140px; object-fit: contain; border-radius: 8px;'}">
            <div class="product-info">
                <h3 class="product-title">${product.title}</h3>
                <div class="product-rating">
                    <span class="rating-badge">${product.rating}★</span>
                    <span class="rating-text">${product.reviews.toLocaleString()} Reviews</span>
                </div>
            </div>
            <div class="product-price">
                <div class="current-price">
                    ₹${product.price.toLocaleString()} 
                    <span class="assured-badge">Assured</span>
                </div>
                <div class="original-price">₹${product.originalPrice.toLocaleString()}</div>
                <div class="discount">${product.discount}% off</div>
                <div class="bank-offer" style="color: #2874f0; font-size: 14px; margin-top: 5px;">Bank Offer</div>
            </div>
        </div>
    `).join('');
}

// Advanced filtering with all filters
function filterProducts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
    
    // Get selected categories
    const categoryCheckboxes = ['mobiles', 'laptops', 'tablets', 'accessories'];
    const selectedCategories = categoryCheckboxes.filter(cat => {
        const checkbox = document.getElementById(cat);
        return checkbox && checkbox.checked;
    });
    
    // Get selected brands
    const brandCheckboxes = ['apple', 'samsung', 'google', 'oneplus', 'xiaomi'];
    const selectedBrands = brandCheckboxes.filter(brand => {
        const checkbox = document.getElementById(brand);
        return checkbox && checkbox.checked;
    });
    
    // Get price range
    const minPriceInput = document.getElementById('minPrice');
    const maxPriceInput = document.getElementById('maxPrice');
    const minPrice = minPriceInput ? (parseFloat(minPriceInput.value) || 0) : 0;
    const maxPrice = maxPriceInput ? (parseFloat(maxPriceInput.value) || Infinity) : Infinity;
    
    // Get rating filters
    const rating4Checkbox = document.getElementById('rating4');
    const rating3Checkbox = document.getElementById('rating3');
    const rating4 = rating4Checkbox ? rating4Checkbox.checked : false;
    const rating3 = rating3Checkbox ? rating3Checkbox.checked : false;

    filteredProducts = products.filter(product => {
        // Search match
        const matchesSearch = searchTerm === "" || 
            product.title.toLowerCase().includes(searchTerm) ||
            (Array.isArray(product.keywords) && product.keywords.some(keyword => 
                keyword.toLowerCase().includes(searchTerm))) ||
            product.category.toLowerCase().includes(searchTerm) ||
            (product.brand && product.brand.toLowerCase().includes(searchTerm));
        
        // Category match
        const matchesCategory = selectedCategories.length === 0 || 
            selectedCategories.some(cat => product.category.toLowerCase().includes(cat));
        
        // Brand match
        const matchesBrand = selectedBrands.length === 0 || 
            selectedBrands.some(brand => product.brand && product.brand.toLowerCase().includes(brand));
        
        // Price match
        const matchesPrice = product.price >= minPrice && product.price <= maxPrice;
        
        // Rating match
        const matchesRating = (!rating4 && !rating3) || 
            (rating4 && product.rating >= 4.0) || 
            (rating3 && product.rating >= 3.0);

        return matchesSearch && matchesCategory && matchesBrand && matchesPrice && matchesRating;
    });

    sortProducts(currentSort);
}

// Sort products
function sortProducts(sortType) {
    currentSort = sortType;
    
    // Update active sort button
    document.querySelectorAll('.sort-option').forEach(option => {
        option.classList.remove('active');
    });
    
    if (event?.target) {
        event.target.classList.add('active');
    }

    switch(sortType) {
        case 'price-low':
            filteredProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filteredProducts.sort((a, b) => b.price - a.price);
            break;
        case 'popularity':
            filteredProducts.sort((a, b) => b.reviews - a.reviews);
            break;
        case 'newest':
            filteredProducts.sort((a, b) => b.id - a.id);
            break;
        default:
            filteredProducts.sort((a, b) => a.id - b.id);
    }

    renderProducts();
}

// View product details
function viewProduct(productId) {
  window.location.href = `product.html?id=${productId}`;
}



// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', filterProducts);
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
    
    // Add event listeners for filter checkboxes
    const filterIds = ['mobiles', 'laptops', 'tablets', 'accessories', 'apple', 'samsung', 'google', 'oneplus', 'xiaomi', 'rating4', 'rating3'];
    filterIds.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.addEventListener('change', filterProducts);
        }
    });
    
    // Add event listeners for price inputs
    const priceInputs = ['minPrice', 'maxPrice'];
    priceInputs.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.addEventListener('input', filterProducts);
        }
    });
});

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    renderProducts();
});


// floating board

const board = document.getElementById('floatingBoard');
const closeBtn = document.getElementById('closeBtn');
const positionIndicator = document.getElementById('positionIndicator');
let isDragging = false;
let startX = 0;
let startY = 0;
let boardX = 50;
let boardY = 50;

function getQueryParam(name) {
    const params = new URLSearchParams(window.location.search);
    return params.get(name);
  }

  document.addEventListener('DOMContentLoaded', () => {
    const query = getQueryParam('q');
    const boardTitle = document.getElementById('boardTitle');
    if (query && boardTitle) {
      boardTitle.textContent = decodeURIComponent(query);
    }
  });

        // Close button functionality
        closeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            board.style.transform = 'scale(0) rotate(180deg)';
            board.style.opacity = '0';
            
            setTimeout(() => {
                board.style.display = 'none';
            }, 300);
        });

        function updatePosition() {
            board.style.left = boardX + 'px';
            board.style.top = boardY + 'px';
            positionIndicator.textContent = `X: ${Math.round(boardX)}, Y: ${Math.round(boardY)}`;
        }

        function startDrag(e) {
            isDragging = true;
            board.classList.add('dragging');
            positionIndicator.classList.add('show');
            
            const rect = board.getBoundingClientRect();
            startX = (e.clientX || e.touches[0].clientX) - rect.left;
            startY = (e.clientY || e.touches[0].clientY) - rect.top;
            
            document.addEventListener('mousemove', drag);
            document.addEventListener('mouseup', stopDrag);
            document.addEventListener('touchmove', drag);
            document.addEventListener('touchend', stopDrag);
            
            e.preventDefault();
        }

        function drag(e) {
            if (!isDragging) return;
            
            const clientX = e.clientX || e.touches[0].clientX;
            const clientY = e.clientY || e.touches[0].clientY;
            
            boardX = clientX - startX;
            boardY = clientY - startY;
            
            // Keep board within viewport bounds
            const maxX = window.innerWidth - board.offsetWidth;
            const maxY = window.innerHeight - board.offsetHeight;
            
            boardX = Math.max(0, Math.min(boardX, maxX));
            boardY = Math.max(0, Math.min(boardY, maxY));
            
            updatePosition();
            e.preventDefault();
        }

        function stopDrag() {
            isDragging = false;
            board.classList.remove('dragging');
            
            setTimeout(() => {
                positionIndicator.classList.remove('show');
            }, 2000);
            
            document.removeEventListener('mousemove', drag);
            document.removeEventListener('mouseup', stopDrag);
            document.removeEventListener('touchmove', drag);
            document.removeEventListener('touchend', stopDrag);
        }

        // Mouse events
        board.addEventListener('mousedown', startDrag);
        
        // Touch events for mobile
        board.addEventListener('touchstart', startDrag);
        
        // Prevent text selection while dragging
        board.addEventListener('selectstart', e => {
            if (isDragging) e.preventDefault();
        });

        // Initialize position
        updatePosition();