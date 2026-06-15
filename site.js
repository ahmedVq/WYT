/* ===========================================================
   WYT — site interactions
   =========================================================== */
(function(){
  'use strict';
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---- year ---- */
  var yEl = document.getElementById('year');
  if (yEl) yEl.textContent = new Date().getFullYear();

  /* ---- sticky nav ---- */
  var nav = document.getElementById('nav');
  function onScroll(){
    if (window.scrollY > 40) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive:true });

  /* ---- mobile menu ---- */
  var burger = document.getElementById('burger');
  var menu = document.getElementById('mobileMenu');
  function closeMenu(){ menu.classList.remove('open'); document.body.style.overflow=''; }
  if (burger){
    burger.addEventListener('click', function(){
      menu.classList.toggle('open');
      document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
    });
    menu.querySelectorAll('a').forEach(function(a){ a.addEventListener('click', closeMenu); });
  }

  /* ---- scroll reveals ---- */
  var reveals = document.querySelectorAll('.reveal');
  if (reduce || !('IntersectionObserver' in window)){
    reveals.forEach(function(r){ r.classList.add('in'); });
  } else {
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if (e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold:0.12, rootMargin:'0px 0px -8% 0px' });
    reveals.forEach(function(r){ io.observe(r); });
  }

  /* ---- animated counters ---- */
  var counters = document.querySelectorAll('[data-count]');
  function animateCount(el){
    var target = parseFloat(el.getAttribute('data-count'));
    var suffix = el.getAttribute('data-suffix') || '';
    if (reduce){ el.textContent = target + suffix; return; }
    var dur = 1500, start = null;
    function step(ts){
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      var val = Math.round(target * eased);
      el.textContent = val + (p < 1 ? '' : '') + '';
      // render with suffix as superscript-styled span
      el.innerHTML = val + '<span class="suf">' + suffix + '</span>';
      if (p < 1) requestAnimationFrame(step);
      else el.innerHTML = target + '<span class="suf">' + suffix + '</span>';
    }
    requestAnimationFrame(step);
  }
  if ('IntersectionObserver' in window){
    var cio = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if (e.isIntersecting){ animateCount(e.target); cio.unobserve(e.target); }
      });
    }, { threshold:0.5 });
    counters.forEach(function(c){ cio.observe(c); });
  } else {
    counters.forEach(animateCount);
  }

  /* ---- project filter handled in projects.js (cards are built there) ---- */

  /* ---- studio horizontal rail: drag + wheel-to-horizontal ---- */
  var rail = document.getElementById('studioRail');
  if (rail){
    var down = false, startX = 0, startLeft = 0, moved = false;
    rail.addEventListener('pointerdown', function(e){
      down = true; moved = false;
      startX = e.clientX; startLeft = rail.scrollLeft;
      rail.classList.add('dragging');
      try { rail.setPointerCapture(e.pointerId); } catch(err){}
    });
    rail.addEventListener('pointermove', function(e){
      if (!down) return;
      var dx = e.clientX - startX;
      if (Math.abs(dx) > 4) moved = true;
      rail.scrollLeft = startLeft - dx;
    });
    function railEnd(){ down = false; rail.classList.remove('dragging'); }
    rail.addEventListener('pointerup', railEnd);
    rail.addEventListener('pointercancel', railEnd);
    rail.addEventListener('pointerleave', function(){ if (down) railEnd(); });
    // vertical wheel scrolls the rail horizontally while the pointer is over it
    rail.addEventListener('wheel', function(e){
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)){
        rail.scrollLeft += e.deltaY;
        e.preventDefault();
      }
    }, { passive:false });
  }

  /* ---- testimonials rotator ---- */
  var quotes = [
    { q:'WYT delivered our North Coast summer house end to end — structure, stonework, pools and finishing — and handed it over ready to live in, on the date they promised.', b:'Private Client', s:'Almaza Bay Residence' },
    { q:'The finishing is the part most contractors rush. WYT slowed down where it mattered — the travertine, the shadow gaps, the lighting — and the detailing is faultless.', b:'Principal Architect', s:'Residential Project, New Giza' },
    { q:'They ran a complex commercial fit-out on a tight programme and kept it calm the whole way. We have already handed them our next project.', b:'Operations Director', s:'Hospitality Group' }
  ];
  var slidesEl = document.getElementById('testiSlides');
  var tPrev = document.getElementById('tPrev');
  var tNext = document.getElementById('tNext');
  var qi = 0;
  function renderQuote(i){
    var d = quotes[i];
    if (!slidesEl) return;
    var bq = slidesEl.querySelector('.testi-slide');
    if (!bq) return;
    bq.style.opacity = 0;
    setTimeout(function(){
      bq.innerHTML = '<p class="testi__q"><span class="mk">\u201C</span>' + d.q + '<span class="mk">\u201D</span></p>' +
        '<div class="testi__by"><span class="ln"></span><div><b>' + d.b + '</b><br><span>' + d.s + '</span></div></div>';
      bq.style.transition = 'opacity .5s ease';
      bq.style.opacity = 1;
    }, reduce ? 0 : 220);
  }
  if (tNext) tNext.addEventListener('click', function(){ qi = (qi+1) % quotes.length; renderQuote(qi); });
  if (tPrev) tPrev.addEventListener('click', function(){ qi = (qi-1+quotes.length) % quotes.length; renderQuote(qi); });

  /* ---- lead form ---- */
  var form = document.getElementById('leadForm');
  var note = document.getElementById('formNote');
  if (form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var data = new FormData(form);
      if (!data.get('name') || !data.get('email')){
        note.textContent = '[ Please add your name and email so we can reply. ]';
        note.style.color = '#e9c46a';
        return;
      }
      var btn = form.querySelector('.form__submit');
      btn.innerHTML = 'Thank you — message sent \u2713';
      btn.style.background = '#1f8a5b';
      btn.style.color = '#fff';
      note.innerHTML = '[ Received. A WYT project lead will be in touch within two business days. ]';
      note.style.color = '';
      form.querySelectorAll('input,select,textarea').forEach(function(f){ f.setAttribute('disabled',''); });
    });
  }
})();
