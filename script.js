/* DAJAJ Pizza — frontend logic */
const WA = '923457109674';
const SIZES = ['Small', 'Medium', 'Large'];

/* ===== EDITABLE SAMPLE DATA: replace names, descriptions and prices with the real DAJAJ menu ===== */
const P = (id, name, desc, p) => ({ id, cat: 'Special Pizza', name, desc, prices: p, art: 'pizza' });
const PIZZAS = [
  P('p1', 'Chicken Tikka Pizza', 'Spiced tikka chicken, onion, green pepper and cheese.', [600, 1100, 1600]),
  P('p2', 'Fajita Pizza', 'Chicken fajita strips, capsicum, olives and mozzarella.', [650, 1150, 1650]),
  P('p3', 'Malai Boti Pizza', 'Creamy malai boti topping on a cheesy base.', [700, 1200, 1700]),
  P('p4', 'Pepperoni Pizza', 'Classic pepperoni slices with melted cheese.', [700, 1250, 1750]),
  P('p5', 'Cheese Lover Pizza', 'A generous layer of stretchy cheese.', [550, 1000, 1500]),
  P('p6', 'Special DAJAJ Pizza', 'The house special. Edit this description.', [750, 1300, 1850])
];
const EXTRA = [
  { id: 'm1', cat: 'Pizza', name: 'Margherita Pizza', desc: 'Tomato sauce, mozzarella, basil.', prices: [500, 950, 1400], art: 'pizza' },
  { id: 'm2', cat: 'Pizza', name: 'Veggie Pizza', desc: 'Mushrooms, olives, onion and peppers.', prices: [500, 950, 1400], art: 'pizza' },
  { id: 'b1', cat: 'Burgers', name: 'Zinger Burger', desc: 'Crispy chicken fillet, lettuce, sauce.', price: 350, art: 'burger' },
  { id: 'b2', cat: 'Burgers', name: 'Loaded Beef Burger', desc: 'Beef patty, cheese and house sauce.', price: 450, art: 'burger' },
  { id: 's1', cat: 'Sandwiches', name: 'Club Sandwich', desc: 'Grilled chicken, egg and veggies.', price: 300, art: 'burger' },
  { id: 'f1', cat: 'Fries', name: 'Crispy Fries', desc: 'Golden and salted.', price: 150, art: 'fries' },
  { id: 'f2', cat: 'Fries', name: 'Loaded Fries', desc: 'Fries with cheese and sauce.', price: 300, art: 'fries' }
];
const DEALS = [
  { id: 'c1', cat: 'Deals & Combos', name: 'Pizza + Fries Combo', desc: 'A small pizza with a portion of crispy fries.', price: 700, art: 'pizza' },
  { id: 'c2', cat: 'Deals & Combos', name: 'Family Pizza Deal', desc: 'Large pizza and fries for sharing.', price: 2200, art: 'pizza' },
  { id: 'c3', cat: 'Deals & Combos', name: 'Burger + Fries Deal', desc: 'A burger with a portion of fries.', price: 450, art: 'burger' },
  { id: 'c4', cat: 'Deals & Combos', name: 'Two-Pizza Combo', desc: 'Two pizzas to share with family or friends.', price: 1400, art: 'pizza' }
];
const MENU = [...PIZZAS, ...EXTRA, ...DEALS];
const REVIEWS = [['Placeholder Customer A', 'Placeholder review: replace with a real customer review.'], ['Placeholder Customer B', 'Placeholder review: replace with a real customer review.'], ['Placeholder Customer C', 'Placeholder review: replace with a real customer review.']];
const WHY = [['fa-pizza-slice', 'Delicious Food', 'Pizza, burgers, sandwiches and fries.'], ['fa-fire-burner', 'Freshly Prepared Orders', 'Made when you order.'], ['fa-utensils', 'Variety of Food Options', 'Something for every craving.'], ['fa-face-smile', 'Friendly Customer Service', 'A warm welcome every visit.'], ['fa-location-dot', 'Convenient Location', 'Darya Khan Road, opposite UBL Bank.'], ['fa-wallet', 'Great Value', 'Prices from PKR 1 to 1,000 per person.']];
const STEPS = [['fa-book-open', 'Explore Our Menu'], ['fa-heart', 'Choose Your Favourite Food'], ['fa-phone-volume', 'Contact Us on WhatsApp or Phone'], ['fa-circle-check', 'Confirm Your Order']];
const FAQ = [
  ['How can I place an order?', 'Add items to the cart and press Checkout. Your order opens in WhatsApp for you to send. You can also call 0345 7109674.'],
  ['What payment methods are accepted?', 'Cash only. We do not accept cards, online or bank payments.'],
  ['Where is DAJAJ located?', 'Darya Khan Road, Opposite UBL Bank, Chah Chimni, Bhakkar, 30000.'],
  ['How can I contact the restaurant?', 'Call or WhatsApp 0345 7109674, or message us on Facebook.'],
  ['What food categories are available?', 'Pizza, special pizza, burgers, sandwiches, fries and combo deals.'],
  ['How can I check menu prices?', 'Prices shown on this site are samples. Ask the restaurant on WhatsApp or phone for current prices.'],
  ['What are the restaurant opening hours?', 'Listed as open until 11:30 PM. Please confirm daily hours by phone.']
];
const GAL = [
  ['DAJAJ Pizza Special', 'pizza', 0],
  ['Fresh Baked Pizza', 'pizza', 1],
  ['Pepperoni Pizza', 'pizza', 2],
  ['Gourmet Burger', 'burger', 3],
  ['Burger and Fries', 'burger', 4],
  ['Crispy Fries', 'fries', 0],
  ['Fresh Club Sandwich', 'sandwich', 2],
  ['Fresh Food Preparation', 'prep', 1]
];

/* ===== Real photos live in assets/images (see README list in the reply) ===== */
const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
const img = (f, alt = '') => `<img src="assets/images/${f}" alt="${alt}" loading="lazy" onerror="this.outerHTML='<div class=ph>Add photo:<br>assets/images/${f}</div>'">`;
const BG = ['#7a1313', '#a33d0a', '#3a2214', '#8f1d1d', '#5c3b1e'];
const fmt = n => 'PKR ' + n.toLocaleString('en-PK');

/* ===== Card rendering ===== */
function card(it, col = 'col-sm-6 col-lg-4') {
  const sized = !!it.prices, bg = it.c ? '#2a1a12' : BG[it.id.length * it.id.charCodeAt(1) % 5];
  return `<div class="${col} item" data-cat="${it.cat}"><article class="food" data-id="${it.id}" data-size="1" data-q="1">
  <div class="im" style="background:${bg}">${img(it.id + '.jpg', it.name)}</div>
  <div class="bd"><h4>${it.name}</h4><p>${it.desc}</p>
  ${sized ? `<div class="sizes">${SIZES.map((s, k) => `<button data-s="${k}" class="${k == 1 ? 'on' : ''}">${s}</button>`).join('')}</div>` : ''}
  <div class="pr"><span class="pv">${fmt(sized ? it.prices[1] : it.price)}</span> <small>sample price</small></div>
  <div class="row2"><div class="qty"><button data-a="-" aria-label="Less">−</button><span>1</span><button data-a="+" aria-label="More">+</button></div>
  <button class="btn-d sm" data-add>Add to Cart</button></div></div></article></div>`;
}
const find = id => MENU.find(m => m.id === id);
$('#menuGrid').innerHTML = MENU.map(m => card(m)).join('');
$('#pizzaGrid').innerHTML = PIZZAS.map(p => card(p)).join('');
$('#dealGrid').innerHTML = DEALS.map(p => card(p, 'col-sm-6 col-lg-3')).join('');
/* the menu grid holds every item; showcase grids reuse the same cards */

function filters(box, cats, cb) {
  box.innerHTML = cats.map((c, i) => `<button class="${i ? '' : 'on'}">${c}</button>`).join('');
  box.onclick = e => { const b = e.target.closest('button'); if (!b) return; $$('button', box).forEach(x => x.classList.remove('on')); b.classList.add('on'); cb(b.textContent) };
}
filters($('#filters'), ['All Items', 'Pizza', 'Special Pizza', 'Burgers', 'Sandwiches', 'Fries', 'Deals & Combos'], c => {
  const all = $$('#menuGrid .item'), keep = all.filter(x => c === 'All Items' || x.dataset.cat === c);
  gsap.to(all, { opacity: 0, scale: .9, duration: .2, onComplete() {
    all.forEach(x => x.style.display = keep.includes(x) ? '' : 'none');
    gsap.fromTo(keep, { opacity: 0, y: 24, scale: .95 }, { opacity: 1, y: 0, scale: 1, stagger: .05, duration: .4 });
  } });
});

/* card interactions (size, quantity, add) */
document.addEventListener('click', e => {
  const art_ = e.target.closest('.food'); if (!art_) return;
  const it = find(art_.dataset.id), s = e.target.closest('[data-s]'), a = e.target.closest('[data-a]');
  if (s) { art_.dataset.size = s.dataset.s; $$('[data-s]', art_).forEach(b => b.classList.toggle('on', b === s)); $('.pv', art_).textContent = fmt(it.prices[s.dataset.s]); }
  if (a) { const q = Math.max(1, +art_.dataset.q + (a.dataset.a === '+' ? 1 : -1)); art_.dataset.q = q; $('.qty span', art_).textContent = q; }
  if (e.target.closest('[data-add]')) { addCart(it, +art_.dataset.size, +art_.dataset.q); toast(it.name + ' added'); }
});

/* ===== Cart ===== */
let cart = [];
try { cart = JSON.parse(localStorage.getItem('dajajCart') || '[]').filter(l => find(l.id)); } catch (e) { }
const unit = l => { const it = find(l.id); return it.prices ? it.prices[l.size] : it.price };
function addCart(it, size, q) { const sz = it.prices ? size : null, l = cart.find(x => x.id === it.id && x.size === sz); l ? l.q += q : cart.push({ id: it.id, size: sz, q }); renderCart(); }
function renderCart() {
  const box = $('#cItems'); let tot = 0, n = 0;
  box.innerHTML = cart.length ? cart.map((l, i) => { const it = find(l.id), u = unit(l); tot += u * l.q; n += l.q;
    return `<div class="ci"><div><b>${it.name}</b><br><small>${l.size !== null ? SIZES[l.size] + ' · ' : ''}${fmt(u)}</small>
    <div class="qty mt-1"><button data-c="${i}" data-d="-1">−</button><span>${l.q}</span><button data-c="${i}" data-d="1">+</button></div></div>
    <div class="text-end"><b>${fmt(u * l.q)}</b><br><button class="rm" data-r="${i}">Remove</button></div></div>` }).join('') : '<p class="text-center mt-5 opacity-75">Your cart is empty. Add something tasty from the menu.</p>';
  $('#cTot').textContent = fmt(tot); $('#cartCount').textContent = n;
  try { localStorage.setItem('dajajCart', JSON.stringify(cart)); } catch (e) { }
}
$('#cItems').addEventListener('click', e => {
  const d = e.target.closest('[data-d]'), r = e.target.closest('[data-r]');
  if (d) { const l = cart[d.dataset.c]; l.q += +d.dataset.d; if (l.q < 1) cart.splice(d.dataset.c, 1); }
  if (r) cart.splice(r.dataset.r, 1); renderCart();
});
const cartOpen = o => { $('#cart').classList.toggle('on', o); $('#shade').classList.toggle('on', o); };
$$('[data-cart-open]').forEach(b => b.onclick = () => cartOpen(true));
$('#cClose').onclick = $('#shade').onclick = () => cartOpen(false);
$('#clear').onclick = () => { cart = []; renderCart(); };
$('#checkout').onclick = () => {
  if (!cart.length) return toast('Your cart is empty');
  let tot = 0, m = 'Hello DAJAJ Pizza, I would like to place an order:\n\n';
  cart.forEach((l, i) => { const it = find(l.id), u = unit(l); tot += u * l.q; m += `${i + 1}. ${it.name}${l.size !== null ? ' (' + SIZES[l.size] + ')' : ''} x ${l.q} = ${fmt(u * l.q)}\n`; });
  m += `\nSubtotal: ${fmt(tot)}\nTotal: ${fmt(tot)}\nPayment: CASH ONLY\n\nPlease confirm availability, price and delivery or pickup. Thank you.`;
  window.open(`https://wa.me/${WA}?text=${encodeURIComponent(m)}`, '_blank');
};
function toast(t) { const el = $('#toast'); el.textContent = t; el.classList.add('on'); clearTimeout(toast.t); toast.t = setTimeout(() => el.classList.remove('on'), 1800); }

/* ===== Other sections ===== */
$('#whyGrid').innerHTML = WHY.map(w => `<div class="col-sm-6 col-lg-4 rv"><div class="why"><i class="fa-solid ${w[0]}"></i><h4>${w[1]}</h4><p>${w[2]}</p></div></div>`).join('');
$('#steps').innerHTML = STEPS.map((s, i) => `<div class="st"><div class="ic"><i class="fa-solid ${s[0]}"></i></div><b>0${i + 1}</b><h5>${s[1]}</h5></div>`).join('');
$('#revWrap').innerHTML = REVIEWS.map(r => `<div class="swiper-slide"><div class="rev"><div class="av"><i class="fa-solid fa-user"></i></div><div class="stars">${'<i class="fa-solid fa-star"></i>'.repeat(5)}</div><p>${r[1]}</p><b>${r[0]}</b></div></div>`).join('');
new Swiper('#revSwiper', { loop: true, autoplay: { delay: 4500 }, pagination: { el: '.swiper-pagination', clickable: true }, speed: 700 });
$('#faqList').innerHTML = FAQ.map(f => `<div class="fq"><button>${f[0]}<i class="fa-solid fa-plus"></i></button><div>${f[1]}</div></div>`).join('');
$('#faqList').onclick = e => { const q = e.target.closest('.fq'); if (!q) return; $$('.fq').forEach(x => { const on = x === q && !x.classList.contains('on'); x.classList.toggle('on', on); x.lastElementChild.style.maxHeight = on ? x.lastElementChild.scrollHeight + 20 + 'px' : 0 }) };
$$('[data-art]').forEach((el, i) => el.innerHTML = img('about-' + (i + 1) + '.jpg', 'DAJAJ food'));

const gl = { All: 'All', pizza: 'Pizza', burger: 'Burgers', fries: 'Fries', sandwich: 'Sandwiches', shop: 'Interior', prep: 'Preparation' };
const gKeys = Object.keys(gl);
$('#gFilters').innerHTML = gKeys.map((k, i) => `<button data-k="${k}" class="${i ? '' : 'on'}">${gl[k]}</button>`).join('');
$('#gFilters').onclick = e => { const b = e.target.closest('button'); if (!b) return; $$('#gFilters button').forEach(x => x.classList.toggle('on', x === b)); $$('.g').forEach(g => g.style.display = b.dataset.k === 'All' || g.dataset.t === b.dataset.k ? '' : 'none'); };
$('#gGrid').innerHTML = GAL.map(g => `<figure class="g m-0 mb-3" data-t="${g[1]}" style="background:${BG[g[2] % 5]};"><div>${img('gallery-' + (GAL.indexOf(g) + 1) + '.jpg', g[0])}</div><span>${g[0]}</span></figure>`).join('');
$('#gGrid').onclick = e => { const g = e.target.closest('.g'); if (!g) return; $('#lbIn').innerHTML = `<div style="background:${g.style.background};border-radius:20px;padding:20px">${$('img,.ph', g).outerHTML}</div><p class="text-center mt-2">${$('span', g).textContent}</p>`; $('#lb').classList.add('on'); };
$('#lb').onclick = () => $('#lb').classList.remove('on');
document.addEventListener('keydown', e => { if (e.key === 'Escape') { $('#lb').classList.remove('on'); cartOpen(false); } });

$('#cform').onsubmit = e => { e.preventDefault(); const m = `Hello DAJAJ, my name is ${$('#cn').value} (${$('#cm').value}).\n${$('#cx').value}`; window.open(`https://wa.me/${WA}?text=${encodeURIComponent(m)}`, '_blank'); };
$('#yr').textContent = new Date().getFullYear();

/* ===== Nav ===== */
const nav = $('#nav'), links = $('#links'), burger = $('#burger');
addEventListener('scroll', () => nav.classList.toggle('solid', scrollY > 60), { passive: true });
burger.onclick = () => { burger.classList.toggle('x'); links.classList.toggle('open'); };
$$('#links a').forEach(a => a.onclick = () => { burger.classList.remove('x'); links.classList.remove('open'); });
const spy = new IntersectionObserver(es => es.forEach(en => en.isIntersecting && $$('#links a').forEach(a => a.classList.toggle('on', a.getAttribute('href') === '#' + en.target.id))), { rootMargin: '-45% 0px -50% 0px' });
$$('section[id],header[id]').forEach(s => spy.observe(s));

/* ===== Animation (GSAP + ScrollTrigger) ===== */
renderCart();
gsap.registerPlugin(ScrollTrigger);
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
$$('.split').forEach(h => h.innerHTML = h.innerHTML.split('<br>').map(l => l.split(' ').map(w => `<span class="w"><span>${w}</span></span>`).join(' ')).join('<br>'));
gsap.to('#loadPizza', { rotation: 360, repeat: -1, ease: 'none', duration: 1.4, transformOrigin: '50% 50%' });
function intro() {
  gsap.to('#loader', { opacity: 0, duration: .5, onComplete: () => $('#loader').remove() });
  if (reduce) return;
  gsap.from('.split .w>span', { yPercent: 110, stagger: .08, duration: .9, ease: 'power4.out', delay: .2 });
  gsap.from('.hero .badge-pill,.lead-t,.hero .cash', { y: 24, opacity: 0, stagger: .12, delay: .5, duration: .7 });
  $$('.fl').forEach((f, i) => gsap.to(f, { y: -22, rotation: 20 * (i % 2 ? 1 : -1), repeat: -1, yoyo: true, duration: 2 + i * .4, ease: 'sine.inOut' }));
  $$('.rv,.steps .st').forEach(el => gsap.from(el, { y: 50, opacity: 0, duration: .8, scrollTrigger: { trigger: el, start: 'top 88%', once: true } }));
  ['#menuGrid', '#pizzaGrid', '#dealGrid'].forEach(g => ScrollTrigger.batch(g + ' .food', { start: 'top 90%', once: true, onEnter: b => gsap.from(b, { y: 60, opacity: 0, stagger: .1, duration: .7 }) }));
  gsap.from('.collage>div', { scale: .8, opacity: 0, stagger: .2, duration: .9, scrollTrigger: { trigger: '.collage', start: 'top 80%' } });
  gsap.to('.c2', { y: -40, scrollTrigger: { trigger: '.collage', scrub: true } });
  $$('[data-n]').forEach(el => { const o = { v: 0 }, n = +el.dataset.n, d = +el.dataset.d || 0; gsap.to(o, { v: n, duration: 2, scrollTrigger: { trigger: el, start: 'top 90%', once: true }, onUpdate: () => el.textContent = (el.dataset.pre || '') + o.v.toFixed(d) }); });
}
addEventListener('load', () => setTimeout(intro, 600));
