// config.js
const SITE_CONFIG = {
  SITE_KEY: 'sunrise-bakery-yard-style-5hfw',
  SUPABASE_URL: 'https://xwbgqkbwutjuodzhknhr.supabase.co',
  SUPABASE_ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh3Ymdxa2J3dXRqdW9kemhrbmhyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI3MjAxNTUsImV4cCI6MjA4ODI5NjE1NX0.YLx9GUU52AcJcZfC2Tg9jtrPo4urPa-n-hVvd5YM-O0',
  SCHEMA: [
    { key: 'nav.logo', label: 'Navigation Logo Text', type: 'text', placeholder: '🌅 Sunrise Bakery' },
    { key: 'hero.image', label: 'Hero Image', type: 'image', placeholder: 'https://xwbgqkbwutjuodzhknhr.supabase.co/storage/v1/object/public/client-assets/sunrise-bakery-yard-style-1773436220275/hero.png' },
    { key: 'hero.label', label: 'Hero Label Text', type: 'text', placeholder: 'Est. 2020 · London' },
    { key: 'hero.headline', label: 'Hero Headline', type: 'text', placeholder: 'Sunrise Bakery Yard Style' },
    { key: 'hero.tagline', label: 'Hero Tagline', type: 'text', placeholder: 'Fresh Jamaican Baked Goods' },
    { key: 'hero.cta', label: 'Hero CTA Button Text', type: 'text', placeholder: 'Order Now' },
    { key: 'products.heading', label: 'Products Section Heading', type: 'text', placeholder: 'Our Baked Goods' },
    { key: 'products.subheading', label: 'Products Section Subheading', type: 'text', placeholder: 'Every item baked fresh using Grandma\'s authentic Jamaican recipes' },
    { key: 'product1.image', label: 'Patties Product Image', type: 'image', placeholder: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400' },
    { key: 'product1.name', label: 'Product 1 Name', type: 'text', placeholder: 'Jamaican Patties' },
    { key: 'product1.description', label: 'Product 1 Description', type: 'textarea', placeholder: 'Golden, flaky pastry filled with seasoned beef — the true yard style taste of Jamaica, baked fresh every morning.' },
    { key: 'product2.image', label: 'Coco Bread Product Image', type: 'image', placeholder: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc7b?w=400' },
    { key: 'product2.name', label: 'Product 2 Name', type: 'text', placeholder: 'Coco Bread' },
    { key: 'product2.description', label: 'Product 2 Description', type: 'textarea', placeholder: 'Pillowy soft coconut-enriched bread — perfect on its own or as the classic partner to your patty.' },
    { key: 'product3.image', label: 'Bun and Cheese Product Image', type: 'image', placeholder: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400' },
    { key: 'product3.name', label: 'Product 3 Name', type: 'text', placeholder: 'Bun and Cheese' },
    { key: 'product3.description', label: 'Product 3 Description', type: 'textarea', placeholder: 'Sweet spiced Jamaican bun paired with sharp cheddar — a timeless combination straight from Grandma\'s kitchen.' },
    { key: 'product4.image', label: 'Hardoe Bread Product Image', type: 'image', placeholder: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400' },
    { key: 'product4.name', label: 'Product 4 Name', type: 'text', placeholder: 'Hardoe Bread' },
    { key: 'product4.description', label: 'Product 4 Description', type: 'textarea', placeholder: 'Dense, hearty Jamaican bread with a golden crust — a staple loaf baked with love from a generations-old recipe.' },
    { key: 'about.image', label: 'About Section Image', type: 'image', placeholder: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400' },
    { key: 'about.heading', label: 'About Section Heading', type: 'text', placeholder: 'Born from Grandma\'s Recipe' },
    { key: 'about.story', label: 'About Story Paragraph 1', type: 'textarea', placeholder: 'Sunrise Bakery Yard Style started in 2020 with one mission — to bring the authentic flavours of Jamaica to the streets of London.' },
    { key: 'about.story2', label: 'About Story Paragraph 2', type: 'textarea', placeholder: 'We believe food is memory. When you bite into our coco bread or golden patty, we want you to taste Jamaica — warm, vibrant, and real.' },
    { key: 'contact.heading', label: 'Contact Section Heading', type: 'text', placeholder: 'Find Us' },
    { key: 'contact.address', label: 'Business Address', type: 'textarea', placeholder: '123 New Rd\nLondon' },
    { key: 'contact.email', label: 'Business Email', type: 'text', placeholder: 'solvikings23@gmail.com' },
    { key: 'contact.cta', label: 'Contact CTA Button Text', type: 'text', placeholder: 'Call to Order' },
    { key: 'footer.logo', label: 'Footer Logo Text', type: 'text', placeholder: '🌅 Sunrise Bakery Yard Style' },
    { key: 'footer.tagline', label: 'Footer Tagline', type: 'text', placeholder: 'Fresh Jamaican Baked Goods · London' }
  ]
};

if (typeof window !== 'undefined') {
  window.SITE_CONFIG = SITE_CONFIG;
  window.SITE_KEY = SITE_CONFIG.SITE_KEY;
  window.SUPABASE_URL = SITE_CONFIG.SUPABASE_URL;
  window.SUPABASE_ANON_KEY = SITE_CONFIG.SUPABASE_ANON_KEY;

  document.addEventListener('DOMContentLoaded', () => {
    const targets = document.querySelectorAll('.product-card, .stat-block, .contact-card, .about-inner, #products .section-inner > *');
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
      }, { threshold: 0.12 });
      targets.forEach(el => { el.classList.add('fade-up'); io.observe(el); });
    } else {
      targets.forEach(el => el.classList.add('visible'));
    }
  });
}