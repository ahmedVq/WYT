'use client';
import { useEffect, useRef } from 'react';

function Counter({ target, suffix }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const obs = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      obs.disconnect();
      if (reduce) {
        el.innerHTML = target + '<span class="suf">' + suffix + '</span>';
        return;
      }
      const dur = 1500;
      let start = null;
      function step(ts) {
        if (!start) start = ts;
        const p = Math.min((ts - start) / dur, 1);
        const val = Math.round(target * (1 - Math.pow(1 - p, 3)));
        el.innerHTML = val + '<span class="suf">' + suffix + '</span>';
        if (p < 1) requestAnimationFrame(step);
        else el.innerHTML = target + '<span class="suf">' + suffix + '</span>';
      }
      requestAnimationFrame(step);
    }, { threshold: 0.5 });

    obs.observe(el);
    return () => obs.disconnect();
  }, [target, suffix]);

  return (
    <div className="stat__num" ref={ref}>
      {target}<span className="suf">{suffix}</span>
    </div>
  );
}

const STATS = [
  { target: 240, suffix: '+',    label: 'Projects completed across sectors' },
  { target: 12,  suffix: ' yrs', label: 'Years delivering turnkey builds' },
  { target: 380, suffix: 'k m²', label: 'Total floor area delivered' },
  { target: 98,  suffix: '%',    label: 'Client satisfaction on handover' },
];

export default function Stats() {
  return (
    <section className="section warm" style={{ paddingTop: 0, paddingBottom: 0 }} aria-label="By the numbers">
      <div className="wrap" style={{ paddingTop: 'clamp(56px,7vw,96px)', paddingBottom: 'clamp(56px,7vw,96px)' }}>
        <div className="stats reveal">
          {STATS.map(s => (
            <div className="stat" key={s.label}>
              <Counter target={s.target} suffix={s.suffix} />
              <div className="stat__label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
