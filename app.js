/* ==========================================================================
   Amara Living — Interactive Web Application Logic
   ========================================================================== */

// Sample Data Store
const PRODUCT_DATA = [
  {
    id: 'tile-01',
    category: 'tiles',
    title: 'Carrara Imperial Marble Tile',
    subtitle: 'High-Gloss Porcelain Slab',
    sizes: '800 x 1600 mm',
    finish: 'Polished High-Gloss',
    thickness: '9.0 mm',
    mohsHardness: '7.5',
    absorption: '< 0.03%',
    coverage: '1.28 sq.m / box',
    personaBest: ['architect', 'designer'],
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
    description: 'Inspired by classical Italian quarries, Carrara Imperial features soft grey veining over an alabaster backdrop, engineered for heavy traffic and high moisture resistance.',
    cadLink: '#download-cad-carrara'
  },
  {
    id: 'tile-02',
    category: 'tiles',
    title: 'Royal Onyx Bookmatch',
    subtitle: 'Endless Pattern Ceramic',
    sizes: '800 x 1600 mm',
    finish: 'Mirror Bookmatch',
    thickness: '9.5 mm',
    mohsHardness: '8.0',
    absorption: '< 0.02%',
    coverage: '1.28 sq.m / box',
    personaBest: ['designer', 'homeowner'],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    description: 'Dramatic gold and amber translucent veining designed to create seamless continuous wall features and grand hotel lobbies.',
    cadLink: '#download-cad-onyx'
  },
  {
    id: 'tile-03',
    category: 'tiles',
    title: 'Nero Marquina Velvet',
    subtitle: 'Matte Slip-Resistant Floor Tile',
    sizes: '600 x 600 mm',
    finish: 'Silk Matte (R10 Anti-slip)',
    thickness: '9.0 mm',
    mohsHardness: '7.0',
    absorption: '< 0.04%',
    coverage: '1.44 sq.m / box',
    personaBest: ['architect', 'dealer'],
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
    description: 'Deep obsidian black floor slab with sharp white needle veining. Features R10 slip resistance certification for luxury bath suites.',
    cadLink: '#download-cad-nero'
  },
  {
    id: 'granite-01',
    category: 'granite',
    title: 'Absolute Black Granite Slab',
    subtitle: 'Natural Igneous Stone',
    sizes: '1200 x 2400 mm Slabs',
    finish: 'Honed / Polished',
    thickness: '18.0 mm',
    mohsHardness: '8.5',
    absorption: '< 0.01%',
    coverage: 'Custom Cut Slabs',
    personaBest: ['architect', 'dealer'],
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80',
    description: 'Premium dense black granite sourced from South Indian quarries. Zero porosity, heat resistant up to 600°C, perfect for kitchen counters and exterior cladding.',
    cadLink: '#download-cad-granite-black'
  },
  {
    id: 'granite-02',
    category: 'granite',
    title: 'Titanium Gold Quartzite',
    subtitle: 'Exotic Natural Stone',
    sizes: '1400 x 2800 mm Slabs',
    finish: 'Leathered 3D Texture',
    thickness: '20.0 mm',
    mohsHardness: '8.0',
    absorption: '< 0.02%',
    coverage: 'Custom Cut Slabs',
    personaBest: ['designer', 'homeowner'],
    image: 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&w=800&q=80',
    description: 'Striking black quartzite with flowing veins of gold, ivory, and cognac quartz crystals. Ideal for statement islands and feature walls.',
    cadLink: '#download-cad-quartzite'
  },
  {
    id: 'furniture-01',
    category: 'furniture',
    title: 'Aurelia Velvet Lounge Sofa',
    subtitle: 'Bespoke Handcrafted Living',
    sizes: '2400W x 950D x 780H mm',
    finish: 'Belgian Emerald Velvet & Solid Brass',
    thickness: 'Kiln-Dried Beech Frame',
    mohsHardness: 'N/A',
    absorption: 'Stain-Guard Treated',
    coverage: '1-Year Warranty',
    personaBest: ['designer', 'homeowner'],
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80',
    description: 'Handcrafted luxury sofa featuring deep button tufting, high-resilience foam core, and solid brushed brass accent base.',
    cadLink: '#download-cad-sofa'
  }
];

// Persona Configuration Matrix
const PERSONA_CONFIG = {
  architect: {
    title: "Architectural & Commercial Portal",
    subtitle: "Built for Structural Specs, BIM Files & Heavy-Traffic Ratings",
    badgeText: "FOR ARCHITECTS & SPECIFIERS",
    accentColor: "var(--persona-architect)",
    description: "Access technical datasheets, CAD/BIM block libraries, MOHS hardness scales, slip-resistance standards (R9-R11), and commercial structural warranties.",
    features: [
      "Download DWG / Revit BIM 3D models for all tile & granite slabs.",
      "Access ISO 9001:2015 & ASTM water absorption test certificates.",
      "Calculate square-footage specs & heavy-footfall load capacities.",
      "Direct technical liaison for facade cladding & lobby projects."
    ],
    ctaText: "Download Architectural Specs Pack",
    ctaAction: () => openModal('architect-pack-modal')
  },
  designer: {
    title: "Interior Design & Curation Studio",
    subtitle: "Curated Textures, Moodboards & Custom Finish Swatches",
    badgeText: "FOR INTERIOR DESIGNERS",
    accentColor: "var(--persona-designer)",
    description: "Explore curated color swatches, request physical material sample boxes delivered to your studio within 48 hours, and customize velvet fabrics or leathered stone finishes.",
    features: [
      "Request complimentary 15x15cm designer sample boxes.",
      "Explore 3D Bookmatch & Endless pattern visualizers.",
      "Custom timber stain & fabric upholstery customization.",
      "Dedicated trade discount program (up to 25% for verified studios)."
    ],
    ctaText: "Order Complimentary Sample Box",
    ctaAction: () => openModal('sample-bag-modal')
  },
  dealer: {
    title: "Trade & Global Distributor Network",
    subtitle: "Direct Factory Shipping, Wholesale Tiers & Container Specs",
    badgeText: "FOR DEALERS & DISTRIBUTORS",
    accentColor: "var(--persona-dealer)",
    description: "Partner with Amara Living's 16-year legacy. Access bulk price lists, container volume discounts, display rack support, and guaranteed factory dispatch lead times.",
    features: [
      "Access tier-1 wholesale pricing catalog & FOB export quotes.",
      "Free showroom display racks & branded material stands.",
      "Flexible payment terms & regional exclusive dealership options.",
      "Direct connection to Chennai & Madurai distribution hubs."
    ],
    ctaText: "Apply For Dealership Partnership",
    ctaAction: () => openModal('dealer-modal')
  },
  homeowner: {
    title: "Luxury Homeowner Experience",
    subtitle: "Turnkey Room Inspiration, Showroom Tours & Style Guidance",
    badgeText: "FOR HOMEOWNERS",
    accentColor: "var(--persona-homeowner)",
    description: "Transform your home with luxury surfaces and handcrafted furniture. Book a private consultation with our in-house interior stylists or visit our experience centers.",
    features: [
      "Interactive 3D Room Visualizer to preview tiles & granite.",
      "Book VIP private appointment at Chennai or Madurai Experience Centers.",
      "End-to-end design guidance from tile selection to installation.",
      "Chat directly with our design consultants on WhatsApp."
    ],
    ctaText: "Book VIP Showroom Tour",
    ctaAction: () => openModal('consultation-modal')
  }
};

// Global State
let activePersona = 'architect';
let sampleBag = [];

// DOM Ready Handler
document.addEventListener('DOMContentLoaded', () => {
  initPersonaSwitcher();
  switchPersona('architect');
  renderProducts('all');
  initFilterButtons();
  updateSampleBagUI();
  initMobileNav();
});

// Persona Switcher Logic
function initPersonaSwitcher() {
  const tabs = document.querySelectorAll('.persona-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const persona = tab.dataset.persona;
      switchPersona(persona);
    });
  });
}

function switchPersona(personaKey) {
  if (!PERSONA_CONFIG[personaKey]) return;
  activePersona = personaKey;
  
  // Update Tab States
  document.querySelectorAll('.persona-tab').forEach(tab => {
    tab.classList.toggle('active', tab.dataset.persona === personaKey);
  });
  
  // Update Dynamic Context Card
  const config = PERSONA_CONFIG[personaKey];
  const card = document.getElementById('persona-dynamic-card');
  if (card) {
    card.style.borderLeftColor = config.accentColor;
    card.innerHTML = `
      <div class="badge" style="background: rgba(255,255,255,0.05); color: ${config.accentColor}; border-color: ${config.accentColor}">
        ${config.badgeText}
      </div>
      <h3 style="margin-top: 14px;">${config.title}</h3>
      <p style="font-size: 0.95rem; color: var(--text-dark-secondary); margin-bottom: 16px;">${config.subtitle}</p>
      <p>${config.description}</p>
      <ul class="persona-features-list">
        ${config.features.map(f => `<li><i class="fa-solid fa-check-circle" style="color: ${config.accentColor}"></i> ${f}</li>`).join('')}
      </ul>
      <button class="btn btn-gold" style="margin-top: 10px; width: 100%; justify-content: center;" id="persona-cta-btn" onclick="triggerPersonaCTA('${personaKey}')">
        ${config.ctaText} &nbsp;<i class="fa-solid fa-arrow-right"></i>
      </button>
    `;
  }

  // Smooth scroll to card so user sees the active persona details
  if (card && window.scrollY > 300) {
    card.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  showToast(`Active View: ${config.title}`);

  // Highlight products best suited for persona
  highlightProductsForPersona(personaKey);
}

function triggerPersonaCTA(personaKey) {
  const config = PERSONA_CONFIG[personaKey];
  if (config && typeof config.ctaAction === 'function') {
    config.ctaAction();
  }
}

function highlightProductsForPersona(personaKey) {
  const cards = document.querySelectorAll('.product-card');
  cards.forEach(card => {
    const productId = card.dataset.id;
    const product = PRODUCT_DATA.find(p => p.id === productId);
    if (product) {
      if (product.personaBest.includes(personaKey)) {
        card.style.borderColor = 'var(--accent-gold)';
        card.style.boxShadow = '0 0 20px rgba(212, 175, 55, 0.25)';
      } else {
        card.style.borderColor = 'var(--glass-border)';
        card.style.boxShadow = 'none';
      }
    }
  });
}

// Product Catalog Rendering & Filtering
function renderProducts(filterCategory = 'all') {
  const container = document.getElementById('product-grid-container');
  if (!container) return;
  
  const filtered = filterCategory === 'all' 
    ? PRODUCT_DATA 
    : PRODUCT_DATA.filter(p => p.category === filterCategory);
    
  container.innerHTML = filtered.map(product => `
    <div class="product-card" data-id="${product.id}">
      <div class="product-img-wrapper">
        <img src="${product.image}" alt="${product.title}" class="product-img">
        <span class="badge product-badge-tag">${product.subtitle}</span>
        <div class="product-actions-overlay">
          <button class="icon-btn" title="Quick Spec View" onclick="openProductQuickView('${product.id}')">
            <i class="fa-solid fa-eye"></i>
          </button>
          <button class="icon-btn" title="Add Sample to Cart" onclick="addToSampleBag('${product.id}')">
            <i class="fa-solid fa-plus"></i>
          </button>
        </div>
      </div>
      <div class="product-info">
        <div class="product-category">${product.category.toUpperCase()} COLLECTION</div>
        <h3 class="product-title">${product.title}</h3>
        
        <div class="product-spec-row">
          <div class="spec-item">
            <span class="spec-label">Dimensions</span>
            <span class="spec-value">${product.sizes}</span>
          </div>
          <div class="spec-item">
            <span class="spec-label">Finish</span>
            <span class="spec-value">${product.finish}</span>
          </div>
          <div class="spec-item">
            <span class="spec-label">Hardness (MOHS)</span>
            <span class="spec-value">${product.mohsHardness}</span>
          </div>
          <div class="spec-item">
            <span class="spec-label">Absorption</span>
            <span class="spec-value">${product.absorption}</span>
          </div>
        </div>

        <div class="product-card-footer">
          <button class="btn btn-outline-gold" style="padding: 8px 14px; font-size: 0.75rem;" onclick="openProductQuickView('${product.id}')">
            View Full Specs
          </button>
          <button class="btn btn-gold" style="padding: 8px 14px; font-size: 0.75rem;" onclick="addToSampleBag('${product.id}')">
            + Request Sample
          </button>
        </div>
      </div>
    </div>
  `).join('');

  highlightProductsForPersona(activePersona);
}

function initFilterButtons() {
  const btns = document.querySelectorAll('.filter-btn');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const category = btn.dataset.filter;
      renderProducts(category);
    });
  });
}

// Quick View Modal
function openProductQuickView(productId) {
  const product = PRODUCT_DATA.find(p => p.id === productId);
  if (!product) return;
  
  const modalContent = document.getElementById('product-quickview-content');
  if (!modalContent) return;
  
  modalContent.innerHTML = `
    <div class="product-modal-grid">
      <div>
        <img src="${product.image}" style="width: 100%; border-radius: 8px; border: 1px solid var(--glass-border);" alt="${product.title}">
        <div style="margin-top: 16px; background: rgba(255,255,255,0.03); padding: 14px; border-radius: 6px; border: 1px solid var(--glass-border);">
          <h5 style="color: var(--accent-gold); text-transform: uppercase; font-size: 0.75rem; letter-spacing: 0.1em; margin-bottom: 8px;">Architectural CAD & BIM</h5>
          <p style="font-size: 0.82rem; margin-bottom: 12px;">Download 3D files & technical compliance certificate.</p>
          <a href="#download" class="btn btn-dark" style="width: 100%; font-size: 0.8rem;" onclick="alert('Downloading CAD DWG & Revit BIM file for ${product.title}...')">
            <i class="fa-solid fa-download"></i> Download DWG / BIM File
          </a>
        </div>
      </div>
      <div>
        <span class="badge" style="margin-bottom: 10px;">${product.category.toUpperCase()} • ${product.subtitle}</span>
        <h2 style="font-size: 2.2rem; color: #fff; margin-bottom: 12px;">${product.title}</h2>
        <p style="font-size: 0.95rem; margin-bottom: 24px;">${product.description}</p>
        
        <h4 style="color: var(--accent-gold); font-size: 1rem; margin-bottom: 12px;">Technical Specification Matrix</h4>
        <table style="width: 100%; border-collapse: collapse; font-size: 0.88rem; margin-bottom: 24px;">
          <tr style="border-bottom: 1px solid var(--glass-border);">
            <td style="padding: 8px 0; color: var(--text-dark-secondary);">Standard Slab Size:</td>
            <td style="padding: 8px 0; text-align: right; color: #fff; font-weight: 600;">${product.sizes}</td>
          </tr>
          <tr style="border-bottom: 1px solid var(--glass-border);">
            <td style="padding: 8px 0; color: var(--text-dark-secondary);">Surface Finish:</td>
            <td style="padding: 8px 0; text-align: right; color: #fff; font-weight: 600;">${product.finish}</td>
          </tr>
          <tr style="border-bottom: 1px solid var(--glass-border);">
            <td style="padding: 8px 0; color: var(--text-dark-secondary);">Thickness:</td>
            <td style="padding: 8px 0; text-align: right; color: #fff; font-weight: 600;">${product.thickness}</td>
          </tr>
          <tr style="border-bottom: 1px solid var(--glass-border);">
            <td style="padding: 8px 0; color: var(--text-dark-secondary);">MOHS Scratch Hardness:</td>
            <td style="padding: 8px 0; text-align: right; color: #fff; font-weight: 600;">${product.mohsHardness} / 10</td>
          </tr>
          <tr style="border-bottom: 1px solid var(--glass-border);">
            <td style="padding: 8px 0; color: var(--text-dark-secondary);">Water Absorption Rate:</td>
            <td style="padding: 8px 0; text-align: right; color: #fff; font-weight: 600;">${product.absorption}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: var(--text-dark-secondary);">Box Coverage:</td>
            <td style="padding: 8px 0; text-align: right; color: #fff; font-weight: 600;">${product.coverage}</td>
          </tr>
        </table>
        
        <div style="display: flex; gap: 12px; flex-wrap: wrap;">
          <button class="btn btn-gold" style="flex: 1 1 200px;" onclick="addToSampleBag('${product.id}'); closeModal('product-modal');">
            + Add to Sample Request
          </button>
          <button class="btn btn-dark" style="flex: 1 1 120px;" onclick="window.open('https://wa.me/?text=Inquiry%20regarding%20' + encodeURIComponent('${product.title}'), '_blank')">
            <i class="fa-brands fa-whatsapp"></i> Inquiry
          </button>
        </div>
      </div>
    </div>
  `;
  
  openModal('product-modal');
}

// Sample Bag Management
function addToSampleBag(productId) {
  let product = PRODUCT_DATA.find(p => p.id === productId);
  if (!product && typeof MASTER_VISUALIZER_PRODUCTS !== 'undefined') {
    product = MASTER_VISUALIZER_PRODUCTS.find(p => p.id === productId);
  }
  if (!product && typeof ROOM_TILE_CATALOG !== 'undefined') {
    product = ROOM_TILE_CATALOG.find(p => p.id === productId);
  }
  if (!product && typeof MY3D_TILES_CATALOG !== 'undefined') {
    product = MY3D_TILES_CATALOG.find(p => p.id === productId);
  }
  if (!product && typeof ULTIMATE_TILES_DATA !== 'undefined') {
    product = ULTIMATE_TILES_DATA.find(p => p.id === productId);
  }
  if (!product && typeof ROOM_TILE_PRODUCTS !== 'undefined') {
    product = ROOM_TILE_PRODUCTS.find(p => p.id === productId);
  }
  if (!product && typeof VISUALIZER_TILES !== 'undefined') {
    product = VISUALIZER_TILES.find(p => p.id === productId);
  }
  if (!product && typeof ROOM_PRODUCTS !== 'undefined') {
    product = ROOM_PRODUCTS.find(p => p.id === productId);
  }
  if (!product && typeof PLANNER_TILES !== 'undefined') {
    product = PLANNER_TILES.find(p => p.id === productId);
  }
  if (!product && typeof TILE_CATALOG !== 'undefined') {
    product = TILE_CATALOG.find(p => p.id === productId);
  }
  if (!product) return;
  
  if (!sampleBag.some(item => item.id === productId)) {
    sampleBag.push(product);
    updateSampleBagUI();
    showToast(`Added "${product.title}" to sample request kit!`);
  } else {
    showToast(`"${product.title}" is already in your sample kit.`);
  }
}

function removeFromSampleBag(productId) {
  sampleBag = sampleBag.filter(p => p.id !== productId);
  updateSampleBagUI();
  renderSampleBagModalContent();
}

function updateSampleBagUI() {
  const badges = document.querySelectorAll('.sample-count');
  badges.forEach(b => b.textContent = sampleBag.length);
}

function renderSampleBagModalContent() {
  const container = document.getElementById('sample-bag-list');
  if (!container) return;
  
  if (sampleBag.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 40px 0;">
        <i class="fa-solid fa-box-open" style="font-size: 3rem; color: var(--text-dark-secondary); margin-bottom: 14px;"></i>
        <p>Your sample request bag is empty.</p>
        <p style="font-size: 0.85rem;">Select tiles or granite from the catalog above to add to your complimentary box.</p>
      </div>
    `;
  } else {
    container.innerHTML = `
      <div style="display: flex; flex-direction: column; gap: 12px; margin-bottom: 24px;">
        ${sampleBag.map(item => `
          <div style="display: flex; align-items: center; justify-content: space-between; background: rgba(255,255,255,0.04); padding: 12px 16px; border-radius: 6px; border: 1px solid var(--glass-border);">
            <div style="display: flex; align-items: center; gap: 14px;">
              <img src="${item.image}" style="width: 50px; height: 50px; object-fit: cover; border-radius: 4px;" alt="${item.title}">
              <div>
                <h5 style="color: #fff; font-size: 0.95rem;">${item.title}</h5>
                <span style="font-size: 0.75rem; color: var(--accent-gold);">${item.sizes} • ${item.finish}</span>
              </div>
            </div>
            <button class="icon-btn" style="width: 30px; height: 30px; font-size: 0.8rem;" onclick="removeFromSampleBag('${item.id}')">
              <i class="fa-solid fa-trash"></i>
            </button>
          </div>
        `).join('')}
      </div>
    `;
  }
}

// Modal Toggle Helpers
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('active');
    if (modalId === 'sample-bag-modal') {
      renderSampleBagModalContent();
    }
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('active');
  }
}

// Toast Notifications
function showToast(message) {
  let toast = document.getElementById('global-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'global-toast';
    toast.style.cssText = `
      position: fixed;
      bottom: 30px;
      right: 30px;
      background: var(--accent-gold);
      color: #0b0c0e;
      padding: 14px 24px;
      border-radius: 6px;
      font-weight: 700;
      font-size: 0.9rem;
      box-shadow: 0 10px 30px rgba(0,0,0,0.4);
      z-index: 9999;
      transition: all 0.3s ease;
      opacity: 0;
      transform: translateY(20px);
    `;
    document.body.appendChild(toast);
  }
  
  toast.textContent = message;
  toast.style.opacity = '1';
  toast.style.transform = 'translateY(0)';
  
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(20px)';
  }, 3000);
}

// Mobile Navigation Drawer Controllers
function initMobileNav() {
  const menuButtons = document.querySelectorAll('.mobile-menu-btn');
  menuButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMobileMenu();
    });
  });

  const drawer = document.getElementById('mobile-nav-drawer');
  if (drawer) {
    const navLinks = drawer.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        closeMobileMenu();
      });
    });
  }

  // Close when clicking outside drawer
  document.addEventListener('click', (e) => {
    const drawer = document.getElementById('mobile-nav-drawer');
    const isMenuBtn = e.target.closest('.mobile-menu-btn');
    if (drawer && drawer.classList.contains('active') && !drawer.contains(e.target) && !isMenuBtn) {
      closeMobileMenu();
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeMobileMenu();
      document.querySelectorAll('.modal-overlay.active').forEach(m => m.classList.remove('active'));
    }
  });
}

function toggleMobileMenu() {
  const drawer = document.getElementById('mobile-nav-drawer');
  if (drawer) {
    drawer.classList.toggle('active');
    document.body.style.overflow = drawer.classList.contains('active') ? 'hidden' : '';
  }
}

function closeMobileMenu() {
  const drawer = document.getElementById('mobile-nav-drawer');
  if (drawer) {
    drawer.classList.remove('active');
    document.body.style.overflow = '';
  }
}
