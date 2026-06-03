// ========== PROPERTY DATA ==========
const properties = [
    {
        id: 1,
        title: "Persada Residence Type Harmony",
        location: "Ciampea",
        distance: "5 mnt ke Gerbang Utama",
        image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&q=80",
        bed: 2, bath: 1, size: "33m²",
        price: 1800000,
        rating: 4.9,
        badge: "Best Choice",
        badgeClass: "best",
        type: "rumah"
    },
    {
        id: 2,
        title: "Persada Residence",
        location: "Dramaga",
        distance: "5 mnt ke Gerbang Utama",
        image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400&q=80",
        bed: 2, bath: 1, size: "36m²",
        price: 3000000,
        rating: 5.0,
        badge: "Populer",
        badgeClass: "popular",
        type: "rumah"
    },
    {
        id: 3,
        title: "Kost Mawar Putri",
        location: "Babakan Raya",
        distance: "10 mnt ke Kampus",
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6a61c4?w=400&q=80",
        bed: 1, bath: 1, size: "16m²",
        price: 850000,
        rating: 4.7,
        badge: "Hemat",
        badgeClass: "best",
        type: "kost"
    },
    {
        id: 4,
        title: "Kost Melati Putra",
        location: "Bara",
        distance: "3 mnt ke Gerbang",
        image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&q=80",
        bed: 1, bath: 1, size: "15m²",
        price: 700000,
        rating: 4.5,
        badge: "Best Choice",
        badgeClass: "best",
        type: "kost"
    },
    {
        id: 5,
        title: "Griya IPB Asri",
        location: "Dramaga",
        distance: "7 mnt naik motor",
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&q=80",
        bed: 3, bath: 2, size: "45m²",
        price: 4500000,
        rating: 4.8,
        badge: "Premium",
        badgeClass: "popular",
        type: "rumah"
    },
    {
        id: 6,
        title: "Kost Anggrek Campur",
        location: "Cangkurawok",
        distance: "15 mnt ke Kampus",
        image: "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=400&q=80",
        bed: 1, bath: 1, size: "18m²",
        price: 1200000,
        rating: 4.6,
        badge: "Populer",
        badgeClass: "popular",
        type: "kost"
    },
    {
        id: 7,
        title: "Bogor Raya Residence",
        location: "Ciampea",
        distance: "8 mnt ke Gerbang",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&q=80",
        bed: 2, bath: 1, size: "30m²",
        price: 2200000,
        rating: 4.7,
        badge: "Best Choice",
        badgeClass: "best",
        type: "rumah"
    },
    {
        id: 8,
        title: "Kost Flamboyan Putri",
        location: "Perumdos",
        distance: "2 mnt ke Kampus",
        image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=400&q=80",
        bed: 1, bath: 1, size: "14m²",
        price: 950000,
        rating: 4.9,
        badge: "Populer",
        badgeClass: "popular",
        type: "kost"
    }
];

// ========== FORMAT RUPIAH ==========
function formatPrice(price) {
    return 'Rp' + price.toLocaleString('id-ID');
}

// ========== CREATE PROPERTY CARD ==========
function createPropertyCard(prop, showDetail = true) {
    return `
        <div class="property-card" data-type="${prop.type}">
            <div class="card-img-wrap">
                <span class="card-badge ${prop.badgeClass}">${prop.badge}</span>
                <button class="card-compare"><i class="fas fa-scale-balanced"></i> Bandingkan</button>
                <img src="${prop.image}" alt="${prop.title}" loading="lazy">
            </div>
            <div class="card-body">
                <div class="card-rating">★ ${prop.rating}</div>
                <h3 class="card-title">${prop.title}</h3>
                <div class="card-location"><i class="fas fa-location-dot"></i> ${prop.location} · ${prop.distance}</div>
                <div class="card-specs">
                    <span><i class="fas fa-bed"></i> ${prop.bed}</span>
                    <span><i class="fas fa-bath"></i> ${prop.bath}</span>
                    <span><i class="fas fa-vector-square"></i> ${prop.size}</span>
                </div>
                <div class="card-price">${formatPrice(prop.price)} <span style="font-size:0.7rem;font-weight:500;color:var(--text-light);">/bln</span></div>
                ${showDetail ? '<a href="#" class="card-detail-link">Detail <i class="fas fa-arrow-right"></i></a>' : ''}
            </div>
        </div>
    `;
}

// ========== FEATURED CAROUSEL ==========
function renderFeaturedCarousel() {
    const track = document.getElementById('featuredTrack');
    // Show first 6 properties in carousel
    const featuredProps = properties.slice(0, 6);
    track.innerHTML = featuredProps.map(p => createPropertyCard(p)).join('');
}

// ========== NEAREST GRID ==========
function renderNearestGrid() {
    const grid = document.getElementById('nearestGrid');
    const nearest = properties.filter(p => p.location === 'Dramaga' || p.location === 'Ciampea').slice(0, 2);
    grid.innerHTML = nearest.map(p => {
        let card = createPropertyCard(p);
        // Add detail button
        card = card.replace('</div>', '<a href="#" class="card-detail-link">Detail <i class="fas fa-arrow-right"></i></a></div>');
        return card;
    }).join('');
}

// ========== BUDGET GRID ==========
function renderBudgetGrid() {
    const grid = document.getElementById('budgetGrid');
    const budget = [...properties].sort((a, b) => a.price - b.price).slice(0, 4);
    grid.innerHTML = budget.map(p => createPropertyCard(p, false)).join('');
}

// ========== EXPLORE GRID ==========
function renderExploreGrid(filter = 'all') {
    const grid = document.getElementById('exploreGrid');
    const filtered = filter === 'all' ? properties : properties.filter(p => p.type === filter);
    grid.innerHTML = filtered.map(p => createPropertyCard(p)).join('');
}

// ========== CAROUSEL CONTROLS ==========
function initCarousel() {
    const track = document.getElementById('featuredTrack');
    const leftBtn = document.getElementById('slideLeft');
    const rightBtn = document.getElementById('slideRight');
    if (!track || !leftBtn || !rightBtn) return;

    let position = 0;
    
    // Check how many cards are visible based on container width
    function getVisibleCards() {
        const containerWidth = track.parentElement.offsetWidth;
        const cardWidth = 342 + 20; // card width + gap
        return Math.max(1, Math.floor(containerWidth / cardWidth));
    }

    function updateSlide() {
        const visible = getVisibleCards();
        const totalCards = track.children.length;
        const maxPos = Math.max(0, totalCards - visible);
        
        if (position > maxPos) position = maxPos;
        if (position < 0) position = 0;
        
        const offset = -(position * (342 + 20));
        track.style.transform = `translateX(${offset}px)`;
    }

    leftBtn.addEventListener('click', () => {
        position--;
        updateSlide();
    });

    rightBtn.addEventListener('click', () => {
        const visible = getVisibleCards();
        const totalCards = track.children.length;
        if (position < totalCards - visible) {
            position++;
            updateSlide();
        }
    });

    window.addEventListener('resize', updateSlide);
    updateSlide();
}

// ========== EXPLORE TABS ==========
function initTabs() {
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            renderExploreGrid(tab.dataset.filter);
        });
    });
}

// ========== FAQ ACCORDION ==========
function initFAQ() {
    const items = document.querySelectorAll('.faq-item');
    items.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            // Close others
            items.forEach(i => {
                if (i !== item) i.classList.remove('active');
            });
            item.classList.toggle('active');
        });
    });
}

// ========== HAMBURGER MENU ==========
function initNav() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    const navActions = document.querySelector('.nav-actions');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('open');
        navActions.classList.toggle('open');
    });

    // Close menu on link click
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('open');
            navActions.classList.remove('open');
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// ========== CHIP SELECTION ==========
function initChips() {
    const chips = document.querySelectorAll('.chip');
    chips.forEach(chip => {
        chip.addEventListener('click', () => {
            chips.forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
        });
    });
}

// ========== INIT ==========
document.addEventListener('DOMContentLoaded', () => {
    renderFeaturedCarousel();
    renderNearestGrid();
    renderBudgetGrid();
    renderExploreGrid();
    
    initCarousel();
    initTabs();
    initFAQ();
    initNav();
    initChips();
});
