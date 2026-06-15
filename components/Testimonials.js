'use client';
import { useState } from 'react';

const QUOTES = [
  { q: 'WYT delivered our North Coast summer house end to end — structure, stonework, pools and finishing — and handed it over ready to live in, on the date they promised.', b: 'Private Client', s: 'Almaza Bay Residence' },
  { q: 'The finishing is the part most contractors rush. WYT slowed down where it mattered — the travertine, the shadow gaps, the lighting — and the detailing is faultless.', b: 'Principal Architect', s: 'Residential Project, New Giza' },
  { q: 'They ran a complex commercial fit-out on a tight programme and kept it calm the whole way. We have already handed them our next project.', b: 'Operations Director', s: 'Hospitality Group' },
];

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const q = QUOTES[idx];

  function prev() { setIdx(i => (i - 1 + QUOTES.length) % QUOTES.length); }
  function next() { setIdx(i => (i + 1) % QUOTES.length); }

  return (
    <section className="section paper">
      <div className="wrap">
        <div className="testi">
          <div className="testi__media reveal">
            <img src="/assets/portfolio/b112/03.jpg" alt="Client project" loading="lazy" />
          </div>
          <div className="reveal" data-d="1">
            <span className="kicker"><span className="ix">07</span> Clients</span>
            <div style={{ marginTop: 26 }}>
              <blockquote className="testi-slide">
                <p className="testi__q">
                  <span className="mk">&ldquo;</span>{q.q}<span className="mk">&rdquo;</span>
                </p>
                <div className="testi__by">
                  <span className="ln" />
                  <div><b>{q.b}</b><br /><span>{q.s}</span></div>
                </div>
              </blockquote>
            </div>
            <div className="testi__nav">
              <button onClick={prev} aria-label="Previous">←</button>
              <button onClick={next} aria-label="Next">→</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
