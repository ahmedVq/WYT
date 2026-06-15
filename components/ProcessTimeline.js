const STEPS = [
  { n: '01', t: 'Consultation', d: 'We listen to the brief, the budget and the deadline, then tell you honestly what\'s possible.' },
  { n: '02', t: 'Design',       d: 'Concept, materials and detailing developed with your architect or ours.' },
  { n: '03', t: 'Planning',     d: 'Programme, procurement and cost locked before a tool is lifted.' },
  { n: '04', t: 'Construction', d: 'Structure, services and base build executed to the agreed schedule.' },
  { n: '05', t: 'Finishing',    d: 'The fine finishes — surfaces, joinery and light — brought to tolerance.' },
  { n: '06', t: 'Handover',     d: 'Snag-free delivery, documentation and aftercare you can rely on.' },
];

export default function ProcessTimeline() {
  return (
    <section className="section dark" id="process">
      <div className="wrap">
        <div className="sec-head reveal">
          <div className="sec-head__main">
            <span className="kicker"><span className="ix">05</span> The Turnkey Journey</span>
            <h2 className="h-xl">Six stages,<br />one team.</h2>
          </div>
          <p className="sec-head__aside lead">
            Every project follows the same disciplined path. You speak to one team the whole way —
            there is no handoff between design and build.
          </p>
        </div>

        <div className="timeline reveal" data-d="1">
          {STEPS.map(s => (
            <div className="tl-step" key={s.n}>
              <span className="tl-step__n">{s.n}</span>
              <span className="tl-step__dot" />
              <h3 className="tl-step__title">{s.t}</h3>
              <p className="tl-step__desc">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
