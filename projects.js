/* ===========================================================
   WYT — portfolio data + carousel + grid + detail overlay
   Real projects integrated from the studio archive.
   =========================================================== */
(function(){
  'use strict';
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function A(id,n){ return 'assets/portfolio/'+id+'/'+n+'.jpg'; }

  var PROJECTS = [
    {
      id:'pier88', name:'Pier 88', type:'Hospitality · Marina', cat:'hospitality',
      location:'El Gouna', year:'2024', sector:'Hospitality · F&B', scope:'Turnkey fit-out', featured:true,
      sub:'A floating restaurant and bar on the El Gouna marina, built out over the water.',
      overview:'A waterside restaurant and lounge on the marina — a steel-framed structure built over the water, finished in timber decking, glass and warm light.',
      challenge:'Building a large dining and bar venue out over the marina, on a steel structure, to a tight pre-season opening date.',
      solution:'A prefabricated steel frame, weather-sealed glazing and hard-wearing timber decking, with services run below deck and a full food-and-beverage fit-out above.',
      result:'A signature marina destination that opened on schedule and reads beautifully from both the boardwalk and the water.',
      cover:A('pier88','07'), gallery:['07','02','06','09','04','05'].map(function(n){return A('pier88',n);}),
      before:A('pier88','01'), after:A('pier88','07')
    },
    {
      id:'v166', name:'V-166 Summer House', type:'Residential · Summer House', cat:'residential',
      location:'Caesar Bay', year:'2022', sector:'Residential · Summer House', scope:'Turnkey construction', featured:true,
      sub:'A beachfront summer house in Caesar Bay, built as one continuous material world.',
      overview:'A sea-facing summer house on the North Coast — structure, natural stone, pools and interior delivered as one turnkey programme.',
      challenge:'Making the architecture, the pools and the interior read as a single calm, continuous environment facing the sea.',
      solution:'Full turnkey build with natural stone cladding and flooring, infinity and family pools, integrated lighting and a warm, pared-back interior.',
      result:'A seamless beachfront home where every threshold between inside, terrace and water is detailed to the millimetre.',
      cover:A('v166','02'), gallery:['02','07','01','05','03','08','09'].map(function(n){return A('v166',n);}),
      before:null, after:null
    },
    {
      id:'riva', name:'Riva Golf Summer House', type:'Residential · Summer House', cat:'residential',
      location:'Marassi', year:'2024', sector:'Residential · Summer House', scope:'Turnkey construction', featured:true,
      sub:'A travertine summer house in Marassi — soft curves and continuous stone.',
      overview:'A Marassi summer house finished almost entirely in travertine — floors, walls and a sculptural curved sofa — opening through a pavilion onto the pool.',
      challenge:'Carrying a single warm travertine through floors, walls and bespoke furniture without a visible joint out of place.',
      solution:'Continuous travertine cladding and flooring, a bespoke curved stone sofa, a linear slot water drain and a generous covered pavilion to the pool.',
      result:'A serene, monolithic house where the stonework reads as one continuous surface from inside to terrace.',
      cover:A('riva','03'), gallery:['03','04','06','05','01','07'].map(function(n){return A('riva',n);}),
      before:A('riva','08'), after:A('riva','03')
    },
    {
      id:'a40', name:'A-40 Summer House', type:'Residential · Summer House', cat:'residential',
      location:'Almaza Bay', year:'2023', sector:'Residential · Summer House', scope:'Turnkey construction', featured:true,
      sub:'A summer house in Almaza Bay where pool, terrace and interior dissolve into one another.',
      overview:'A North Coast summer house built around a sculptural pool and open-air living, finished in warm microcement, stone and integrated lighting.',
      challenge:'Delivering a seamless indoor–outdoor summer house — pool, deck, bar and living all reading as one material world — on a single-season programme.',
      solution:'Full turnkey build: structure, a sculptural pool, a Galala stone bar, G-board cladding with crisp shadow gaps and a warm, pared-back interior.',
      result:'A relaxed, exacting retreat handed over ready for the summer, where the line between inside and water all but disappears.',
      cover:A('a40','01'), gallery:['01','08','07','04','06','03'].map(function(n){return A('a40',n);}),
      before:A('a40','02'), after:A('a40','08')
    },
    {
      id:'r566', name:'R5-66 Residential House', type:'Residential · House', cat:'residential',
      location:'New Giza', year:'2021', sector:'Residential · House', scope:'Construction & finishing', featured:true,
      sub:'A New Giza family house with a floating travertine staircase at its heart.',
      overview:'A residential house in New Giza built around a cantilevered travertine staircase, with warm wood, stone and a dusk-lit garden and pool.',
      challenge:'Engineering a floating travertine staircase with hidden structure, and tying the interior to a lush, lit garden and pool.',
      solution:'Cantilevered stair construction, travertine and timber finishing, a feature media wall and a layered exterior lighting scheme.',
      result:'A calm family home with a quiet showpiece — a staircase that appears to float.',
      cover:A('r566','02'), gallery:['02','09','01','08','04','06'].map(function(n){return A('r566',n);}),
      before:A('r566','05'), after:A('r566','08')
    },
    {
      id:'museum', name:'Egyptian Museum', type:'Cultural · Heritage', cat:'cultural',
      location:'Tahrir Square', year:'2023', sector:'Cultural · Heritage', scope:'Fit-out & finishing', featured:true,
      sub:'Fit-out and finishing works at the Egyptian Museum in Tahrir Square.',
      overview:'Sensitive construction and finishing works within and around the historic Egyptian Museum — new retail and visitor spaces alongside careful restoration.',
      challenge:'Working with extreme care inside a heritage landmark, matching new interventions to a historic fabric while meeting visitor-grade durability.',
      solution:'New glazed pavilion entrances, a refined museum retail interior and conserved plaster and stonework, executed under strict heritage constraints.',
      result:'Contemporary, hard-wearing visitor spaces that sit quietly within one of the world\u2019s great museums.',
      cover:A('museum','04'), gallery:['04','03','06','08','07','01'].map(function(n){return A('museum',n);}),
      before:A('museum','02'), after:A('museum','06')
    },
    {
      id:'b34', name:'B-34 Summer House', type:'Residential · Summer House', cat:'residential',
      location:'Almaza Bay', year:'2024', sector:'Residential · Summer House', scope:'Turnkey construction', featured:false,
      sub:'A summer house built around a sculptural marble round pool and dramatic night lighting.',
      overview:'A North Coast house where a circular marble pool anchors the whole composition, finished with travertine interiors and a tuned lighting scheme.',
      challenge:'Engineering and finishing a perfectly circular marble pool, and a 20-metre-span pergola, as the signature gestures of the house.',
      solution:'Bespoke pool construction, a large-span pergola structure, travertine cladding and a layered lighting design that transforms the space after dark.',
      result:'A summer house with a true centrepiece — a marble round pool that glows through the evening.',
      cover:A('b34','02'), gallery:['02','06','07','08','05','03'].map(function(n){return A('b34',n);}),
      before:A('b34','01'), after:A('b34','08')
    },
    {
      id:'deka', name:'D\u00e9ka', type:'Hospitality · Restaurant', cat:'cultural',
      location:'Trivium Mall', year:'2022', sector:'Hospitality · Restaurant', scope:'Turnkey fit-out', featured:false,
      sub:'A Mediterranean restaurant in Trivium Mall — blue, terracotta and brass.',
      overview:'A Mediterranean-cuisine restaurant fit-out — arched forms, blue and terracotta plaster, brass and abundant planting.',
      challenge:'Translating a rich Mediterranean concept into a buildable, durable restaurant interior within a bare mall shell.',
      solution:'Sculpted arches, pigmented plaster, bespoke joinery, statement lighting and integrated greenery, delivered as a turnkey fit-out.',
      result:'A warm, transporting restaurant that stands apart from the standard mall unit.',
      cover:A('deka','05'), gallery:['05','06','09','08','07','04'].map(function(n){return A('deka',n);}),
      before:null, after:null
    },
    {
      id:'nest', name:'Nest', type:'Hospitality · Caf\u00e9', cat:'hospitality',
      location:'SODIC Strip', year:'2021', sector:'Hospitality · Caf\u00e9', scope:'Turnkey fit-out', featured:false,
      sub:'A biophilic all-day caf\u00e9 on the SODIC Strip, wrapped in greenery.',
      overview:'An all-day caf\u00e9 and bakery concept built around timber, rattan and cascading planting, both inside and at the storefront.',
      challenge:'Delivering a lush, biophilic interior that stays practical and serviceable as a working caf\u00e9.',
      solution:'Timber and rattan finishes, a planted storefront, a feature bar and warm layered lighting, built as a complete fit-out.',
      result:'A green, welcoming caf\u00e9 that draws people in from the strip.',
      cover:A('nest','02'), gallery:['02','04','05','06','01','09'].map(function(n){return A('nest',n);}),
      before:null, after:null
    },
    {
      id:'sd1', name:'SD-1 Penthouse', type:'Residential · Penthouse', cat:'residential',
      location:'El Patio', year:'2019', sector:'Residential · Penthouse', scope:'Interior fit-out', featured:false,
      sub:'A dark, moody penthouse at El Patio — marble, brass and a green terrace.',
      overview:'A penthouse fit-out in a deep, moody palette — dramatic marble, brass detailing and a planted roof terrace with a jacuzzi.',
      challenge:'Holding a dark, luxurious material palette together across living spaces and a roof terrace without losing light or comfort.',
      solution:'Book-matched marble, brass and timber detailing, integrated lighting and a green-walled terrace with a spa and lounge.',
      result:'A confident, intimate penthouse that feels like a private retreat above the city.',
      cover:A('sd1','03'), gallery:['03','05','06','02','04','09'].map(function(n){return A('sd1',n);}),
      before:null, after:null
    },
    {
      id:'b112', name:'B 1-12 Apartment', type:'Residential · Apartment', cat:'residential',
      location:'West Town, SODIC', year:'2018', sector:'Residential · Apartment', scope:'Interior fit-out', featured:false,
      sub:'A warm, contemporary family apartment in West Town, SODIC.',
      overview:'A full apartment fit-out balancing fluted timber joinery, soft neutral tones and art-friendly walls across open living spaces.',
      challenge:'Bringing warmth and craft to an apartment shell while keeping the open-plan living bright and uncluttered.',
      solution:'Bespoke fluted joinery, considered lighting, refined flooring and a calm material palette throughout.',
      result:'A welcoming, characterful family home finished with restraint.',
      cover:A('b112','05'), gallery:['05','03','06','04','07','02'].map(function(n){return A('b112',n);}),
      before:null, after:null
    }
  ];

  var byId = {}; PROJECTS.forEach(function(p){ byId[p.id]=p; });
  function esc(s){ return (s==null?'':String(s)); }

  /* ---------------- masonry grid ---------------- */
  var masonry = document.getElementById('masonry');
  if (masonry){
    masonry.innerHTML = PROJECTS.map(function(p){
      return '<article class="proj" data-cat="'+p.cat+'" data-project="'+p.id+'">' +
        '<div class="proj__media">' +
          '<span class="proj__view">View <span>\u2197</span></span>' +
          '<img src="'+p.cover+'" alt="'+esc(p.name)+'" loading="lazy">' +
        '</div>' +
        '<div class="proj__overlay">' +
          '<span class="proj__type">'+esc(p.type)+'</span>' +
          '<h3 class="proj__name">'+esc(p.name)+'</h3>' +
          '<div class="proj__meta"><span><i>Loc</i> '+esc(p.location)+'</span><span><i>Year</i> '+esc(p.year)+'</span></div>' +
        '</div></article>';
    }).join('');
    masonry.addEventListener('click', function(e){
      var card = e.target.closest('.proj');
      if(card) openProject(card.getAttribute('data-project'));
    });
  }

  /* ---------------- filter ---------------- */
  var filters = document.getElementById('filters');
  if (filters && masonry){
    filters.addEventListener('click', function(e){
      var btn = e.target.closest('.filter'); if(!btn) return;
      filters.querySelectorAll('.filter').forEach(function(b){ b.classList.remove('active'); });
      btn.classList.add('active');
      var f = btn.getAttribute('data-filter');
      masonry.querySelectorAll('.proj').forEach(function(c){
        c.classList.toggle('hide', !(f==='all' || c.getAttribute('data-cat')===f));
      });
    });
  }

  /* ---------------- featured carousel ---------------- */
  var track = document.getElementById('carTrack');
  var dotsEl = document.getElementById('carDots');
  var featured = PROJECTS.filter(function(p){ return p.featured; });
  var ci = 0;

  if (track){
    track.innerHTML = featured.map(function(p,i){
      return '<div class="car__slide" data-project="'+p.id+'">' +
        '<div class="car__media">' +
          '<img src="'+p.cover+'" alt="'+esc(p.name)+'"'+(i>0?' loading="lazy"':'')+'>' +
          '<div class="car__counter">'+('0'+(i+1)).slice(-2)+' / '+('0'+featured.length).slice(-2)+'</div>' +
        '</div>' +
        '<div class="car__caption">' +
          '<div><span class="car__type">'+esc(p.type)+'</span>' +
          '<h3 class="car__name">'+esc(p.name)+'</h3>' +
          '<div class="car__meta"><span><i>Loc</i>'+esc(p.location)+'</span><span><i>Scope</i>'+esc(p.scope)+'</span><span><i>Year</i>'+esc(p.year)+'</span></div></div>' +
          '<div class="car__view"><button class="car__btn" data-open="'+p.id+'">View Project <span class="arr">\u2192</span></button></div>' +
        '</div></div>';
    }).join('');
    featured.forEach(function(p,i){
      var dot=document.createElement('button');
      dot.className='car__dot'+(i===0?' active':'');
      dot.setAttribute('aria-label','Go to project '+(i+1));
      dot.addEventListener('click', function(){ goTo(i); });
      dotsEl.appendChild(dot);
    });
  }

  function goTo(i){
    if(!featured.length) return;
    ci=(i+featured.length)%featured.length;
    track.style.transform='translateX('+(-ci*100)+'%)';
    dotsEl.querySelectorAll('.car__dot').forEach(function(d,k){ d.classList.toggle('active',k===ci); });
  }
  var carPrev=document.getElementById('carPrev'), carNext=document.getElementById('carNext');
  if(carPrev) carPrev.addEventListener('click', function(){ goTo(ci-1); });
  if(carNext) carNext.addEventListener('click', function(){ goTo(ci+1); });

  if(track){
    var startX=0,dragX=0,dragging=false,moved=false,vp=track.parentElement;
    vp.addEventListener('pointerdown', function(e){ dragging=true;moved=false;startX=e.clientX;dragX=0;track.style.transition='none'; });
    window.addEventListener('pointermove', function(e){ if(!dragging)return; dragX=e.clientX-startX; if(Math.abs(dragX)>6)moved=true; track.style.transform='translateX(calc('+(-ci*100)+'% + '+dragX+'px))'; });
    window.addEventListener('pointerup', function(){ if(!dragging)return; dragging=false; track.style.transition=''; if(Math.abs(dragX)>vp.offsetWidth*0.12) goTo(ci+(dragX<0?1:-1)); else goTo(ci); });
    track.addEventListener('click', function(e){
      var btn=e.target.closest('[data-open]'); var slide=e.target.closest('.car__slide');
      if(moved) return;
      if(btn){ openProject(btn.getAttribute('data-open')); return; }
      if(slide){ openProject(slide.getAttribute('data-project')); }
    });
  }

  /* ---------------- detail overlay ---------------- */
  var overlay=document.getElementById('projectDetail');
  var pdInner=document.getElementById('pdInner');
  var pdClose=document.getElementById('pdClose');
  var cache={}, lastFocus=null;

  function slot(id,src,attrs){ return '<image-slot id="'+id+'" fit="cover"'+(src?(' src="'+src+'"'):'')+' placeholder="Drop an image"'+(attrs?(' '+attrs):'')+'></image-slot>'; }

  function buildPanel(p){
    var gal = p.gallery.map(function(src,i){ return slot('pg-'+p.id+'-g'+(i+1), src); }).join('');
    var ba = (p.before||p.after) ?
      ('<section class="pd__ba"><h3>[ Before &amp; After ]</h3><div class="pd__ba-grid">' +
        '<div class="pd__ba-item"><span class="pd__ba-tag">Before</span>'+slot('pg-'+p.id+'-before',p.before)+'</div>' +
        '<div class="pd__ba-item"><span class="pd__ba-tag">After</span>'+slot('pg-'+p.id+'-after',p.after)+'</div>' +
      '</div></section>') : '';
    var node=document.createElement('div');
    node.innerHTML =
      '<header class="pd__head">' +
        '<span class="pd__kick">'+esc(p.type)+'</span>' +
        '<h1 class="pd__title">'+esc(p.name)+'</h1>' +
        '<p class="pd__sub">'+esc(p.sub)+'</p>' +
      '</header>' +
      '<div class="pd__hero">'+slot('pg-'+p.id+'-hero',p.cover,'placeholder="Drop the cover image"')+'</div>' +
      '<dl class="pd__facts">' +
        '<div class="pd__fact"><dt>Sector</dt><dd>'+esc(p.sector)+'</dd></div>' +
        '<div class="pd__fact"><dt>Scope</dt><dd>'+esc(p.scope)+'</dd></div>' +
        '<div class="pd__fact"><dt>Location</dt><dd>'+esc(p.location)+'</dd></div>' +
        '<div class="pd__fact"><dt>Year</dt><dd>'+esc(p.year)+'</dd></div>' +
      '</dl>' +
      '<div class="pd__body">' +
        '<div class="pd__overview"><span class="pd__kick">Overview</span><p>'+esc(p.overview)+'</p></div>' +
        '<div class="pd__csr">' +
          '<div class="row"><span class="mk">01</span><div><h4>The Brief</h4><p>'+esc(p.challenge)+'</p></div></div>' +
          '<div class="row"><span class="mk">02</span><div><h4>What We Delivered</h4><p>'+esc(p.solution)+'</p></div></div>' +
          '<div class="row"><span class="mk">03</span><div><h4>The Result</h4><p>'+esc(p.result)+'</p></div></div>' +
        '</div>' +
      '</div>' +
      '<div class="pd__galhead"><h3>[ Project Gallery ]</h3><span class="eyebrow" style="color:var(--d-soft);">Drag a photo onto any frame to replace it</span></div>' +
      '<div class="pd__gallery">'+gal+'</div>' +
      ba +
      buildNext(p);
    return node;
  }
  function buildNext(p){
    var i=PROJECTS.findIndex(function(x){return x.id===p.id;});
    var nxt=PROJECTS[(i+1)%PROJECTS.length];
    return '<div class="pd__next" data-next="'+nxt.id+'"><div><span class="lab">Next Project</span><div class="nm">'+esc(nxt.name)+'</div></div><span class="arr">\u2192</span></div>';
  }
  function openProject(id){
    var p=byId[id]; if(!p||!overlay) return;
    if(!cache[id]) cache[id]=buildPanel(p);
    pdInner.innerHTML=''; pdInner.appendChild(cache[id]);
    var nt=pdInner.querySelector('.pd__next');
    if(nt) nt.addEventListener('click', function(){ openProject(nt.getAttribute('data-next')); });
    lastFocus=document.activeElement;
    document.body.classList.add('pd-lock');
    overlay.classList.add('open'); overlay.scrollTop=0;
    if(pdClose) pdClose.focus();
  }
  function closeProject(){
    if(!overlay) return;
    overlay.classList.remove('open');
    document.body.classList.remove('pd-lock');
    if(lastFocus&&lastFocus.focus) lastFocus.focus();
  }
  if(pdClose) pdClose.addEventListener('click', closeProject);
  document.addEventListener('keydown', function(e){
    var tag=(document.activeElement&&document.activeElement.tagName)||'';
    if(overlay&&overlay.classList.contains('open')){ if(e.key==='Escape') closeProject(); return; }
    if(/INPUT|TEXTAREA|SELECT/.test(tag)) return;
    if(e.key==='ArrowRight'&&featured.length) goTo(ci+1);
    if(e.key==='ArrowLeft'&&featured.length) goTo(ci-1);
  });
  window.WYTopenProject=openProject;
})();
