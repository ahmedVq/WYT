'use client';
import { useRef } from 'react';

const RAIL_IMAGES = [
  { src: '/assets/portfolio/r566/01.jpg', alt: 'Studio detail' },
  { src: '/assets/portfolio/a40/06.jpg',  alt: 'Interior detail' },
  { src: '/assets/portfolio/riva/04.jpg', alt: 'Material detail' },
  { src: '/assets/portfolio/v166/05.jpg', alt: 'Material detail' },
  { src: '/assets/portfolio/b34/06.jpg',  alt: 'Interior detail' },
  { src: '/assets/portfolio/sd1/05.jpg',  alt: 'Material detail' },
  { src: '/assets/portfolio/b112/03.jpg', alt: 'Interior detail' },
];

export default function Studio() {
  const railRef = useRef(null);

  function onPointerDown(e) {
    const rail = railRef.current;
    if (!rail) return;
    const startX = e.clientX;
    const startLeft = rail.scrollLeft;
    rail.classList.add('dragging');
    try { rail.setPointerCapture(e.pointerId); } catch {}

    function onMove(ev) {
      rail.scrollLeft = startLeft - (ev.clientX - startX);
    }
    function onEnd() {
      rail.classList.remove('dragging');
      rail.removeEventListener('pointermove', onMove);
      rail.removeEventListener('pointerup', onEnd);
      rail.removeEventListener('pointercancel', onEnd);
    }
    rail.addEventListener('pointermove', onMove);
    rail.addEventListener('pointerup', onEnd);
    rail.addEventListener('pointercancel', onEnd);
  }

  function onWheel(e) {
    const rail = railRef.current;
    if (!rail) return;
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      rail.scrollLeft += e.deltaY;
      e.preventDefault();
    }
  }

  return (
    <section className="section paper" id="studio">
      <div className="wrap">
        <div className="about-grid">
          <div className="about-copy reveal">
            <span className="kicker"><span className="ix">01</span> The Studio</span>
            <h2 className="h-lg" style={{ marginTop: 22 }}>
              We build quiet, exacting spaces — and we run the whole project ourselves.
            </h2>
            <p className="lead" style={{ marginTop: 26 }}>
              WYT is a construction and fine-finishing practice working with developers, architects
              and private clients who care about how a space is made, not only how it looks.
            </p>
            <p style={{ marginTop: 18, color: 'var(--text-soft)' }}>
              From structural works through to the last shadow-gap and surface, a single WYT team
              carries the project. One point of contact, one standard, one schedule — held to the millimetre.
            </p>
            <dl className="about-values">
              <div><dt>Single accountability</dt><dd>One team owns the build end to end.</dd></div>
              <div><dt>Material honesty</dt><dd>Stone, timber and metal, detailed with restraint.</dd></div>
              <div><dt>Architectural precision</dt><dd>Tolerances measured, not estimated.</dd></div>
              <div><dt>Calm delivery</dt><dd>Predictable schedules, no surprises.</dd></div>
            </dl>
          </div>

          <div className="studio-col reveal" data-d="1">
            <div
              className="studio-rail"
              ref={railRef}
              onPointerDown={onPointerDown}
              onWheel={onWheel}
              style={{ touchAction: 'pan-x' }}
            >
              {RAIL_IMAGES.map((img, i) => (
                <div className="rail-item" key={i}>
                  <img src={img.src} alt={img.alt} loading={i > 0 ? 'lazy' : undefined} />
                </div>
              ))}
            </div>
            <div className="studio-rail__hint eyebrow">
              [ Drag or scroll to explore <span className="arr">&#8594;</span> ]
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
