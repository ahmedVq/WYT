'use client';
import { useEffect, useRef } from 'react';
import { useProject } from '../context/ProjectContext';
import { BY_ID, PROJECTS } from '../data/projects';

function Panel({ project: p, onOpen }) {
  const nextIdx = (PROJECTS.findIndex(x => x.id === p.id) + 1) % PROJECTS.length;
  const next = PROJECTS[nextIdx];

  return (
    <div className="pd__inner">
      <header className="pd__head">
        <span className="pd__kick">{p.type}</span>
        <h1 className="pd__title">{p.name}</h1>
        <p className="pd__sub">{p.sub}</p>
      </header>

      <div className="pd__hero">
        <img src={p.cover} alt={p.name} />
      </div>

      <dl className="pd__facts">
        <div className="pd__fact"><dt>Sector</dt><dd>{p.sector}</dd></div>
        <div className="pd__fact"><dt>Scope</dt><dd>{p.scope}</dd></div>
        <div className="pd__fact"><dt>Location</dt><dd>{p.location}</dd></div>
        <div className="pd__fact"><dt>Year</dt><dd>{p.year}</dd></div>
      </dl>

      <div className="pd__body">
        <div className="pd__overview">
          <span className="pd__kick">Overview</span>
          <p>{p.overview}</p>
        </div>
        <div className="pd__csr">
          <div className="row"><span className="mk">01</span><div><h4>The Brief</h4><p>{p.challenge}</p></div></div>
          <div className="row"><span className="mk">02</span><div><h4>What We Delivered</h4><p>{p.solution}</p></div></div>
          <div className="row"><span className="mk">03</span><div><h4>The Result</h4><p>{p.result}</p></div></div>
        </div>
      </div>

      <div className="pd__galhead">
        <h3>[ Project Gallery ]</h3>
      </div>
      <div className="pd__gallery">
        {p.gallery.map((src, i) => (
          <img key={i} src={src} alt={`${p.name} — ${i + 1}`} loading="lazy" />
        ))}
      </div>

      {(p.before || p.after) && (
        <section className="pd__ba">
          <h3>[ Before &amp; After ]</h3>
          <div className="pd__ba-grid">
            {p.before && (
              <div className="pd__ba-item">
                <span className="pd__ba-tag">Before</span>
                <img src={p.before} alt={`${p.name} — before`} loading="lazy" />
              </div>
            )}
            {p.after && (
              <div className="pd__ba-item">
                <span className="pd__ba-tag">After</span>
                <img src={p.after} alt={`${p.name} — after`} loading="lazy" />
              </div>
            )}
          </div>
        </section>
      )}

      <div className="pd__next" onClick={() => onOpen(next.id)}>
        <div>
          <span className="lab">Next Project</span>
          <div className="nm">{next.name}</div>
        </div>
        <span className="arr">→</span>
      </div>
    </div>
  );
}

export default function ProjectDetail() {
  const { openId, setOpenId } = useProject();
  const overlayRef = useRef(null);
  const project = openId ? BY_ID[openId] : null;

  useEffect(() => {
    if (openId) {
      document.body.classList.add('pd-lock');
      overlayRef.current?.scrollTo(0, 0);
    } else {
      document.body.classList.remove('pd-lock');
    }
    return () => document.body.classList.remove('pd-lock');
  }, [openId]);

  useEffect(() => {
    function onKey(e) {
      if (openId && e.key === 'Escape') setOpenId(null);
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [openId, setOpenId]);

  return (
    <div
      className={`pd${openId ? ' open' : ''}`}
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      aria-label="Project detail"
    >
      <div className="pd__bar">
        <span className="pd__brand">WYT<span className="tag">Fine Finishes</span></span>
        <button className="pd__close" onClick={() => setOpenId(null)}>
          Close <span>✕</span>
        </button>
      </div>
      {project && <Panel project={project} onOpen={setOpenId} />}
    </div>
  );
}
