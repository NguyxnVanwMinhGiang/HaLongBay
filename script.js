/* ===== DỮ LIỆU ===== */
const U = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=80`;
const CAT = { nature: 'Thiên nhiên', culture: 'Văn hóa', resort: 'Nghỉ dưỡng' };

const SPOTS = [
  { id: 's1', cat: 'nature', name: 'Vịnh Hạ Long', img: U('photo-1528127269322-539801943592'), desc: 'Di sản thế giới với gần 2.000 đảo đá vôi, lý tưởng để đi du thuyền ngắm hoàng hôn.', long: 'Du thuyền 4–6 giờ qua các đảo Đầu Gỗ, Ti Tốp và Đỉnh Hương. Nên đi từ tháng 9 đến tháng 4 khi trời ít mưa.' },
  { id: 's2', cat: 'nature', name: 'Hang Sửng Sốt', img: U('photo-1559592413-7cec4d0cae2b'), desc: 'Hang động rộng và đẹp bậc nhất vịnh, với ba khoang đầy nhũ đá.', long: 'Cách bến tàu Bãi Cháy khoảng 30 phút đi thuyền. Đường đi trong hang dài khoảng 1 km, có đèn chiếu sáng.' },
  { id: 's3', cat: 'culture', name: 'Làng chài Cửa Vạn', img: U('photo-1583417319070-4a69db38a482'), desc: 'Làng nổi của ngư dân, nơi bạn chèo thuyền nan và ghé nhà dân.', long: 'Nên đi buổi sáng sớm khi cả làng bắt đầu ra khơi. Mang theo tiền mặt nhỏ để mua đồ lưu niệm.' },
  { id: 's4', cat: 'nature', name: 'Đảo Ti Tốp', img: U('photo-1573270689103-d7a4e42b609a'), desc: 'Bãi tắm cát trắng và đỉnh núi nhìn xuống cả vịnh.', long: 'Leo 400 bậc thang để lên đài quan sát. Buổi chiều là lúc đẹp nhất để chụp ảnh.' },
  { id: 's5', cat: 'culture', name: 'Chùa Yên Tử', img: U('photo-1528181304800-259b08848526'), desc: 'Trung tâm Thiền phái Trúc Lâm, hành trình hành hương nổi tiếng.', long: 'Cách Hạ Long khoảng 60 km. Có cáp treo, bạn mất khoảng nửa ngày để tham quan.' },
  { id: 's6', cat: 'resort', name: 'Bãi Cháy và Sun World', img: U('photo-1540541338287-41700207dee6'), desc: 'Khu vui chơi, cáp treo Nữ Hoàng và bãi biển sôi động về đêm.', long: 'Cáp treo vượt vịnh ngắm toàn cảnh thành phố. Nên đi vào cuối chiều để xem hoàng hôn và đèn thành phố.' }
];

const FOODS = [
  { id: 'f1', name: 'Chả mực Hạ Long', img: U('photo-1559339352-11d035aa65de'), price: '350.000–450.000đ/kg', where: 'Chợ Hạ Long 1', desc: 'Mực giã tay, chiên giòn, thơm đậm vị biển.' },
  { id: 'f2', name: 'Sá sùng', img: U('photo-1565299624946-b28f40a0ae38'), price: '150.000đ/phần', where: 'Phố ẩm thực Vân Đồn', desc: 'Món xào hoặc nấu canh, vị ngọt bùi lạ miệng.' },
  { id: 'f3', name: 'Bánh gai Hạ Long', img: U('photo-1504674900247-0877df9cc836'), price: '60.000đ/hộp', where: 'Cửa hàng đặc sản Bãi Cháy', desc: 'Bánh dẻo thơm lá gai, nhân đậu xanh.' },
  { id: 'f4', name: 'Ghẹ hấp bia', img: U('photo-1551218808-94e220e084d2'), price: '400.000đ/kg', where: 'Nhà hàng Hải Sản Cái Dăm', desc: 'Ghẹ tươi hấp cùng bia, thịt chắc và ngọt.' },
  { id: 'f5', name: 'Bê chao', img: U('photo-1555939594-58d7cb561ad1'), price: '120.000đ/phần', where: 'Quán Bê chao Bãi Cháy', desc: 'Thịt bê tẩm gia vị, chao mềm, ăn kèm rau sống.' },
  { id: 'f6', name: 'Rượu cần Quảng Ninh', img: U('photo-1514361892635-6b07e31e75f9'), price: '90.000đ/bình', where: 'Chợ phiên Tiên Yên', desc: 'Rượu men lá của đồng bào dân tộc vùng cao.' }
];

const STAYS = [
  { id: 'h1', cat: 'resort', name: 'Hạ Long Bay Resort', img: U('photo-1566073771259-6a8506099945'), stars: 5, price: 3200000, amen: ['Hồ bơi', 'Ăn sáng', 'Gần biển'], desc: 'Resort ôm bãi biển riêng, phòng nhìn thẳng ra vịnh.' },
  { id: 'h2', cat: 'resort', name: 'Du thuyền Lăng Hà Cruise', img: U('photo-1507525428034-b723cf961d3e'), stars: 5, price: 4500000, amen: ['Ăn tối', 'Chèo kayak', 'Spa'], desc: 'Ngủ đêm trên vịnh, bao gồm bữa tối và lớp nấu ăn.' },
  { id: 'h3', cat: 'culture', name: 'Homestay Ngư Gia', img: U('photo-1520250497591-112f2f40a3f4'), stars: 4, price: 850000, amen: ['Ăn sáng', 'View vịnh', 'Xe đạp'], desc: 'Nhà gỗ nhỏ nhìn ra làng chài, chủ nhà nấu hải sản tại chỗ.' },
  { id: 'h4', cat: 'nature', name: 'Khách sạn Marina Center', img: U('photo-1551882547-ff40c63fe5fa'), stars: 4, price: 1300000, amen: ['Ăn sáng', 'Gần trung tâm', 'Wi-Fi'], desc: 'Vị trí thuận tiện đi bộ tới bến tàu và chợ đêm.' }
];

const PLANS = {
  2: [
    { t: 'Ngày 1: Vịnh Hạ Long', s: [['Sáng', 'Lên du thuyền, ngắm cảnh và ăn trưa nhẹ'], ['Trưa', 'Chèo kayak ở Cửa Vạn'], ['Chiều', 'Tham quan Hang Sửng Sốt'], ['Tối', 'Ăn hải sản, nghỉ đêm trên thuyền']] },
    { t: 'Ngày 2: Bãi Cháy', s: [['Sáng', 'Tập thái cực quyền trên boong, ăn sáng'], ['Trưa', 'Về bờ, ăn chả mực'], ['Chiều', 'Cáp treo Nữ Hoàng'], ['Tối', 'Về lại, mua quà bánh gai']] }
  ],
  3: [
    { t: 'Ngày 1: Đến Hạ Long', s: [['Sáng', 'Nhận phòng, ăn sáng'], ['Trưa', 'Ăn bê chao'], ['Chiều', 'Dạo Bãi Cháy và Sun World'], ['Tối', 'Chợ đêm Hạ Long']] },
    { t: 'Ngày 2: Du thuyền', s: [['Sáng', 'Lên du thuyền đi các đảo'], ['Trưa', 'Bữa trưa hải sản'], ['Chiều', 'Đảo Ti Tốp, tắm biển'], ['Tối', 'Câu mực đêm']] },
    { t: 'Ngày 3: Văn hóa', s: [['Sáng', 'Chèo thuyền làng chài Cửa Vạn'], ['Trưa', 'Ăn sá sùng'], ['Chiều', 'Mua quà đặc sản'], ['Tối', 'Về lại']] }
  ],
  4: [
    { t: 'Ngày 1: Đến Hạ Long', s: [['Sáng', 'Nhận phòng, nghỉ ngơi'], ['Trưa', 'Ghẹ hấp bia'], ['Chiều', 'Bãi Cháy'], ['Tối', 'Chợ đêm']] },
    { t: 'Ngày 2: Vịnh Hạ Long', s: [['Sáng', 'Du thuyền ngắm vịnh'], ['Trưa', 'Ăn trên thuyền'], ['Chiều', 'Hang Sửng Sốt'], ['Tối', 'Ngủ đêm trên vịnh']] },
    { t: 'Ngày 3: Cửa Vạn và Ti Tốp', s: [['Sáng', 'Kayak Cửa Vạn'], ['Trưa', 'Bữa trưa làng chài'], ['Chiều', 'Leo đảo Ti Tốp'], ['Tối', 'Về đất liền']] },
    { t: 'Ngày 4: Yên Tử', s: [['Sáng', 'Đi Yên Tử bằng cáp treo'], ['Trưa', 'Cơm chay chùa'], ['Chiều', 'Tham quan chùa Đồng'], ['Tối', 'Về lại, kết thúc chuyến đi']] }
  ]
};

/* ===== TIỆN ÍCH ===== */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const money = (n) => n.toLocaleString('vi-VN') + 'đ';
/* Ảnh: thử images/<id>.jpg trước; nếu thiếu thì dùng link Unsplash; nếu vẫn lỗi thì dùng ảnh SVG dự phòng (FB) */
const imgTag = (src, alt, lazy = true, id) => id
  ? `<img ${lazy ? 'loading="lazy"' : ''} src="images/${id}.jpg" alt="${alt}" onerror="this.onerror=function(){this.onerror=null;this.src=FB};this.src='${src}'">`
  : `<img ${lazy ? 'loading="lazy"' : ''} src="${src}" alt="${alt}" onerror="this.onerror=null;this.src=FB">`;
const HEART = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21s-8-5.2-8-11a4.5 4.5 0 018-2.8A4.5 4.5 0 0120 10c0 5.8-8 11-8 11z"/></svg>';

/* ===== WISHLIST (localStorage) ===== */
let wish = [];
try { wish = JSON.parse(localStorage.getItem('hl_wish')) || []; } catch (e) { wish = []; }
function saveWish() {
  try { localStorage.setItem('hl_wish', JSON.stringify(wish)); } catch (e) { /* bỏ qua nếu bị chặn */ }
  $('#wishCount').textContent = wish.length;
}
function toggleWish(id, btn) {
  const i = wish.indexOf(id);
  i >= 0 ? wish.splice(i, 1) : wish.push(id);
  btn.classList.toggle('on', i < 0);
  saveWish();
  toast(i < 0 ? 'Đã lưu vào yêu thích' : 'Đã bỏ khỏi yêu thích');
}

/* ===== RENDER CARD ===== */
const heartBtn = (id) => `<button class="heart ${wish.includes(id) ? 'on' : ''}" data-wish="${id}" aria-label="Yêu thích">${HEART}</button>`;

function renderSpots() {
  $('#spots').innerHTML = SPOTS.map((s) => `
    <article class="card reveal" data-cat="${s.cat}">
      <div class="imgbox">${imgTag(s.img, s.name, true, s.id)}<span class="tag">${CAT[s.cat]}</span>${heartBtn(s.id)}</div>
      <div class="cbody"><h3>${s.name}</h3><p>${s.desc}</p><button class="btn btn-ghost" data-spot="${s.id}">Xem chi tiết</button></div>
    </article>`).join('');
}
function renderFoods() {
  $('#foods').innerHTML = FOODS.map((f) => `
    <article class="card reveal">
      <div class="imgbox">${imgTag(f.img, f.name, true, f.id)}</div>
      <div class="cbody"><h3>${f.name}</h3><p>${f.desc}</p>
        <div class="meta"><span class="price">${f.price}</span></div><small>Gợi ý: ${f.where}</small></div>
    </article>`).join('');
}
function renderStays() {
  $('#stays').innerHTML = STAYS.map((h) => `
    <article class="card reveal" data-cat="${h.cat}">
      <div class="imgbox">${imgTag(h.img, h.name, true, h.id)}${heartBtn(h.id)}</div>
      <div class="cbody"><div class="meta"><h3>${h.name}</h3><span class="stars">${'★'.repeat(h.stars)}</span></div>
        <p>${h.desc}</p><div class="amen">${h.amen.map((a) => `<span>${a}</span>`).join('')}</div>
        <div class="meta"><span class="price">${money(h.price)}/đêm</span><button class="btn btn-primary" data-stay="${h.id}">Đặt phòng tư vấn</button></div></div>
    </article>`).join('');
}

/* ===== BỘ LỌC ===== */
function applyFilter(wrapId, f) {
  $$('.card', $('#' + wrapId)).forEach((c) => c.classList.toggle('hide', f !== 'all' && c.dataset.cat !== f));
}
$$('.filters').forEach((box) => box.addEventListener('click', (e) => {
  const b = e.target.closest('.chip'); if (!b) return;
  $$('.chip', box).forEach((c) => c.classList.toggle('active', c === b));
  applyFilter(box.dataset.target, b.dataset.f);
}));

/* ===== LỊCH TRÌNH (tabs) ===== */
function renderPlan(d) {
  $('#plan').innerHTML = PLANS[d].map((day) => `
    <div class="day"><h3>${day.t}</h3>${day.s.map(([k, v]) => `<div class="slot"><b>${k}</b><span>${v}</span></div>`).join('')}</div>`).join('');
}
$('#tabs').addEventListener('click', (e) => {
  const b = e.target.closest('.tab'); if (!b) return;
  $$('.tab').forEach((t) => t.classList.toggle('active', t === b));
  renderPlan(b.dataset.d);
});

/* ===== MODAL ===== */
const modal = $('#modal');
const mapSVG = `<svg viewBox="0 0 600 180" width="100%" role="img" aria-label="Bản đồ mô phỏng"><rect width="600" height="180" fill="#bfe3dc"/><path d="M0 130c60-30 120 20 190-10s130-40 200-10 130 30 210 0v70H0z" fill="#8cc9bd"/><g fill="#0f6b5c"><path d="M90 110l25-45 25 45zM300 100l30-60 30 60zM470 115l22-38 22 38z"/></g><circle cx="330" cy="62" r="9" fill="#e8445a"/><circle cx="330" cy="62" r="3" fill="#fff"/></svg>`;

function bookingForm(label) {
  const today = new Date().toISOString().split('T')[0];
  return `<form class="book" id="bookForm" novalidate>
    <label class="field">Họ và tên<input name="name" autocomplete="name"><span class="err-msg"></span></label>
    <label class="field">Số điện thoại<input name="phone" inputmode="tel" autocomplete="tel" placeholder="0901234567"><span class="err-msg"></span></label>
    <label class="field">Ngày đi<input name="date" type="date" min="${today}"><span class="err-msg"></span></label>
    <label class="field">Số khách<input name="guests" type="number" min="1" max="30" value="2"><span class="err-msg"></span></label>
    <button class="btn btn-primary full" style="grid-column:1/-1" type="submit">${label}</button></form>`;
}
function openModal(html) {
  $('#mBody').innerHTML = html; modal.hidden = false; document.body.style.overflow = 'hidden';
  $('#bookForm').addEventListener('submit', submitBooking);
}
function closeModal() { modal.hidden = true; document.body.style.overflow = ''; }

/* Validate: trả về lỗi theo từng trường */
function validate(f) {
  const err = {};
  if (f.name.value.trim().length < 2) err.name = 'Nhập họ tên từ 2 ký tự trở lên.';
  if (!/^(0|\+84)\d{9}$/.test(f.phone.value.replace(/\s/g, ''))) err.phone = 'Số điện thoại Việt Nam gồm 10 số, bắt đầu bằng 0.';
  if (!f.date.value || new Date(f.date.value) < new Date(new Date().toDateString())) err.date = 'Chọn ngày đi từ hôm nay trở đi.';
  const g = +f.guests.value; if (!Number.isInteger(g) || g < 1 || g > 30) err.guests = 'Số khách từ 1 đến 30.';
  return err;
}
function submitBooking(e) {
  e.preventDefault();
  const f = e.target, err = validate(f);
  ['name', 'phone', 'date', 'guests'].forEach((k) => {
    const wrap = f[k].parentElement; wrap.classList.toggle('err', !!err[k]); $('.err-msg', wrap).textContent = err[k] || '';
  });
  if (Object.keys(err).length) { const first = f.querySelector('.err input'); first && first.focus(); return; }
  f.insertAdjacentHTML('beforeend', `<p class="ok">Cảm ơn ${f.name.value.trim()}! Chúng tôi sẽ gọi số ${f.phone.value} trong vòng 24 giờ để tư vấn.</p>`);
  f.querySelector('button[type=submit]').disabled = true;
}
function showSpot(s) {
  openModal(`${imgTag(s.img, s.name, false, s.id).replace('<img', '<img class="m-img"')}
    <div class="m-content"><span class="tag" style="position:static;display:inline-block;margin-bottom:8px">${CAT[s.cat]}</span>
    <h3>${s.name}</h3><p>${s.desc} ${s.long}</p><div class="map">${mapSVG}</div>${bookingForm('Đặt tour tham quan')}</div>`);
}
function showStay(h) {
  openModal(`${imgTag(h.img, h.name, false, h.id).replace('<img', '<img class="m-img"')}
    <div class="m-content"><h3>${h.name} <span class="stars">${'★'.repeat(h.stars)}</span></h3>
    <p>${h.desc} Giá tham khảo ${money(h.price)}/đêm. Tiện ích: ${h.amen.join(', ')}.</p><div class="map">${mapSVG}</div>${bookingForm('Gửi yêu cầu đặt phòng')}</div>`);
}

/* ===== SỰ KIỆN CHUNG ===== */
document.addEventListener('click', (e) => {
  const w = e.target.closest('[data-wish]'); if (w) return toggleWish(w.dataset.wish, w);
  const sp = e.target.closest('[data-spot]'); if (sp) return showSpot(SPOTS.find((x) => x.id === sp.dataset.spot));
  const st = e.target.closest('[data-stay]'); if (st) return showStay(STAYS.find((x) => x.id === st.dataset.stay));
  if (e.target === modal || e.target.id === 'mClose') closeModal();
  if (e.target.closest('.nav a')) closeMenu();
});
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') { closeModal(); closeMenu(); } });

/* Toast */
let tt;
function toast(msg) { const t = $('#toast'); t.textContent = msg; t.classList.add('show'); clearTimeout(tt); tt = setTimeout(() => t.classList.remove('show'), 1800); }

/* Hamburger */
const burger = $('#burger'), nav = $('#nav');
function closeMenu() { nav.classList.remove('open'); burger.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); }
burger.addEventListener('click', () => { const o = nav.classList.toggle('open'); burger.classList.toggle('open', o); burger.setAttribute('aria-expanded', o); });

/* Dark mode (ghi nhớ lựa chọn) */
const root = document.documentElement;
try { const th = localStorage.getItem('hl_theme'); if (th) root.dataset.theme = th; } catch (e) {}
$('#themeBtn').addEventListener('click', () => {
  root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  try { localStorage.setItem('hl_theme', root.dataset.theme); } catch (e) {}
});

/* Header đổi nền khi cuộn */
const header = $('#header');
const onScroll = () => header.classList.toggle('solid', scrollY > 60);
addEventListener('scroll', onScroll, { passive: true }); onScroll();

/* Thanh tìm kiếm ở Hero: lọc điểm đến và chọn tab lịch trình */
$('#heroSearch').addEventListener('submit', (e) => {
  e.preventDefault();
  const cat = $('#heroCat').value, days = $('#heroDays').value;
  $$('.filters[data-target=spots] .chip').forEach((c) => c.classList.toggle('active', c.dataset.f === cat));
  applyFilter('spots', cat);
  $$('.tab').forEach((t) => t.classList.toggle('active', t.dataset.d === days));
  renderPlan(days);
  $('#diem-den').scrollIntoView({ behavior: 'smooth' });
});

/* Form nhận cẩm nang */
$('#newsForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const ok = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test($('#newsMail').value.trim());
  $('#newsMsg').textContent = ok ? 'Đã đăng ký. Cẩm nang sẽ gửi đến email của bạn.' : 'Email chưa hợp lệ, ví dụ: ban@email.com';
  if (ok) e.target.reset();
});

/* Scroll Reveal bằng IntersectionObserver */
const io = new IntersectionObserver((es) => es.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } }), { threshold: .12 });

/* ===== KHỞI TẠO ===== */
renderSpots(); renderFoods(); renderStays(); renderPlan(2); saveWish();
$$('.reveal').forEach((el) => io.observe(el));
