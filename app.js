/* ===== AURELIA JEWELS — Main Application ===== */

// ==========================================
// PRODUCT DATA
// ==========================================
const products = [
  // --- RINGS ---
  {
    id: 1,
    name: 'Diamond Style Ring',
    category: 'rings',
    price: 2499,
    originalPrice: 3499,
    image: 'images/ring-diamond.webp',
    badge: 'Bestseller',
    description: 'A stunning diamond-style ring that captures light from every angle. This elegant piece features a brilliant-cut center stone set in a polished band, perfect for engagements, anniversaries, or everyday glamour.',
    materials: ['Gold Plated', '925 Silver', 'Zirconia Stone'],
    rating: 5
  },
  {
    id: 2,
    name: 'Minimalist Gold Ring',
    category: 'rings',
    price: 1299,
    originalPrice: null,
    image: 'images/ring-minimalist.webp',
    badge: null,
    description: 'A sleek, minimalist gold ring designed for the modern woman. Its refined silhouette and warm gold finish make it the perfect companion for any outfit — casual or formal.',
    materials: ['18K Gold Plated', 'Stainless Steel'],
    rating: 4
  },
  {
    id: 3,
    name: 'Rose Gold Promise Ring',
    category: 'rings',
    price: 1899,
    originalPrice: 2299,
    image: 'images/ring-rosegold.webp',
    badge: 'New',
    description: 'Symbolize your love with this exquisite rose gold promise ring. Featuring a delicate band with subtle detailing, it radiates romance and commitment.',
    materials: ['Rose Gold Plated', 'Brass', 'CZ Stones'],
    rating: 5
  },

  // --- NECKLACES ---
  {
    id: 4,
    name: 'Gold Heart Necklace',
    category: 'necklaces',
    price: 1999,
    originalPrice: 2799,
    image: 'images/necklace-heart.webp',
    badge: 'Bestseller',
    description: 'A classic gold heart pendant that sits beautifully on a delicate chain. This timeless piece symbolizes love and makes a perfect gift for someone special.',
    materials: ['18K Gold Plated', 'Stainless Steel Chain'],
    rating: 5
  },
  {
    id: 5,
    name: 'Pearl Pendant Necklace',
    category: 'necklaces',
    price: 2299,
    originalPrice: null,
    image: 'images/necklace-pearl.webp',
    badge: null,
    description: 'Elevate your ensemble with this sophisticated pearl pendant necklace. A lustrous freshwater pearl drops from a fine chain, adding an air of refined elegance.',
    materials: ['Sterling Silver', 'Freshwater Pearl'],
    rating: 5
  },
  {
    id: 6,
    name: 'Infinity Chain Necklace',
    category: 'necklaces',
    price: 1699,
    originalPrice: null,
    image: 'images/necklace-infinity.webp',
    badge: 'New',
    description: 'The infinity symbol represents eternal love and connection. This beautifully crafted chain necklace features a polished infinity pendant — a meaningful everyday accessory.',
    materials: ['Gold Plated', '925 Silver'],
    rating: 4
  },

  // --- BRACELETS ---
  {
    id: 7,
    name: 'Pearl Bracelet',
    category: 'bracelets',
    price: 1499,
    originalPrice: 1999,
    image: 'images/bracelet-pearl.webp',
    badge: null,
    description: 'A graceful pearl bracelet that wraps your wrist in understated luxury. Each pearl is carefully selected for its luster and uniformity, creating a timeless accessory.',
    materials: ['Freshwater Pearls', 'Gold Plated Clasp'],
    rating: 4
  },
  {
    id: 8,
    name: 'Minimal Gold Bracelet',
    category: 'bracelets',
    price: 999,
    originalPrice: null,
    image: 'images/bracelet-gold.webp',
    badge: 'Bestseller',
    description: 'A clean and minimal gold bracelet that pairs perfectly with everything. Its thin profile and warm tone add a subtle touch of elegance to your daily look.',
    materials: ['18K Gold Plated', 'Stainless Steel'],
    rating: 5
  },
  {
    id: 9,
    name: 'Charm Bracelet',
    category: 'bracelets',
    price: 1799,
    originalPrice: 2199,
    image: 'images/bracelet-charm.webp',
    badge: 'New',
    description: 'Express your personality with this delightful charm bracelet. Adorned with carefully crafted charms, each one tells a story — making it uniquely yours.',
    materials: ['Gold Plated', 'Alloy Charms', 'Lobster Clasp'],
    rating: 4
  },

  // --- EARRINGS ---
  {
    id: 10,
    name: 'Diamond Stud Earrings',
    category: 'earrings',
    price: 1599,
    originalPrice: 2099,
    image: 'images/earring-stud.webp',
    badge: 'Bestseller',
    description: 'Classic diamond stud earrings that add sparkle to any outfit. These versatile studs feature brilliant-cut stones set in a secure prong setting.',
    materials: ['925 Silver', 'CZ Diamonds'],
    rating: 5
  },
  {
    id: 11,
    name: 'Gold Hoop Earrings',
    category: 'earrings',
    price: 1199,
    originalPrice: null,
    image: 'images/earring-hoop.webp',
    badge: null,
    description: 'Stylish gold hoop earrings that effortlessly elevate your look. The perfect size for both everyday wear and special occasions.',
    materials: ['18K Gold Plated', 'Stainless Steel'],
    rating: 4
  },
  {
    id: 12,
    name: 'Elegant Drop Earrings',
    category: 'earrings',
    price: 1899,
    originalPrice: null,
    image: 'images/earring-drop.webp',
    badge: 'New',
    description: 'Make a statement with these elegant drop earrings. The graceful design catches light as you move, creating a beautiful play of shimmer and sophistication.',
    materials: ['Gold Plated', 'Crystal Stones'],
    rating: 5
  },

  // --- GIFT SETS ---
  {
    id: 13,
    name: 'Luxury Gift Box — Necklace & Earrings',
    category: 'gift-sets',
    price: 3499,
    originalPrice: 4299,
    image: 'images/giftset-necklace-earrings.webp',
    badge: 'Gift Set',
    description: 'The perfect gift for someone special. This luxury set includes a stunning necklace and matching earrings, beautifully presented in a premium gift box with ribbon.',
    materials: ['Gold Plated', '925 Silver', 'CZ Stones'],
    rating: 5
  },
  {
    id: 14,
    name: 'Elegant Bracelet & Ring Gift Set',
    category: 'gift-sets',
    price: 2999,
    originalPrice: 3799,
    image: 'images/giftset-bracelet-ring.webp',
    badge: 'Gift Set',
    description: 'A beautifully curated set featuring a delicate bracelet and matching ring. Packaged in a luxury velvet box — perfect for birthdays, anniversaries, and celebrations.',
    materials: ['18K Gold Plated', 'Stainless Steel'],
    rating: 5
  },
  {
    id: 15,
    name: 'Complete Jewelry Gift Collection',
    category: 'gift-sets',
    price: 4999,
    originalPrice: 6499,
    image: 'images/giftset-complete.webp',
    badge: 'Premium',
    description: 'Our signature gift collection — includes a necklace, bracelet, earrings, and ring. Presented in a premium satin-lined gift box with a handwritten note card.',
    materials: ['Gold Plated', '925 Silver', 'Freshwater Pearl', 'CZ Stones'],
    rating: 5
  }
];

// ==========================================
// CATEGORIES DATA
// ==========================================
const categories = [
  { id: 'rings', name: 'Rings', image: 'images/cat-rings.webp' },
  { id: 'necklaces', name: 'Necklaces', image: 'images/cat-necklaces.webp' },
  { id: 'bracelets', name: 'Bracelets', image: 'images/cat-bracelets.webp' },
  { id: 'earrings', name: 'Earrings', image: 'images/cat-earrings.webp' },
  { id: 'gift-sets', name: 'Gift Sets', image: 'images/cat-giftsets.webp' }
];

// ==========================================
// REVIEWS DATA
// ==========================================
const reviews = [
  {
    text: "Beautiful jewelry and amazing quality! I ordered the Gold Heart Necklace for my anniversary and it exceeded all expectations. The craftsmanship is truly remarkable.",
    author: "Priya Sharma",
    initials: "PS",
    date: "2 weeks ago",
    rating: 5
  },
  {
    text: "Perfect gift for my sister, she loved it! The packaging was gorgeous and the bracelet looked even better in person. Will definitely order again.",
    author: "Ananya Gupta",
    initials: "AG",
    date: "1 month ago",
    rating: 5
  },
  {
    text: "Elegant design and fast delivery. The minimalist gold ring is now my everyday favourite. It's so versatile and the quality is outstanding for the price.",
    author: "Riya Patel",
    initials: "RP",
    date: "3 weeks ago",
    rating: 5
  },
  {
    text: "I bought the complete gift set for my best friend's birthday and she was overjoyed! The presentation box is stunning and the jewelry is impeccable.",
    author: "Simran Kaur",
    initials: "SK",
    date: "1 week ago",
    rating: 5
  },
  {
    text: "The pearl pendant necklace is absolutely gorgeous. I've received so many compliments from everyone. Aurelia Jewels has won me over completely!",
    author: "Neha Verma",
    initials: "NV",
    date: "2 months ago",
    rating: 4
  },
  {
    text: "Ordered the diamond stud earrings and I'm in love! They sparkle beautifully and are very comfortable to wear all day long. Highly recommend!",
    author: "Meera Joshi",
    initials: "MJ",
    date: "5 days ago",
    rating: 5
  }
];

// ==========================================
// INDIAN STATES & CITIES
// ==========================================
const statesAndCities = {
  'Andhra Pradesh': ['Visakhapatnam', 'Vijayawada', 'Guntur', 'Nellore', 'Tirupati'],
  'Arunachal Pradesh': ['Itanagar', 'Naharlagun', 'Pasighat', 'Tawang'],
  'Assam': ['Guwahati', 'Silchar', 'Dibrugarh', 'Jorhat', 'Nagaon'],
  'Bihar': ['Patna', 'Gaya', 'Bhagalpur', 'Muzaffarpur', 'Darbhanga'],
  'Chhattisgarh': ['Raipur', 'Bhilai', 'Korba', 'Bilaspur', 'Durg'],
  'Delhi': ['New Delhi', 'Dwarka', 'Rohini', 'Saket', 'Karol Bagh'],
  'Goa': ['Panaji', 'Margao', 'Vasco da Gama', 'Mapusa', 'Ponda'],
  'Gujarat': ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Gandhinagar'],
  'Haryana': ['Panipat', 'Karnal', 'Sonipat', 'Gurugram', 'Faridabad', 'Ambala', 'Hisar', 'Rohtak'],
  'Himachal Pradesh': ['Shimla', 'Manali', 'Dharamshala', 'Solan', 'Mandi'],
  'Jharkhand': ['Ranchi', 'Jamshedpur', 'Dhanbad', 'Bokaro', 'Hazaribagh'],
  'Karnataka': ['Bengaluru', 'Mysuru', 'Mangaluru', 'Hubli', 'Belgaum'],
  'Kerala': ['Thiruvananthapuram', 'Kochi', 'Kozhikode', 'Thrissur', 'Kollam'],
  'Madhya Pradesh': ['Bhopal', 'Indore', 'Jabalpur', 'Gwalior', 'Ujjain'],
  'Maharashtra': ['Mumbai', 'Pune', 'Nagpur', 'Nashik', 'Thane', 'Aurangabad'],
  'Manipur': ['Imphal', 'Thoubal', 'Bishnupur', 'Churachandpur'],
  'Meghalaya': ['Shillong', 'Tura', 'Jowai', 'Nongstoin'],
  'Mizoram': ['Aizawl', 'Lunglei', 'Champhai', 'Serchhip'],
  'Nagaland': ['Kohima', 'Dimapur', 'Mokokchung', 'Tuensang'],
  'Odisha': ['Bhubaneswar', 'Cuttack', 'Rourkela', 'Puri', 'Sambalpur'],
  'Punjab': ['Chandigarh', 'Ludhiana', 'Amritsar', 'Jalandhar', 'Patiala'],
  'Rajasthan': ['Jaipur', 'Jodhpur', 'Udaipur', 'Kota', 'Ajmer', 'Bikaner'],
  'Sikkim': ['Gangtok', 'Namchi', 'Gyalshing', 'Mangan'],
  'Tamil Nadu': ['Chennai', 'Coimbatore', 'Madurai', 'Salem', 'Tiruchirappalli'],
  'Telangana': ['Hyderabad', 'Warangal', 'Nizamabad', 'Karimnagar', 'Khammam'],
  'Tripura': ['Agartala', 'Udaipur', 'Dharmanagar', 'Kailashahar'],
  'Uttar Pradesh': ['Lucknow', 'Noida', 'Agra', 'Varanasi', 'Kanpur', 'Prayagraj', 'Meerut'],
  'Uttarakhand': ['Dehradun', 'Haridwar', 'Rishikesh', 'Nainital', 'Haldwani'],
  'West Bengal': ['Kolkata', 'Howrah', 'Durgapur', 'Siliguri', 'Asansol']
};

// ==========================================
// CART STATE
// ==========================================
let cart = JSON.parse(localStorage.getItem('aureliaCart')) || [];

// ==========================================
// DOM ELEMENTS
// ==========================================
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
const cartBtn = document.getElementById('cartBtn');
const cartCount = document.getElementById('cartCount');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toastMessage');

// Pages
const pages = document.querySelectorAll('.page');
const navLinksAll = document.querySelectorAll('[data-page]');

// Shop
const filterTabs = document.querySelectorAll('.filter-tab');
const shopGrid = document.getElementById('shopGrid');
const productCountEl = document.getElementById('productCount');

// Cart
const cartItemsEl = document.getElementById('cartItems');
const cartSummaryEl = document.getElementById('cartSummary');
const emptyCart = document.getElementById('emptyCart');

// Checkout
const checkoutModal = document.getElementById('checkoutModal');
const closeCheckout = document.getElementById('closeCheckout');
const checkoutForm = document.getElementById('checkoutForm');
const checkoutContent = document.getElementById('checkoutContent');
const checkoutSuccess = document.getElementById('checkoutSuccess');
const checkoutSummaryEl = document.getElementById('checkoutSummary');
const continueShopping = document.getElementById('continueShopping');
const stateSelect = document.getElementById('stateSelect');
const citySelect = document.getElementById('citySelect');

// Contact
const contactForm = document.getElementById('contactForm');

// Back to shop
const backToShop = document.getElementById('backToShop');

// ==========================================
// INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initPages();
  renderCategories();
  renderFeatured();
  renderTestimonials();
  renderInstagramGrid();
  renderShop('all');
  populateStates();
  updateCartCount();
  initScrollAnimations();
  initContactForm();
});

// ==========================================
// NAVBAR
// ==========================================
function initNavbar() {
  // Scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Mobile menu
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
    mobileMenuOverlay.classList.toggle('show');
    document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
  });

  mobileMenuOverlay.addEventListener('click', closeMobileMenu);

  // Cart button
  cartBtn.addEventListener('click', () => {
    navigateTo('cart');
  });
}

function closeMobileMenu() {
  hamburger.classList.remove('active');
  navLinks.classList.remove('open');
  mobileMenuOverlay.classList.remove('show');
  document.body.style.overflow = '';
}

// ==========================================
// PAGE NAVIGATION
// ==========================================
function initPages() {
  document.addEventListener('click', (e) => {
    const target = e.target.closest('[data-page]');
    if (target) {
      e.preventDefault();
      const page = target.getAttribute('data-page');
      const filter = target.getAttribute('data-filter');
      navigateTo(page, filter);
      closeMobileMenu();
    }
  });

  // Back to shop
  backToShop.addEventListener('click', () => {
    navigateTo('shop');
  });
}

function navigateTo(pageName, filter) {
  // Hide all pages
  pages.forEach(p => p.classList.remove('active'));

  // Show target page
  const target = document.getElementById(`page-${pageName}`);
  if (target) {
    target.classList.add('active');
  }

  // Update nav links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('data-page') === pageName) {
      link.classList.add('active');
    }
  });

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Page-specific actions
  if (pageName === 'shop') {
    if (filter) {
      setActiveFilter(filter);
      renderShop(filter);
    }
  }

  if (pageName === 'cart') {
    renderCart();
  }

  // Re-init scroll animations
  setTimeout(() => initScrollAnimations(), 100);
}

// ==========================================
// CATEGORIES
// ==========================================
function renderCategories() {
  const grid = document.getElementById('categoriesGrid');
  grid.innerHTML = categories.map(cat => {
    const count = products.filter(p => p.category === cat.id).length;
    return `
      <div class="category-card animate-on-scroll" data-page="shop" data-filter="${cat.id}">
        <img src="${cat.image}" alt="${cat.name} collection" loading="lazy" />
        <div class="category-overlay">
          <span class="category-name">${cat.name}</span>
          <span class="category-count">${count} ${count === 1 ? 'Product' : 'Products'}</span>
        </div>
      </div>
    `;
  }).join('');
}

// ==========================================
// FEATURED PRODUCTS
// ==========================================
function renderFeatured() {
  const grid = document.getElementById('featuredGrid');
  const featured = products.filter(p => p.badge === 'Bestseller' || p.badge === 'New').slice(0, 4);
  grid.innerHTML = featured.map(p => createProductCard(p)).join('');
}

// ==========================================
// PRODUCT CARD
// ==========================================
function createProductCard(product) {
  return `
    <div class="product-card animate-on-scroll" data-id="${product.id}">
      <div class="product-card-image">
        <img src="${product.image}" alt="${product.name}" loading="lazy" />
        ${product.badge ? `<span class="product-card-badge">${product.badge}</span>` : ''}
        <button class="product-card-wishlist" aria-label="Add to wishlist">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
        </button>
        <div class="product-card-quick-add">
          <button class="quick-add-btn" onclick="event.stopPropagation(); addToCart(${product.id})">Add to Cart</button>
        </div>
      </div>
      <div class="product-card-info" onclick="viewProduct(${product.id})">
        <div class="product-card-category">${formatCategory(product.category)}</div>
        <h3 class="product-card-name">${product.name}</h3>
        <div class="product-card-price">
          ₹${product.price.toLocaleString('en-IN')}
          ${product.originalPrice ? `<span class="original-price">₹${product.originalPrice.toLocaleString('en-IN')}</span>` : ''}
        </div>
      </div>
    </div>
  `;
}

function formatCategory(cat) {
  return cat.replace('-', ' ').replace(/\b\w/g, c => c.toUpperCase());
}

// ==========================================
// SHOP PAGE
// ==========================================
function renderShop(filter) {
  const filtered = filter === 'all' ? products : products.filter(p => p.category === filter);
  shopGrid.innerHTML = filtered.map(p => createProductCard(p)).join('');
  productCountEl.textContent = filtered.length;

  // Re-init scroll animations for new cards
  setTimeout(() => initScrollAnimations(), 50);
}

function setActiveFilter(filter) {
  filterTabs.forEach(tab => {
    tab.classList.toggle('active', tab.getAttribute('data-filter') === filter);
  });
}

// Filter tab clicks
filterTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const filter = tab.getAttribute('data-filter');
    setActiveFilter(filter);
    renderShop(filter);
  });
});

// ==========================================
// PRODUCT DETAIL PAGE
// ==========================================
function viewProduct(id) {
  const product = products.find(p => p.id === id);
  if (!product) return;

  const detail = document.getElementById('productDetail');
  detail.innerHTML = `
    <div class="product-detail-image">
      <img src="${product.image}" alt="${product.name}" />
    </div>
    <div class="product-detail-info">
      <div class="product-detail-category">${formatCategory(product.category)}</div>
      <h2 class="product-detail-name">${product.name}</h2>
      <div class="product-detail-price">
        ₹${product.price.toLocaleString('en-IN')}
        ${product.originalPrice ? `<span class="original-price" style="text-decoration:line-through;color:#9C8B7E;font-size:1rem;margin-left:12px;">₹${product.originalPrice.toLocaleString('en-IN')}</span>` : ''}
      </div>
      <p class="product-detail-desc">${product.description}</p>
      <div class="product-detail-materials">
        <h4>Materials</h4>
        <div class="materials-tags">
          ${product.materials.map(m => `<span class="material-tag">${m}</span>`).join('')}
        </div>
      </div>
      <div class="product-detail-actions">
        <div class="quantity-selector">
          <button class="qty-btn" onclick="changeQty(-1)">−</button>
          <span class="qty-value" id="qtyValue">1</span>
          <button class="qty-btn" onclick="changeQty(1)">+</button>
        </div>
        <button class="btn btn-primary" onclick="addToCartWithQty(${product.id})" style="flex:1;">Add to Cart</button>
      </div>
      <div class="product-detail-features">
        <div class="detail-feature">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
          Gift-Ready Packaging
        </div>
        <div class="detail-feature">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          Quality Assured
        </div>
        <div class="detail-feature">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          Fast Delivery
        </div>
        <div class="detail-feature">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          Handcrafted
        </div>
      </div>
    </div>
  `;

  // Render reviews for this product
  renderProductReviews(product);

  navigateTo('product');
}

let currentQty = 1;

function changeQty(delta) {
  currentQty = Math.max(1, currentQty + delta);
  document.getElementById('qtyValue').textContent = currentQty;
}

function addToCartWithQty(id) {
  for (let i = 0; i < currentQty; i++) {
    addToCart(id);
  }
  currentQty = 1;
  const qtyEl = document.getElementById('qtyValue');
  if (qtyEl) qtyEl.textContent = '1';
}

function renderProductReviews(product) {
  const grid = document.getElementById('productReviews');
  // Pick relevant reviews
  const productReviews = reviews.slice(0, 3);
  grid.innerHTML = productReviews.map(r => `
    <div class="review-card">
      <div class="review-stars">${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}</div>
      <p class="review-text">"${r.text}"</p>
      <div class="review-author">
        <div class="review-avatar">${r.initials}</div>
        <div class="review-author-info">
          <h4>${r.author}</h4>
          <span>${r.date}</span>
        </div>
      </div>
    </div>
  `).join('');
}

// ==========================================
// TESTIMONIALS
// ==========================================
function renderTestimonials() {
  const grid = document.getElementById('testimonialsGrid');
  grid.innerHTML = reviews.slice(0, 3).map(r => `
    <div class="testimonial-card animate-on-scroll">
      <div class="testimonial-quote">"</div>
      <div class="testimonial-stars">${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}</div>
      <p class="testimonial-text">${r.text}</p>
      <div class="testimonial-author">
        <div class="testimonial-avatar">${r.initials}</div>
        <div class="testimonial-info">
          <h4>${r.author}</h4>
          <span>${r.date}</span>
        </div>
      </div>
    </div>
  `).join('');
}

// ==========================================
// INSTAGRAM GRID
// ==========================================
function renderInstagramGrid() {
  const grid = document.getElementById('instagramGrid');
  const instagramImages = [
    'images/insta-1.webp',
    'images/insta-2.webp',
    'images/insta-3.webp',
    'images/insta-4.webp'
  ];
  grid.innerHTML = instagramImages.map((img, i) => `
    <div class="instagram-item animate-on-scroll">
      <img src="${img}" alt="Instagram post ${i + 1}" loading="lazy" />
    </div>
  `).join('');
}

// ==========================================
// CART FUNCTIONALITY
// ==========================================
function addToCart(id) {
  const product = products.find(p => p.id === id);
  if (!product) return;

  const existing = cart.find(item => item.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id: product.id, qty: 1 });
  }

  saveCart();
  updateCartCount();
  showToast(`${product.name} added to cart!`);
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  saveCart();
  updateCartCount();
  renderCart();
}

function updateCartItemQty(id, delta) {
  const item = cart.find(item => item.id === id);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(id);
    return;
  }

  saveCart();
  updateCartCount();
  renderCart();
}

function saveCart() {
  localStorage.setItem('aureliaCart', JSON.stringify(cart));
}

function updateCartCount() {
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  cartCount.textContent = totalItems;
  cartCount.classList.toggle('show', totalItems > 0);
}

function getCartTotal() {
  return cart.reduce((sum, item) => {
    const product = products.find(p => p.id === item.id);
    return sum + (product ? product.price * item.qty : 0);
  }, 0);
}

function renderCart() {
  if (cart.length === 0) {
    cartItemsEl.style.display = 'none';
    cartSummaryEl.style.display = 'none';
    emptyCart.style.display = 'block';
    return;
  }

  cartItemsEl.style.display = 'flex';
  cartSummaryEl.style.display = 'block';
  emptyCart.style.display = 'none';

  // Render cart items
  cartItemsEl.innerHTML = cart.map(item => {
    const product = products.find(p => p.id === item.id);
    if (!product) return '';
    return `
      <div class="cart-item">
        <div class="cart-item-image">
          <img src="${product.image}" alt="${product.name}" />
        </div>
        <div class="cart-item-info">
          <h3 class="cart-item-name">${product.name}</h3>
          <span class="cart-item-category">${formatCategory(product.category)}</span>
          <div class="cart-item-controls">
            <div class="cart-qty">
              <button onclick="updateCartItemQty(${item.id}, -1)">−</button>
              <span>${item.qty}</span>
              <button onclick="updateCartItemQty(${item.id}, 1)">+</button>
            </div>
            <span class="cart-item-price">₹${(product.price * item.qty).toLocaleString('en-IN')}</span>
          </div>
        </div>
        <button class="cart-item-remove" onclick="removeFromCart(${item.id})" aria-label="Remove item">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      </div>
    `;
  }).join('');

  // Render summary
  const subtotal = getCartTotal();
  const shipping = 100;
  const total = subtotal + shipping;

  cartSummaryEl.innerHTML = `
    <h3>Order Summary</h3>
    <div class="summary-row">
      <span class="label">Subtotal</span>
      <span class="value">₹${subtotal.toLocaleString('en-IN')}</span>
    </div>
    <div class="summary-row">
      <span class="label">Shipping</span>
      <span class="value">₹${shipping.toLocaleString('en-IN')}</span>
    </div>
    <div class="summary-row total">
      <span class="label">Total</span>
      <span class="value">₹${total.toLocaleString('en-IN')}</span>
    </div>
    <button class="btn btn-primary btn-full" onclick="openCheckout()" style="margin-top:24px;">Proceed to Checkout</button>
  `;
}

// ==========================================
// CHECKOUT
// ==========================================
function populateStates() {
  const states = Object.keys(statesAndCities).sort();
  stateSelect.innerHTML = '<option value="">Select State</option>' +
    states.map(s => `<option value="${s}">${s}</option>`).join('');

  stateSelect.addEventListener('change', () => {
    const selectedState = stateSelect.value;
    if (selectedState && statesAndCities[selectedState]) {
      citySelect.innerHTML = '<option value="">Select City</option>' +
        statesAndCities[selectedState].map(c => `<option value="${c}">${c}</option>`).join('');
    } else {
      citySelect.innerHTML = '<option value="">Select City</option>';
    }
  });
}

function openCheckout() {
  if (cart.length === 0) return;

  // Render checkout summary
  const subtotal = getCartTotal();
  const shipping = 100;
  const total = subtotal + shipping;

  checkoutSummaryEl.innerHTML = `
    <h3>Order Summary</h3>
    <div class="checkout-items">
      ${cart.map(item => {
    const product = products.find(p => p.id === item.id);
    if (!product) return '';
    return `
          <div class="checkout-item">
            <span class="checkout-item-name">${product.name} × ${item.qty}</span>
            <span class="checkout-item-price">₹${(product.price * item.qty).toLocaleString('en-IN')}</span>
          </div>
        `;
  }).join('')}
    </div>
    <div class="summary-row">
      <span class="label">Subtotal</span>
      <span class="value">₹${subtotal.toLocaleString('en-IN')}</span>
    </div>
    <div class="summary-row">
      <span class="label">Shipping</span>
      <span class="value">₹${shipping.toLocaleString('en-IN')}</span>
    </div>
    <div class="summary-row total">
      <span class="label">Total</span>
      <span class="value">₹${total.toLocaleString('en-IN')}</span>
    </div>
  `;

  // Show modal
  checkoutContent.style.display = 'block';
  checkoutSuccess.style.display = 'none';
  checkoutModal.classList.add('show');
  document.body.style.overflow = 'hidden';
}

function closeCheckoutModal() {
  checkoutModal.classList.remove('show');
  document.body.style.overflow = '';
}

closeCheckout.addEventListener('click', closeCheckoutModal);

checkoutModal.addEventListener('click', (e) => {
  if (e.target === checkoutModal) {
    closeCheckoutModal();
  }
});

// Payment method panel toggle
const paymentRadios = document.querySelectorAll('input[name="paymentMethod"]');
const upiPanel = document.getElementById('upiPanel');
const cardPanel = document.getElementById('cardPanel');

function togglePaymentPanels() {
  const selected = document.querySelector('input[name="paymentMethod"]:checked');
  if (!selected) return;

  // Hide all panels
  if (upiPanel) upiPanel.classList.remove('active');
  if (cardPanel) cardPanel.classList.remove('active');

  // Show the relevant panel
  if (selected.value === 'upi' && upiPanel) {
    upiPanel.classList.add('active');
  } else if (selected.value === 'card' && cardPanel) {
    cardPanel.classList.add('active');
  }
}

paymentRadios.forEach(radio => {
  radio.addEventListener('change', togglePaymentPanels);
});

// Generate QR Code button
const generateQrBtn = document.getElementById('generateQrBtn');
const qrPlaceholder = document.getElementById('qrPlaceholder');

if (generateQrBtn && qrPlaceholder) {
  generateQrBtn.addEventListener('click', () => {
    qrPlaceholder.classList.add('generated');
    qrPlaceholder.innerHTML = '<i class="fa-solid fa-qrcode"></i>';
    generateQrBtn.textContent = 'QR Generated ✓';
    generateQrBtn.disabled = true;
    generateQrBtn.style.opacity = '0.6';
    showToast('QR Code generated! Scan to pay via UPI.');
  });
}

checkoutForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Validate form
  const fullName = document.getElementById('fullName').value.trim();
  const phone = document.getElementById('phoneNumber').value.trim();
  const address = document.getElementById('address').value.trim();
  const state = stateSelect.value;
  const city = citySelect.value;
  const pincode = document.getElementById('pincode').value.trim();
  const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked');

  if (!fullName || !phone || !address || !state || !city || !pincode) {
    showToast('Please fill in all required fields.');
    return;
  }

  if (!/^\d{6}$/.test(pincode)) {
    showToast('Please enter a valid 6-digit pincode.');
    return;
  }

  if (!paymentMethod) {
    showToast('Please select a payment method.');
    return;
  }

  // Validate card fields if card is selected
  if (paymentMethod.value === 'card') {
    const cardNumber = document.getElementById('cardNumber').value.trim();
    const cardExpiry = document.getElementById('cardExpiry').value.trim();
    const cardCvv = document.getElementById('cardCvv').value.trim();
    const cardHolder = document.getElementById('cardHolder').value.trim();

    if (!cardNumber || !cardExpiry || !cardCvv || !cardHolder) {
      showToast('Please fill in all card details.');
      return;
    }

    if (cardNumber.replace(/\s/g, '').length < 13) {
      showToast('Please enter a valid card number.');
      return;
    }

    if (cardCvv.length < 3) {
      showToast('Please enter a valid CVV.');
      return;
    }
  }

  // Get payment label
  const paymentLabels = { cod: 'Cash on Delivery', upi: 'UPI', card: 'Credit / Debit Card' };
  const selectedPayment = paymentLabels[paymentMethod.value] || paymentMethod.value;

  // Show success
  checkoutContent.style.display = 'none';
  checkoutSuccess.style.display = 'block';

  // Update success message with payment info
  const successMsg = checkoutSuccess.querySelector('p');
  if (successMsg) {
    successMsg.textContent = `Thank you for shopping with Aurelia Jewels! Your order has been confirmed with ${selectedPayment}. It will be shipped soon.`;
  }

  // Clear cart
  cart = [];
  saveCart();
  updateCartCount();

  // Reset form
  checkoutForm.reset();
  citySelect.innerHTML = '<option value="">Select City</option>';
});

continueShopping.addEventListener('click', () => {
  closeCheckoutModal();
  navigateTo('home');
});

// ==========================================
// CONTACT FORM
// ==========================================
function initContactForm() {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('Thank you! Your enquiry has been sent successfully.');
    contactForm.reset();
  });

  // Standalone enquiry form (above footer)
  const enquiryForm = document.getElementById('enquiryForm');
  if (enquiryForm) {
    enquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Thank you! Your enquiry has been sent. We\'ll be in touch soon.');
      enquiryForm.reset();
    });
  }
}

// ==========================================
// TOAST NOTIFICATION
// ==========================================
function showToast(message) {
  toastMessage.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

// ==========================================
// SCROLL ANIMATIONS
// ==========================================
function initScrollAnimations() {
  const elements = document.querySelectorAll('.animate-on-scroll');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  elements.forEach(el => {
    if (!el.classList.contains('visible')) {
      observer.observe(el);
    }
  });
}
