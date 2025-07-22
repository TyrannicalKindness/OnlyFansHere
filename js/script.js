document.addEventListener('DOMContentLoaded', () => {
    console.log('OnlyFansHere website loaded.');

    // Centralized product data for site-wide search
    const products = [
        // Neck Fans
        { name: 'Neck Fan 1', price: 39.99, tags: ['neck', 'fan', 'neck fan'], url: 'neck-fans.html' },
        { name: 'Neck Fan 2', price: 34.99, tags: ['neck', 'fan', 'neck fan'], url: 'neck-fans.html' },
        { name: 'Neck Fan 3', price: 29.99, tags: ['neck', 'fan', 'neck fan'], url: 'neck-fans.html' },
        { name: 'Neck Fan 4', price: 32.99, tags: ['neck', 'fan', 'neck fan'], url: 'neck-fans.html' },
        { name: 'Neck Fan 5', price: 37.99, tags: ['neck', 'fan', 'neck fan'], url: 'neck-fans.html' },
        // Hand Fans
        { name: 'Hand Fan 1', price: 29.99, tags: ['hand', 'fan', 'hand fan'], url: 'hand-fans.html' },
        { name: 'Hand Fan 2', price: 24.99, tags: ['hand', 'fan', 'hand fan'], url: 'hand-fans.html' },
        { name: 'Hand Fan 3', price: 19.99, tags: ['hand', 'fan', 'hand fan'], url: 'hand-fans.html' },
        { name: 'Hand Fan 4', price: 22.99, tags: ['hand', 'fan', 'hand fan'], url: 'hand-fans.html' },
        { name: 'Hand Fan 5', price: 27.99, tags: ['hand', 'fan', 'hand fan'], url: 'hand-fans.html' },
        // Desk Fans
        { name: 'Desk Fan 1', price: 49.99, tags: ['desk', 'fan', 'desk fan'], url: 'desk-fans.html' },
        { name: 'Desk Fan 2', price: 44.99, tags: ['desk', 'fan', 'desk fan'], url: 'desk-fans.html' },
        { name: 'Desk Fan 3', price: 39.99, tags: ['desk', 'fan', 'desk fan'], url: 'desk-fans.html' },
        { name: 'Desk Fan 4', price: 42.99, tags: ['desk', 'fan', 'desk fan'], url: 'desk-fans.html' },
        { name: 'Desk Fan 5', price: 47.99, tags: ['desk', 'fan', 'desk fan'], url: 'desk-fans.html' },
        // Ceiling Fans
        { name: 'Ceiling Fan 1', price: 129.99, tags: ['ceiling', 'fan', 'ceiling fan'], url: 'ceiling-fans.html' },
        { name: 'Ceiling Fan 2', price: 149.99, tags: ['ceiling', 'fan', 'ceiling fan'], url: 'ceiling-fans.html' },
        { name: 'Ceiling Fan 3', price: 139.99, tags: ['ceiling', 'fan', 'ceiling fan'], url: 'ceiling-fans.html' },
        { name: 'Ceiling Fan 4', price: 119.99, tags: ['ceiling', 'fan', 'ceiling fan'], url: 'ceiling-fans.html' },
        { name: 'Ceiling Fan 5', price: 134.99, tags: ['ceiling', 'fan', 'ceiling fan'], url: 'ceiling-fans.html' },
        // Home Fans
        { name: 'Home Fan 1', price: 89.99, tags: ['home', 'fan', 'home fan'], url: 'home-fans.html' },
        { name: 'Home Fan 2', price: 84.99, tags: ['home', 'fan', 'home fan'], url: 'home-fans.html' },
        { name: 'Home Fan 3', price: 79.99, tags: ['home', 'fan', 'home fan'], url: 'home-fans.html' },
        { name: 'Home Fan 4', price: 82.99, tags: ['home', 'fan', 'home fan'], url: 'home-fans.html' },
        { name: 'Home Fan 5', price: 87.99, tags: ['home', 'fan', 'home fan'], url: 'home-fans.html' },
        // Featured Fans
        { name: 'Ultimate Breeze 5000', price: 199.99, tags: ['featured', 'fan'], url: 'featured.html' },
        { name: 'FireFan Pro', price: 179.99, tags: ['featured', 'fan'], url: 'featured.html' },
        { name: 'IceCool Deluxe', price: 189.99, tags: ['featured', 'fan'], url: 'featured.html' },
        { name: 'BreezeMaster 300', price: 159.99, tags: ['featured', 'fan'], url: 'featured.html' },
        { name: 'Cyclone X', price: 169.99, tags: ['featured', 'fan'], url: 'featured.html' }
    ];

    // Search functionality for site-wide search
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');

    if (searchForm && searchInput) {
        searchForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const query = searchInput.value.trim().toLowerCase();
            showSearchResults(query);
        });

        searchInput.addEventListener('input', () => {
            const query = searchInput.value.trim().toLowerCase();
            showSearchResults(query);
        });
    }

    // Create search results modal elements
    let searchModal;
    let searchModalContent;

    function createSearchModal() {
        searchModal = document.createElement('div');
        searchModal.id = 'search-modal';
        searchModal.style.position = 'fixed';
        searchModal.style.top = '0';
        searchModal.style.left = '0';
        searchModal.style.width = '100%';
        searchModal.style.height = '100%';
        searchModal.style.backgroundColor = 'rgba(0,0,0,0.5)';
        searchModal.style.display = 'flex';
        searchModal.style.justifyContent = 'center';
        searchModal.style.alignItems = 'center';
        searchModal.style.zIndex = '10001';

        searchModalContent = document.createElement('div');
        searchModalContent.style.backgroundColor = '#fff';
        searchModalContent.style.padding = '20px';
        searchModalContent.style.borderRadius = '8px';
        searchModalContent.style.width = '90%';
        searchModalContent.style.maxWidth = '600px';
        searchModalContent.style.maxHeight = '80%';
        searchModalContent.style.overflowY = 'auto';

        searchModal.appendChild(searchModalContent);

        // Close modal on background click
        searchModal.addEventListener('click', (e) => {
            if (e.target === searchModal) {
                closeSearchModal();
            }
        });

        document.body.appendChild(searchModal);
    }

    function openSearchModal() {
        if (!searchModal) {
            createSearchModal();
        }
        searchModal.style.display = 'flex';
    }

    function closeSearchModal() {
        if (searchModal) {
            searchModal.style.display = 'none';
        }
    }

    function showSearchResults(query) {
        if (!query) {
            if (searchModal) {
                closeSearchModal();
            }
            return;
        }
        const results = products.filter(product => {
            return product.name.toLowerCase().includes(query) || product.tags.some(tag => tag.includes(query));
        });

        if (!searchModal) {
            createSearchModal();
        }
        openSearchModal();

        searchModalContent.innerHTML = `<h2>Search Results for "${query}"</h2>`;

        if (results.length === 0) {
            searchModalContent.innerHTML += '<p>No results found.</p>';
            return;
        }

        const ul = document.createElement('ul');
        ul.style.listStyle = 'none';
        ul.style.padding = '0';

        results.forEach(product => {
            const li = document.createElement('li');
            li.style.marginBottom = '10px';

            const link = document.createElement('a');
            link.href = product.url;
            link.textContent = `${product.name} - $${product.price.toFixed(2)}`;
            link.style.textDecoration = 'none';
            link.style.color = '#007bff';

            li.appendChild(link);
            ul.appendChild(li);
        });

        searchModalContent.appendChild(ul);

        const closeBtn = document.createElement('button');
        closeBtn.textContent = 'Close';
        closeBtn.style.marginTop = '15px';
        closeBtn.style.padding = '8px 16px';
        closeBtn.style.cursor = 'pointer';

        closeBtn.addEventListener('click', closeSearchModal);

        searchModalContent.appendChild(closeBtn);
    }

    // Timed banner logic for homepage
    const timedBanner = document.getElementById('timed-banner');
    if (timedBanner) {
        timedBanner.style.display = 'block';
        setTimeout(() => {
            timedBanner.style.display = 'none';
        }, 30000); // 30 seconds
    }

    // Persistent countdown timer logic
    const countdownTimer = document.getElementById('countdown-timer');
    if (countdownTimer) {
        // Timer duration: 25 days in milliseconds
        const timerDuration = 25 * 24 * 60 * 60 * 1000;

        // Use localStorage to store timer start time
        let timerStart = localStorage.getItem('saleTimerStart');
        if (!timerStart) {
            timerStart = Date.now();
            localStorage.setItem('saleTimerStart', timerStart);
        } else {
            timerStart = parseInt(timerStart, 10);
        }

        function updateTimer() {
            const now = Date.now();
            let elapsed = now - timerStart;
            if (elapsed > timerDuration) {
                // Restart timer
                timerStart = now;
                localStorage.setItem('saleTimerStart', timerStart);
                elapsed = 0;
            }
            const remaining = timerDuration - elapsed;

            const days = Math.floor(remaining / (24 * 60 * 60 * 1000));
            const hours = Math.floor((remaining % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
            const minutes = Math.floor((remaining % (60 * 60 * 1000)) / (60 * 1000));

            document.getElementById('days').textContent = days.toString().padStart(2, '0');
            document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
            document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        }

        updateTimer();
        setInterval(updateTimer, 60000); // Update every minute
    }

    // Add sale banner and before price on product pages
    function addSaleAndBeforePrice() {
        // Check if on a product page by looking for .product-price element
        const productPriceElem = document.querySelector('.product-price');
        if (!productPriceElem) return;

        // Add sale banner above product price
        const saleBanner = document.createElement('div');
        saleBanner.className = 'sale-banner';
        saleBanner.textContent = '50% OFF';
        productPriceElem.parentNode.insertBefore(saleBanner, productPriceElem);

        // Parse current price
        const priceText = productPriceElem.textContent.trim();
        const priceMatch = priceText.match(/£([\d,.]+)/);
        if (!priceMatch) return;
        const currentPrice = parseFloat(priceMatch[1].replace(/,/g, ''));

        // Calculate before price (50% higher)
        const beforePriceValue = (currentPrice * 1.5).toFixed(2);

        // Create before price element
        const beforePriceElem = document.createElement('span');
        beforePriceElem.className = 'before-price';
        beforePriceElem.textContent = `£${beforePriceValue}`;

        // Insert before price above sale banner
        saleBanner.parentNode.insertBefore(beforePriceElem, saleBanner);
    }

    addSaleAndBeforePrice();
});

    // Search functionality
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');

    if (searchForm && searchInput) {
        searchForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const query = searchInput.value.trim().toLowerCase();
            filterProducts(query);
        });

        searchInput.addEventListener('input', () => {
            const query = searchInput.value.trim().toLowerCase();
            filterProducts(query);
        });
    }

    function filterProducts(query) {
        const productCards = document.querySelectorAll('.product-card');
        productCards.forEach(card => {
            const productNameElem = card.querySelector('.product-name');
            if (!productNameElem) return;
            const productName = productNameElem.textContent.toLowerCase();
            if (productName.includes(query)) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    }
});
