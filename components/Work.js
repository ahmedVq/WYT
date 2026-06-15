'use client';
import { useState, useRef, useEffect, useCallback } from 'react';
import { useProject } from '../context/ProjectContext';
import { PROJECTS } from '../data/projects';

const FILTERS = [
  { key: 'all',         label: 'All Work' },
  { key: 'residential', label: 'Residential' },
  { key: 'hospitality', label: 'Hospitality' },
  { key: 'cultural',    label: 'Cultural & Commercial' },
];

const featured = PROJECTS.filter(p => p.featured);

export default function Work() {
  const { setOpenId } = useProject();
  const [filter, setFilter]   = useState('all');
  const [carIdx, setCarIdx]   = useState(0);
  const carIdxRef             = useRef(0);
  const trackRef              = useRef(null);
  const vpRef                 = useRef(null);

  const goTo = useCallback((i) => {
    const next = ((i % featured.length) + featured.length) % featured.length;
    carIdxRef.current = next;
    setCarIdx(next);
  }, []);

  // Imperative transform sync
  useEffect(() => {
    const track = trackRef.current;
    if (track) track.style.transform = `translateX(${-carIdx * 100}%)`;
  }, [carIdx]);

  // Drag on viewport
  useEffect(() => {
    const vp    = vpRef.current;
    const track = trackRef.current;
    if (!vp || !track) return;

    let dragging = false, startX = 0, dragX = 0, moved = false;

    function onDown(e) {
      dragging = true; moved = false; startX = e.clientX; dragX = 0;
      track.style.transition = 'none';
    }
    function onMove(e) {
      if (!dragging) return;
      dragX = e.clientX - startX;
      if (Math.abs(dragX) > 6) moved = true;
      track.style.transform = `translateX(calc(${-carIdxRef.current * 100}% + ${dragX}px))`;
    }
    function onUp() {
      if (!dragging) return;
      dragging = false;
      track.style.transition = '';
      if (Math.abs(dragX) > vp.offsetWidth * 0.12) {
        goTo(carIdxRef.current + (dragX < 0 ? 1 : -1));
      } else {
        track.style.transform = `translateX(${-carIdxRef.current * 100}%)`;
      }
    }

    vp.addEventListener('pointerdown', onDown);
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
    return () => {
      vp.removeEventListener('pointerdown', onDown);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
    };
  }, [goTo]);

  // Keyboard arrow navigation
  useEffect(() => {
    function onKey(e) {
      const tag = (document.activeElement?.tagName || '');
      if (/INPUT|TEXTAREA|SELECT/.test(tag)) return;
      if (e.key === 'ArrowRight') goTo(carIdxRef.current + 1);
      if (e.key === 'ArrowLeft')  goTo(carIdxRef.current - 1);
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [goTo]);

  const visible = filter === 'all' ? PROJECTS : PROJECTS.filter(p => p.cat === filter);

  return (
    <section className="section warm" id="work">
      <div className="wrap">
        <div className="sec-head reveal">
          <div className="sec-head__main">
            <span className="kicker"><span className="ix">03</span> Selected Work</span>
            <h2 className="h-xl">The portfolio.</h2>
          </div>
          <p className="sec-head__aside lead">
            Summer houses on the North Coast, residences in New Giza, and landmark commercial and
            cultural work across Egypt — turnkey construction and fine finishes, delivered end to end.
          </p>
        </div>

        {/* Carousel */}
        <div className="car reveal" data-d="1" aria-label="Featured projects">
          <div className="car__viewport" ref={vpRef} style={{ touchAction: 'pan-y' }}>
            <div className="car__track" ref={trackRef} style={{ transform: 'translateX(0%)' }}>
              {featured.map((p, i) => (
                <div
                  className="car__slide"
                  key={p.id}
                  onClick={() => setOpenId(p.id)}
                >
                  <div className="car__media">
                    <img src={p.cover} alt={p.name} loading={i > 0 ? 'lazy' : undefined} />
                    <div className="car__counter">
                      {String(i + 1).padStart(2, '0')} / {String(featured.length).padStart(2, '0')}
                    </div>
                  </div>
                  <div className="car__caption">
                    <div>
                      <span className="car__type">{p.type}</span>
                      <h3 className="car__name">{p.name}</h3>
                      <div className="car__meta">
                        <span><i>Loc</i>{p.location}</span>
                        <span><i>Scope</i>{p.scope}</span>
                        <span><i>Year</i>{p.year}</span>
                      </div>
                    </div>
                    <div className="car__view">
                      <button
                        className="car__btn"
                        onClick={e => { e.stopPropagation(); setOpenId(p.id); }}
                      >
                        View Project <span className="arr">→</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="car__bar">
            <div className="car__dots">
              {featured.map((_, i) => (
                <button
                  key={i}
                  className={`car__dot${i === carIdx ? ' active' : ''}`}
                  aria-label={`Go to project ${i + 1}`}
                  onClick={() => goTo(i)}
                />
              ))}
            </div>
            <div className="car__arrows">
              <button className="car__arrow" onClick={() => goTo(carIdx - 1)} aria-label="Previous project">←</button>
              <button className="car__arrow" onClick={() => goTo(carIdx + 1)} aria-label="Next project">→</button>
            </div>
          </div>
        </div>

        <div className="reveal" style={{ display:'flex', alignItems:'baseline', justifyContent:'space-between', gap:20, marginBottom:22, flexWrap:'wrap' }}>
          <span className="eyebrow">[ Browse all work ]</span>
          <span className="eyebrow" style={{ opacity: .6 }}>Click any project for the full gallery →</span>
        </div>

        {/* Filters */}
        <div className="filters reveal" data-d="1">
          {FILTERS.map(f => (
            <button
              key={f.key}
              className={`filter${filter === f.key ? ' active' : ''}`}
              onClick={() => setFilter(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Masonry grid */}
        <div className="masonry reveal" data-d="2">
          {visible.map(p => (
            <article className="proj" key={p.id} onClick={() => setOpenId(p.id)}>
              <div className="proj__media">
                <span className="proj__view">View <span>↗</span></span>
                <img src={p.cover} alt={p.name} loading="lazy" />
              </div>
              <div className="proj__overlay">
                <span className="proj__type">{p.type}</span>
                <h3 className="proj__name">{p.name}</h3>
                <div className="proj__meta">
                  <span><i>Loc</i> {p.location}</span>
                  <span><i>Year</i> {p.year}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
