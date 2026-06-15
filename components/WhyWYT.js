const REASONS = [
  { n: '01', t: 'Quality assurance',        d: 'Tolerances checked, not assumed. Every surface inspected before sign-off.' },
  { n: '02', t: 'Single point of contact',  d: 'One project lead from first call to final key — no being passed around.' },
  { n: '03', t: 'End-to-end execution',     d: 'Design, build and finish under one contract and one accountable team.' },
  { n: '04', t: 'On-time delivery',         d: 'Programmes built to be met — and reported transparently as we go.' },
  { n: '05', t: 'Expert team',              d: 'Trades and managers who have delivered together for over a decade.' },
  { n: '06', t: 'Premium materials',        d: 'Specified honestly, sourced responsibly, detailed with restraint.' },
];

export default function WhyWYT() {
  return (
    <section className="section warm">
      <div className="wrap">
        <div className="sec-head reveal">
          <div className="sec-head__main">
            <span className="kicker"><span className="ix">06</span> Why WYT</span>
            <h2 className="h-xl">Reasons clients<br />stay with us.</h2>
          </div>
        </div>
        <div className="why-grid reveal" data-d="1">
          {REASONS.map(r => (
            <div className="why" key={r.n}>
              <span className="why__ix">{r.n}</span>
              <h3 className="why__t">{r.t}</h3>
              <p className="why__d">{r.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
